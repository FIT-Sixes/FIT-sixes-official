import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage, PaymentFormExample } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/sample',
            element: <ExamplePage />,
        },
        {
            path: '/payment',
            element: <PaymentFormExample />,
        },
    ]);
};

export default Router;
