import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';
import { Navbar, Footer } from './components';


const App = () => {
    return (
        <BrowserRouter>
            <div className="w-full bg-center bg-repeat-y bg-contain bg-gradient-pattern">
                <Navbar />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
