import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUA } from './actions'

class UserAgent extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        this.props.loadUA()
    }

    render() {
        if (this.props.error) {
            return <span><br/>>Ocorreu algum error na requisição</span>
        }

        if (this.props.isFetching) {
            return <span><br/>Loading</span>
        } else {
            return <span><br/>{this.props.data['user-agent']}</span>
        }

    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUA: () => dispatch(loadUA())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)