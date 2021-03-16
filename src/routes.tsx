import { Switch, Route } from 'react-router-dom';

import { Search } from './pages/Search';
import { Show } from './pages/Show';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route exact path="/show">
        <Show />
      </Route>
    </Switch>
  );
}