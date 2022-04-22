import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MyRoutes />
    </ BrowserRouter>
  );
}

export default App;
