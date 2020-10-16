import { combineReducers } from 'redux'

import lists from './lists'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    visibilityFilter,
    lists
})