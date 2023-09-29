import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage, LandingPage } from './pages';

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
    ]);
};

export default Router;
