import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { closeViewDialog } from '../../redux/slices/postState'
import moment from 'moment'

export const ViewPost = () => {
  const dispatch = useDispatch()
  const { openViewDialog, post } = useSelector(
    (store: RootState) => store.postState,
  )

  return (
    <div>
      <Dialog fullWidth maxWidth="lg" open={openViewDialog}>
        <DialogTitle>
          <Typography variant="h6" align="center">
            {post.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom={true}>Autor: {post.author}</Typography>
          <Typography gutterBottom={true}>Contenido: {post.content}</Typography>
          <Typography gutterBottom={true}>
            Fecha: {moment(post.createdAt).format('D/MM/YYYY')}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => dispatch(closeViewDialog())}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
