import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage } from './pages';
import { TeamRegistration } from './components';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <TeamRegistration />,
        },
        {
            path: '/sample',
            element: <ExamplePage />,
        },
    ]);
};

export default Router;
