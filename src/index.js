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
import MediaQuery from './responsive_design/mediaQuery/mediaQuery'
import Rwd1 from './responsive_design/rwd_1/rwd_1'
import Rwd2 from './responsive_design/rwd_2/rwd_2'

const store = createStore(rootReducer)

ReactDOM.render(
  <Rwd2/>,
  document.getElementById('root')
)