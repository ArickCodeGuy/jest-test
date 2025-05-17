export class IComponent<T = unknown> {
  element: HTMLElement;
  props?: T;
  render: () => HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap, props?: T) {
    this.element = document.createElement(tagName);
    this.render = () => this.element;
    this.props = props;
  }
}
