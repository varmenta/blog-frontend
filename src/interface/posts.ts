export interface IGetPosts {
  id?: number
  title: string
  author: string
  content: string
  createdAt: Date
}

export interface ICreatePost extends Omit<IGetPosts, 'id' | 'createdAt'> {}
