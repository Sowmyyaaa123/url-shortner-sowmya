import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import MyUrls from './Pages/MyUrls/MyUrls';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Components/Profile/Profile';

// UPDATED IMPORT
import Input from './Pages/ShortenUrl/Input';

function App() {
  return (
    <Router>
      <HeaderMegaMenu />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/login' element={<LoginPage />} />

        {/* UPDATED ROUTE */}
        <Route path='/url/shortener' element={<Input />} />

        <Route element={<PrivateRoute />}>
          <Route path='/url/list' element={<MyUrls />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;