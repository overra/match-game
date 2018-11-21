import { html } from "htm/preact/standalone";
import "./match-game.less";

export default () => {
  const tiles = Array(16).fill(0);
  return html`
    <section>
      <div class="tiles">
        ${
          tiles.map(
            tile =>
              html`
        <div class="tile" />
      `
          )
        }
      </div>
    </section>
  `;
};
