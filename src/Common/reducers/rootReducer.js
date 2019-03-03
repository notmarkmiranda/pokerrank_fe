import { combineReducers } from 'redux'

import publicLeagues from '../../PublicLeagues/reducers/PublicLeaguesReducer'
import LeagueReducer from '../../League/reducers/LeagueReducer'

const rootReducer = combineReducers({
  publicLeagues,
  currentLeague: LeagueReducer
})

export default rootReducer
