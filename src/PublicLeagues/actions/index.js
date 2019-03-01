import axios from 'axios'

import { ADD_LEAGUES } from '../../Common/constants/action-types'

export const getPublicLeagues = () => {
  return dispatch => {
    axios.get(`${process.env.REACT_APP_API_SERVER}/api/v1/leagues/public`)
    .then(res => {
      dispatch(addLeagues(res.data))
    })
  }
}

const addLeagues = leagues => ({
  type: ADD_LEAGUES,
  payload: leagues
})
