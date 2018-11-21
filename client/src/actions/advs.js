import request from 'superagent'

export const ADVS_FETCHED = 'ADVS_FETCHED'
export const ADV_FETCHED = 'ADV_FETCHED'

const baseUrl = 'http://localhost:4000'

const advsFetched = advs => ({
    type: ADVS_FETCHED,
    advs
})

export const loadAdvs = () => (dispatch, getState) => {
    // when the state already contains events, we don't fetch them again
    if (getState().advs) return
    // a GET /advertisements request
    request(`${baseUrl}/advertisements`)
        .then(response => {
            // dispatch an ADVS_FETCHED action that contains the advs
            dispatch(advsFetched(response.body.advs))
        })
        .catch(console.error)
}

const advFetched = adv => ({
    type: ADV_FETCHED,
    adv
})

export const loadAdv = (advId) => dispatch => {
    return request
        .get(`${baseUrl}/advertisements/${advId}`)
        .then(response => {
            dispatch(advFetched(response.body))
        })
        .catch(console.error)
}