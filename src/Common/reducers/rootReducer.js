import { combineReducers } from 'redux'

import publicLeagues from '../../PublicLeagues/reducers/PublicLeaguesReducer'

const rootReducer = combineReducers({
  publicLeagues
})

export default rootReducer
