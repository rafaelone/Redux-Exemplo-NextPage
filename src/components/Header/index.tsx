import { ReactElement } from 'react';
import { Cart } from '../Cart';
import './styles.css';

export function Header(): ReactElement {
  return (
    <header className="header">
      <strong>Redux</strong>
      <Cart />
    </header>
  );
}
