import { LOAD_LEAGUE } from '../../Common/constants/action-types'

const initialState = {}

function LeagueReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_LEAGUE:
      return Object.assign({}, action.payload)
    default:
      return state
  }
}

export default LeagueReducer
