import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IGetPosts } from '../../interface/posts'

export interface postState {
  openDialog: boolean
  openViewDialog: boolean
  post: IGetPosts
  listPosts: Array<IGetPosts>
}

const initialState: postState = {
  openDialog: false,
  openViewDialog: false,
  post: {
    title: '',
    author: '',
    content: '',
    createdAt: new Date(),
  },
  listPosts: [],
}

export const postStateSlice = createSlice({
  name: 'postState',
  initialState,
  reducers: {
    openDialog: (state) => {
      state.openDialog = true
    },
    closeDialog: (state) => {
      state.openDialog = false
    },
    openViewDialog: (state) => {
      state.openViewDialog = true
    },
    closeViewDialog: (state) => {
      state.openViewDialog = false
    },
    setPost: (state, value: PayloadAction<IGetPosts>) => {
      state.post = value.payload
    },
    setListPosts: (state, value: PayloadAction<Array<IGetPosts>>) => {
      state.listPosts = value.payload
    },
  },
})

export const {
  openDialog,
  closeDialog,
  openViewDialog,
  closeViewDialog,
  setPost,
  setListPosts,
} = postStateSlice.actions

export default postStateSlice.reducer
