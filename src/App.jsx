import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';
import Navbar from './components/NavBar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Router />
        </BrowserRouter>
    );
};

export default App;
