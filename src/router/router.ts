import { IButtonDemo } from '../components/IButton/Demo.ts';
import { mainView } from '../mainView.ts';

export const VIEWS: Record<string, Node | string> = {
  IButton: IButtonDemo,
};

function getView(path = location.pathname.substring(1)): Node | string {
  if (VIEWS[path]) return VIEWS[path];
  return mainView;
}

export const updateView = () => {
  document.querySelector('#app')!.append(getView());
};
