import { useRoutes } from 'react-router-dom';
import auth from './auth';
import guest from './guest';

export const routes = [
    auth,
    guest
];
export default function Router() {
    return useRoutes(routes)
}
