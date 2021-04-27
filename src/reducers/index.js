import {combineReducers} from 'redux'
import accountReducer from '../reducers/accountReducer'
import notificationsReducer from '../reducers/notificationsReducer'

const rootReducer = combineReducers({
    account : accountReducer, 
    notifications :notificationsReducer
})

export default rootReducer