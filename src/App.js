import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/SignIn.jsx/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
