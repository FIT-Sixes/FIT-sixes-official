import { BrowserRouter } from 'react-router-dom';


// local imports
import Router from './routes';
import Hero from './components/Hero/Hero';

const App = () => {
    return (
        // <BrowserRouter>
        //     <h1 className="w-full px-6 py-3 mb-2 font-mono font-extrabold text-center bg-yellow-400">
        //         FIT Sixes 2K23 | Developed by Batch 20
        //     </h1>
        //     <Router />
        // </BrowserRouter>
        <Hero/>
    );
};

export default App;
