import { RouteComponentProps } from '@reach/router';

import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ReactComponent } from '../utils/types';

export type Route = {
  path: string;
  label?: string;
  component: ReactComponent<RouteComponentProps>;
};

const routes: Array<Route> = [
  {
    path: '/',
    label: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
];

export default routes;
