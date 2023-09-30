import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage, ContactUsPage } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/sample',
            element: <ExamplePage />,
        },
        {
            path: '/contact-us',
            element: <ContactUsPage />,
        },
    ]);
};

export default Router;
