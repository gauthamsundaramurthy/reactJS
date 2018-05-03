import React from 'react';
import ReactDOM from 'react-dom';
import ComponentLifeCycle from './componentLifeCycle/ComponentLifeCycle';
import State from './State/State';
import Props from './Props/Props'
import State_Props from './State_Props/State_Props'
import Props_validation from './Props_validation/Props_validation'
import SetState from './SetState/SetState'
import DOM_Node from './DOM_Node/DOM_Node'
import Child_Parent from './Data_childToParent/Child_Parent'
import Ref from './ref/ref'
import Keys from './keys/keys'
import React_router from './react_router/react_router/react_router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './redux/components/app'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//ReactDOM.render(<React_router/>, document.getElementById('root'));