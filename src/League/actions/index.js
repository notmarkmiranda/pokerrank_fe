import axios from 'axios'

import { LOAD_LEAGUE } from '../../Common/constants/action-types'

export const getLeague = (leagueId) => {
  return dispatch => {
    axios.get(`${process.env.REACT_APP_API_SERVER}/api/v1/leagues/${leagueId}`)
      .then(res => { dispatch(loadLeague(res.data)) })
  }
}

const loadLeague = league => ({
  type: LOAD_LEAGUE,
  payload: league
})
