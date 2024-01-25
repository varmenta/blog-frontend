import { Button, Grid, TextField } from '@mui/material'
import { TablePosts } from './components/posts/table'
import { Add } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { openDialog, setListPosts } from './redux/slices/postState'
import { AddPost } from './components/posts/add'
import { useLazyGetPostsQuery } from './redux/api/posts.api'
import { ViewPost } from './components/posts/view'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()

  const [getPosts, { data: posts }] = useLazyGetPostsQuery()

  useEffect(() => {
    getPosts('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (posts) dispatch(setListPosts(posts))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts])

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <Grid item xs={12} md={3}>
          <Button
            color="primary"
            onClick={() => dispatch(openDialog())}
            fullWidth
            sx={{ height: '100%' }}
          >
            <Add color={'primary'} /> Crear Post
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            fullWidth
            onChange={(e) => {
              if (e.target.value == '') {
                getPosts('')
                return
              }
              getPosts(e.target.value)
            }}
          />
        </Grid>
      </Grid>
      <TablePosts />
      <AddPost />
      <ViewPost />
    </div>
  )
}

export default App
