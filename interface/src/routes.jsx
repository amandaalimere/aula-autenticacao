import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import ProtectedRoute from './components/ProtectedRoutes';
import Pessoa from './pages/Pessoa/Pessoa'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/pessoas' element={<ProtectedRoute element={Pessoa} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;