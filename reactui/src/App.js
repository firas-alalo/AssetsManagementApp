import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import AssetDetails from './Pages/AssetDetails';
import Navbar from './Components/Navbar';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/asset" element={<AssetDetails />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;