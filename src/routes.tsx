import Cities from './containers/city';
import Search from './containers/search';

const routes = [
  // { path: '/dashboard',
  //   component: Dashboard
  // },
  { path: '/search',
    component: Search,
    text: 'Search'
  },
  // { path: '/analysis-evaluation',
  //   component: AnalysisEvaluation
  // },
  { path: '/cities',
    component: Cities,
    text: 'Cities'
  }
]

export default routes;
