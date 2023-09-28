import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage, StepperExample } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/sample',
            element: <ExamplePage />,
        },
        {
            path: '/stepper',
            element: <StepperExample />,
        },
    ]);
};

export default Router;
