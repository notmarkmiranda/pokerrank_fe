import { ADD_LEAGUES } from '../../Common/constants/action-types'

const initialState = []

function publicLeagues(state = initialState, action){
  switch(action.type) {
    case ADD_LEAGUES:
      return [...action.payload]
    default:
      return state
  }
}

export default publicLeagues
