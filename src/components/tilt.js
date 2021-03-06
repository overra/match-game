import { h, Component } from "htm/preact/standalone";
import Tilt from "vanilla-tilt";

export default class extends Component {
  initRef(ref) {
    this.ref = ref;
    Tilt.init(ref);
  }
  componentWillUnmount() {
    if (this.ref) {
      this.ref.vanillaTilt.destroy();
    }
  }
  render() {
    const { initRef } = this;
    return <div ref={initRef.bind(this)}>{this.props.children}</div>;
  }
}
