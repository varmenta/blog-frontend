import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { openViewDialog, setPost } from '../../redux/slices/postState'
import { RootState } from '../../redux/store'
import moment from 'moment'

export const TablePosts: React.FC = () => {
  const { listPosts } = useSelector((store: RootState) => store.postState)
  const dispatch = useDispatch()

  return (
    <>
      <Grid container justifyContent="center" direction="row" spacing={2}>
        {listPosts?.map((post) => (
          <Grid item xs={12} md={5} sm={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader
                title={post.title}
                subheader={`Autor: ${post.author}`}
              />
              <CardContent>
                <Typography>
                  {post.content.length > 70
                    ? `${post.content.substring(0, 70)}...`
                    : post.content}
                </Typography>
                <br />
                <Typography variant="body2">
                  Fecha: {moment(post.createdAt).format('D/MM/YYYY')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(setPost(post))
                    dispatch(openViewDialog())
                  }}
                >
                  Leer mas
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
