import React from 'react' //change jsx to normal
import { connect } from 'react-redux' // link with redux store
import AdvDetails from './AdvDetails'
import { loadAdv } from '../actions/advs'

class AdvDetailsContainer extends React.Component {
    componentDidMount() {
        console.log((this.props.match.params.id), "check this.props.match.params.id")
        console.log((this.props.adv), "check this.props is null")
        this.props.loadAdv(Number(this.props.match.params.id))
    }

    render() {
        return (<AdvDetails adv={this.props.adv} />)
    }
}

const mapStateToProps = state => ({
    adv: state.adv
})

export default connect(mapStateToProps, { loadAdv })(AdvDetailsContainer)