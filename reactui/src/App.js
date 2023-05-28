import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import AssetDetails from './Pages/AssetDetails';

const App = () => {
    return (
        <BrowserRouter>
            {/*<Navigation />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/asset" element={<AssetDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;