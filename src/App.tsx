import { Autocomplete, Button, Grid, TextField } from '@mui/material'
import { TablePosts } from './components/posts/table'
import { Add } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { openDialog } from './redux/slices/postState'
import { AddPost } from './components/posts/add'

const filters = [
  { label: 'Titulo', filter: 'title' },
  { label: 'Autor', filter: 'author' },
  { label: 'Contenido', filter: 'content' },
]

const App = () => {
  const dispatch = useDispatch()

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
        <Grid item xs={12} md={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={filters}
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} label="Filtrar por" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <TablePosts />
      <AddPost />
    </div>
  )
}

export default App
