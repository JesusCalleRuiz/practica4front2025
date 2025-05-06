import { FunctionalComponent } from "preact";

export type Post = {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  comments: {
    author: string;
    content: string;
    createdAt: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

const Post: FunctionalComponent<Post> = ({ title, content, author, cover, likes, comments, createdAt }) => {
  return (
    <div>
      <img src={cover} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
        <span>Autor: {author}</span>
        <span>{createdAt}</span>
        <span>{likes} Likes</span>
        <h3>Comentarios:</h3>
          {comments?.map((comment) => (
            <div key={comment._id}>
              <p>{comment.content}</p>
              <span>- {comment.author}, {comment.createdAt}</span>
            </div>
          ))}
    </div>
  );
};

export default Post;