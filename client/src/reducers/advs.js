import { ADVS_FETCHED, ADV_CREATE_OK } from '../actions/advs'

export default function (state = null, action) {
    switch (action.type) {
        case ADVS_FETCHED:
            return action.advs

        case ADV_CREATE_OK:
        return [action.adv, ...state]

        default:
            return state
    }
}