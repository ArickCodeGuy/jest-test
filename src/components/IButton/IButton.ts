import { IComponent } from '../Component';
import './style.css';

export type IButtonProps = string;

export class IButton extends IComponent<IButtonProps> {
  constructor(props: IButtonProps) {
    super(
      () =>
        `<button type="button" class="IButton">${this.props ?? ''}</button>`,
      props
    );
  }
}
