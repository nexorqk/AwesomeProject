import React from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import {Navigator} from './navigation';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
