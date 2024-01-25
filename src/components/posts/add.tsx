import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { closeDialog } from '../../redux/slices/postState'
import { useForm } from 'react-hook-form'
import { ICreatePost } from '../../interface/posts'
import { useCreatePostMutation } from '../../redux/api/posts.api'

export const AddPost = () => {
  const dispatch = useDispatch()
  const { openDialog } = useSelector((store: RootState) => store.postState)
  const [createPost, { isLoading }] = useCreatePostMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePost>()

  const handleCreatePost = (data: ICreatePost) => {
    createPost(data).unwrap()
    dispatch(closeDialog())
  }

  return (
    <div>
      <Dialog open={openDialog}>
        <DialogTitle>
          <Typography variant="h6" align="center">
            Crear post
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
            gap={2}
          >
            <Grid item xs={6}>
              <TextField
                autoFocus
                placeholder="Titulo"
                {...register('title', {
                  required: {
                    value: true,
                    message: 'El titulo es requerido',
                  },
                })}
                error={!!errors.title}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder="Autor"
                {...register('author', {
                  required: {
                    value: true,
                    message: 'El autor es requerido',
                  },
                })}
                error={!!errors.author}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                multiline
                rows={4}
                placeholder="Contenido"
                {...register('content', {
                  required: {
                    value: true,
                    message: 'El contenido es requerido',
                  },
                })}
                error={!!errors.content}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => dispatch(closeDialog())}>
            Cancelar
          </Button>
          <Button
            disabled={isLoading}
            onClick={handleSubmit(handleCreatePost)}
            endIcon={isLoading && <CircularProgress size={15} />}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
