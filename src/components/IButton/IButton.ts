import { IComponent } from '../Component';
import './style.css';

export type IButtonProps = {
  text?: string;
  style?: any;
  onClick?: (element: HTMLElement, props: IButtonProps) => void;
};

export class IButton extends IComponent<IButtonProps> {
  constructor(props: IButtonProps) {
    super('button', props);

    if (this.props?.style) this.element.style = this.props.style;
    this.element.classList.add('IButton');
    if (props.text) this.element.innerText = props.text;
    this.element.addEventListener('click', () => {
      if (this.props?.onClick) this.props.onClick(this.element, this.props);
    });
  }
}
