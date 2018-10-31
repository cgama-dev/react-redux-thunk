import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions'

class Info extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        if (this.props.error) {
            return <span>Ocorreu algum error na requisição</span>
        }

        if (this.props.isFetching) {
            return <span>Loading</span>
        } else {
            return <span>{JSON.stringify(this.props.data.origin)}</span>
        }

    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info)