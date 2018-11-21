import { html, Component } from "htm/preact/standalone";
import Tilt from "./tilt";
import "./match-game.css";

export default class extends Component {
  render() {
    const tiles = Array(16).fill(0);
    return html`
      <section>
        <h1>Match Game</h1>
        <div class="tiles">
          ${
            tiles.map(
              tile =>
                html`
        <${Tilt} class="tile"/>
      `
            )
          }
        </div>
      </section>
    `;
  }
}
