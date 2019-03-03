import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

import '../../Common/stylesheets/index.css'
import { getLeague } from '../actions/index'

export class League extends Component {
  componentDidMount() {
    this.props.onGetLeague(this.props.match.params.id)
  }

  render() {
    const { currentLeague } = this.props
    console.log(currentLeague);
    return (
      <div>
        {
          Object.entries(currentLeague).length !== 0 &&
            <Card className="mt-4">
              <Card.Header className="league-name league-show-header">
                <div>
                  <div className="caption-text text-warning">
                    { currentLeague.location }
                  </div>
                  { currentLeague.name }
                  <div className="caption-text text-primary">
                    { currentLeague.privated_text }
                  </div>
                </div>
              </Card.Header>
            </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentLeague: state.currentLeague
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetLeague: (leagueId) => { dispatch(getLeague(leagueId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(League)
