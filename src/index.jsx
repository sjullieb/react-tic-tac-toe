import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppComponent} from './components/App';
import { HashRouter } from 'react-router-dom';
// const store = createStore(rootReducer);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

const render = (Component) => {
  ReactDOM.render(
    <AppComponent>
      <HashRouter>
        
          <Component/>
        
      </HashRouter>
    </AppComponent>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
