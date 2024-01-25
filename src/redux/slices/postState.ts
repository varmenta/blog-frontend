import { createSlice } from '@reduxjs/toolkit'

export interface postState {
  openDialog: boolean
}

const initialState: postState = {
  openDialog: false,
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
  },
})

export const { openDialog, closeDialog } = postStateSlice.actions

export default postStateSlice.reducer
