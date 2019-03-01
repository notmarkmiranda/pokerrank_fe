import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPublicLeagues } from '../actions/index'

export class PublicLeagues extends Component {
  componentDidMount() {
    this.props.onGetPublicLeagues()
  }

  render() {
    const { publicLeagues } = this.props
    console.log(this.props);
    return (
      <div>
      {
        publicLeagues.length > 0 &&
          publicLeagues.map(league => (
            <div key={ league.id }>{ league.name }</div>
          ))
      }
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
