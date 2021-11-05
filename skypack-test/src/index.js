import { html } from "https://cdn.skypack.dev/htm/preact";
import { render } from "https://cdn.skypack.dev/preact@10.4.7";
import { PostList } from "./components/PostList/PostList.js";

function App() {
  return html`
    <h1>Hello!</h1>
    <${PostList} />
  `;
}

render(html`<${App} />`, document.body);
