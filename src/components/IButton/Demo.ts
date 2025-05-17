import { IButton } from './IButton';

export const IButtonDemo = document.createElement('div');

IButtonDemo.append(
  new IButton({
    text: 'something',
    onClick: (element, props) => {
      if (element.style.backgroundColor) {
        element.style.backgroundColor = '';
      } else {
        element.style.backgroundColor = 'red';
      }
    },
  }).render()
);
