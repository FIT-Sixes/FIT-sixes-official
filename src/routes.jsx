import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/sample',
            element: <ExamplePage />,
        },
    ]);
};

export default Router;
