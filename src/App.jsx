import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';
import { Navbar } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <div className="w-full bg-center bg-repeat-y bg-contain bg-gradient-pattern">
                <Navbar />

                {/* example sections */}
                <section className="h-[100vh]"></section>
                <section className="h-[100vh]"></section>
                <section className="h-[100vh]"></section>
                <section className="h-[100vh]"></section>
                <section className="h-[100vh]"></section>
                <section className="h-[100vh]"></section>
                {/*  */}

                <Router />
            </div>
        </BrowserRouter>
    );
};

export default App;
