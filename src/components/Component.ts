export class IComponent<T = unknown> {
  props?: T;
  render: () => string;

  constructor(render: () => string, props?: T) {
    this.render = render;
    this.props = props;
  }
}
