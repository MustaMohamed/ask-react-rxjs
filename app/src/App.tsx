import { AppNavbar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CompletedTodosView, InProgressTodosView, TodosView } from './views';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route exact path="/">
          <TodosView/>
        </Route>
        <Route path="/inprogress">
          <InProgressTodosView/>
        </Route>
        <Route path="/completed">
          <CompletedTodosView/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
