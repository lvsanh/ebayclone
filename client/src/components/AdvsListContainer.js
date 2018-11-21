import React from 'react' //change jsx to normal
import { loadAdvs } from '../actions/advs'
import { connect } from 'react-redux' // link with redux store
import AdvsList from './AdvsList'

class AdvsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadAdvs()
    }

    render() {
        return (
            <div>
                <AdvsList advs={this.props.advs} />
            </div>

        )
    }
}

const mapStateToProps = state => ({ 
    advs: state.advs
})

export default connect(mapStateToProps, { loadAdvs })(AdvsListContainer)