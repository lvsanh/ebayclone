import { ADVS_FETCHED } from '../actions/advs'

export default function (state = null, action) {
    switch (action.type) {
        case ADVS_FETCHED:
            return action.advs
        default:
            return state
    }
}