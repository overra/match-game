import { html, Component, render } from "htm/preact/standalone";
import MatchGame from "./components/match-game";

render(html`<${MatchGame} />`, document.body);
