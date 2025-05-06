import { FunctionalComponent } from "preact";

const Form: FunctionalComponent = () => {
  return (
    <div>
      <form method="GET">
        <input type="text" name="title" placeholder="titulo"/>
        <input type="text" name="cover" placeholder="cover"/>
        <input type="text" name="content" placeholder="contenido"/>
        <input type="text" name="author" placeholder="autor"/>
        <button type="submit">Crear Post</button>
      </form>
    </div>
  );
};

export default Form;
