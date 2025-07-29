import { useLocation,matchRoutes } from 'react-router-dom';
import {routes} from '@/router';

export default function useCurrentRoute() {
      const location = useLocation();
      const matched = matchRoutes(routes, location);
      const currentRoute = matched?.[matched.length - 1]?.route;
      const title = currentRoute?.title || 'Untitled';
      const permissionKey = currentRoute?.permissionKey || '';
      const isIndex = currentRoute?.index || false;

      return {
          title,
          permissionKey,
          isIndex
      };
}