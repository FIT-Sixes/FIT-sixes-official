import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';

const App = () => {
    return (
        <div className="bg-opacity-50 bg-no-repeat bg-cover bg-back-image">
            <div className="min-h-[3000px] bg-gradient-to-b from-bg-top from-5% via-bg-middle to-bg-bottom">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
