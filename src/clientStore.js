import { browserHistory } from 'react-router';
import {configureStore} from './store'

let state = window.__initialState__ || undefined;
export default configureStore(browserHistory, state);