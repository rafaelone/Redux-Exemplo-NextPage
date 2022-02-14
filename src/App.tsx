import { ReactElement } from 'react';
import { Header } from './components/Header';
import { Products } from './components/Products';

function App(): ReactElement {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
