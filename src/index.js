import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentLifeCycle/ComponentLifeCycle';
import State from './State/State';
import Props from './Props/Props'
import State_Props from './State_Props/State_Props'
import Props_validation from './Props_validation/Props_validation'
import SetState from './SetState/SetState'
import DOM_Node from './DOM_Node/DOM_Node'
import Child_Parent from './Data_childToParent/Child_Parent'

ReactDOM.render(<Child_Parent/>, document.getElementById('root'));