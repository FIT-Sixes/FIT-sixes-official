import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage } from './views';

const Router = () => {
    return useRoutes([
        {
            path: '/sample',
            element: <ExamplePage/>
        },
    ]);
};

export default Router;
