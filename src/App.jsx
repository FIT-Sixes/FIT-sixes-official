import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
