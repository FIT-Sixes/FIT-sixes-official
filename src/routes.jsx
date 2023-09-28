import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage,HomePage } from './pages';

const Router = () => {
    return useRoutes([
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
