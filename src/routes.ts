import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Works from './pages/Works';

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
  props?: any;
}

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Projects',
    path: '/projects',
    exact: true,
    component: Projects,
  },
  {
    name: 'Skills',
    path: '/skills',
    exact: true,
    component: Skills,
  },
  {
    name: 'Works',
    path: '/works',
    exact: true,
    component: Works,
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];

export default routes;
