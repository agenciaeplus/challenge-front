import './styles/global.scss'

import { BrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
