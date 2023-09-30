import { useRoutes } from 'react-router-dom';

// local imports 
import { ExamplePage, LandingPage, HomePage } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/sample',
            element: <ExamplePage />,
        },
        {
            path: '/home',
            element: <HomePage />,
        },
    ]);
};

export default Router;
