import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PostContainer from "../components/PostContainer.tsx";

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
    posts: Post[];
  }
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await Axios.get<Data>("https://back-p5-y0e1.onrender.com/api/posts");
      //console.log(response.data.data.posts);
      return ctx.render({ posts: response.data.data.posts });
    } catch (e) {
      return new Response("Error de API");
    }
  },
};

export default (props: PageProps<Data>) => {
    const posts = props.data.posts;
    return (<PostContainer posts={posts}/>);
}