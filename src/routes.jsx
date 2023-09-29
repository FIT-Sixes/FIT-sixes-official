import { useRoutes } from 'react-router-dom';

// local imports
import Footer from './components/Footer/Footer';

const Router = () => {
    return useRoutes([
        {
            path: '/footer',
            element: <Footer />,
        },
    ]);
};

export default Router;
