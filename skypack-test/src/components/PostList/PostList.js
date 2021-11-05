import { html } from "https://cdn.skypack.dev/htm/preact";
import {
  useEffect,
  useState
} from "https://cdn.skypack.dev/preact@10.4.7/hooks";

export function PostList() {
  const [data, setData] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postTitle = (item) => html`<li>${item.title}</li>`;

  return html`
    <h1>PostList</h1>
    <ul>
      ${data.map(postTitle)}
    </ul>
  `;
}
