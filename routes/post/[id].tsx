import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Post from "../../components/Post.tsx";

type Post = {
    _id: string;
    title: string;
    content: string;
    author: string;
    cover: string;
    likes: number;
    comments:{
      author: string;
      content: string;
      createdAt: string;
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
  };
  
  type Data = {
    data:{
      posts: Post;
    }
  };

  export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
      const { id } = ctx.params;
      try {
        const response = await Axios.get(`https://back-p5-y0e1.onrender.com/api/posts/${id}`);
  
        return ctx.render({ post: response.data.data });
      } catch (e) {
        console.error(e);
        return new Response("Error de API");
      }
    }
  };
  
  const Page = (props: PageProps<Data>) => {
    const { post } = props.data;
  
    return (
      <Post {...post} />
    );
  };
  
  export default Page;