import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../Common/stylesheets/index.css'
import { getPublicLeagues } from '../actions/index'

export class PublicLeagues extends Component {
  componentDidMount() {
    this.props.onGetPublicLeagues()
  }

  renderLeagues = (leagues) => {
    return leagues.map((league) => {
      return (
        <li className="list-group-item public-league" key={ league.id }>
          { league.location }
          <span className="stat-line">
            { league.name }
          </span>
          <div className="caption-text text-info">
            # of Games: { league.games_count } | Average Players per Game: { league.average_players_per_game } | Average Pot: { league.average_pot_size }
          </div>
        </li>
      )
    })
  }

  renderNoLeagues = () => {
    return (
      <li className="list-group-item public-leauge">
        <span className="stat-line">
          There are no leagues
        </span>
      </li>
    )
  }

  render() {
    const { publicLeagues } = this.props
    return (
      <div className="d-flex justify-content-center">
        <div className="col-lg-11">
          <div className="card leagues mb-4 mt-4">
            <div className="card-header header-text">
              Public Leagues
            </div>
            <ul className="list-group list-group-flush leagues-list">
            {
              publicLeagues.length > 0
                ? this.renderLeagues(publicLeagues)
                : this.renderNoLeagues()
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    publicLeagues: state.publicLeagues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPublicLeagues: () => { dispatch(getPublicLeagues()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicLeagues)
