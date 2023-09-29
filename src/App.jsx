import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';
import { Navbar } from './components';

const App = () => {
    return (
        <div className="bg-bg-bottom">
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </div>
    );
};

export default App;
