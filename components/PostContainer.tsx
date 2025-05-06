import { FunctionalComponent } from "preact";
import Post from "./Post.tsx"

export type PostProps = {
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

const PostContainer: FunctionalComponent<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
      {posts?.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  );
};

export default PostContainer;
