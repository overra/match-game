import { html } from "htm/preact/standalone";
import { Link } from "preact-router/match";

export default () => html`
  <div>
    <h1>welcome to match game</h1>
    <a href="/play">Play</a>
  </div>
`;
