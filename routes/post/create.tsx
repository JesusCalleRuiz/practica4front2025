import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../../components/Form.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const form = await req.formData();
    const title = form.get("tilte");
    const cover = form.get("cover");
    const content = form.get("content");
    const author = form.get("author");

    try {
      const response = await Axios.post("https://back-p5-y0e1.onrender.com/api/post", {title,cover,content,author});
    } catch (e) {
      console.error(e);
      return new Response("Error de API");
    }
  },
};

const Page = () => {
  return <Form />;
};

export default Page;