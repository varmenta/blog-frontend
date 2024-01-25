import { useEffect } from 'react'
import { useLazyGetPostsQuery } from '../../redux/api/posts.api'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'

export const TablePosts: React.FC = () => {
  const [getPosts, { data: posts }] = useLazyGetPostsQuery()

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Grid container justifyContent="center" direction="row" spacing={2}>
        {posts?.map((post) => (
          <Grid item xs={12} md={5} sm={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardHeader title={post.title} subheader={post.author} />
              <CardContent>
                <Typography>{post.content}</Typography>
                <br />
                <Typography variant="body2">
                  {post.createdAt.toString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Leer mas</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
