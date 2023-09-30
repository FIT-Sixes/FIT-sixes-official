import { useRoutes } from 'react-router-dom';

// local imports
import { ExamplePage, LandingPage, ContactUsPage, AboutPage } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/sample',
            element: <ExamplePage />,
        },
        {
            path: '/contact-us',
            element: <ContactUsPage />,
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
    ]);
};

export default Router;
