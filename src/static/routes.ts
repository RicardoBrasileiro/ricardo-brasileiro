import { IRoute } from '../interfaces/IRoute';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Works from '../pages/Works';

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'Skills',
    path: '/skills',
    element: Skills,
  },
  {
    name: 'Projects',
    path: '/projects',
    element: Projects,
  },
  {
    name: 'Works',
    path: '/works',
    element: Works,
  },
  {
    name: 'Contact',
    path: '/contact',
    element: Contact,
  },
];

export default routes;
