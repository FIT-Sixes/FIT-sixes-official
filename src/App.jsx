import { BrowserRouter } from 'react-router-dom';

// local imports
import Router from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <div className="w-full bg-gradient-pattern bg-repeat-y bg-contain bg-center">
                <h1 className="w-full px-6 py-3 mb-2 font-mono font-extrabold text-center bg-yellow-400">
                    FIT Sixes 2K23 | Developed by Batch 20
                </h1>

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
