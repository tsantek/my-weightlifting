import { RECEIVE_ALL_PROGRAMS } from "./actions";

const initialState = {
    programs: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ALL_PROGRAMS:
            return {
                ...state,
                programs: action.programs
            }
        default:
            return state
    }
}

export default reducer