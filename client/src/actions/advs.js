import request from 'superagent'

export const ADVS_FETCHED = 'ADVS_FETCHED'

const baseUrl = 'http://localhost:4000'

const advsFetched = advs => ({
    type: ADVS_FETCHED,
    advs
})

export const loadAdvs = () => (dispatch, getState) => {
    // when the state already contains events, we don't fetch them again
    if (getState().avds) return
    // a GET /advertisements request
    request(`${baseUrl}/advertisements`)
        .then(response => {
            // dispatch an ADVS_FETCHED action that contains the advs
            dispatch(advsFetched(response.body.advs))
        })
        .catch(console.error)
}