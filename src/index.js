import { html, Component, render } from "htm/preact/standalone";
import App from "./components/app";

render(html`<${App} />`, document.body);
