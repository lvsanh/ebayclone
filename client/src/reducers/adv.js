import { ADV_FETCHED } from '../actions/advs'

export default function (state = null, action) {
    switch (action.type) {
        case ADV_FETCHED:
            return action.adv
            
        default:
            return state
    }
}