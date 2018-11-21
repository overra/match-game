import { html } from "htm/preact/standalone";
import styled from "./styled";
import Tilt from "./tilt";

const Tiles = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  gridGap: "10px",
  "> div": {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc"
  }
});

export default () => {
  const tiles = Array(16).fill(0);
  return html`
    <section>
      <h1>Match Game</h1>
      <${Tiles}>${tiles.map(
    tile =>
      html`
        <${Tilt}>tile<//>
      `
  )}<//>
    </section>
  `;
};
