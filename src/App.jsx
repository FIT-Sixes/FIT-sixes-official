import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';

const App = () => {
    return (
        <div className='bg-[#10153f] min-h-screen'>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
};

export default App;
