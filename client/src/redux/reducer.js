import { RECEIVE_ALL_PROGRAMS, RECEIVE_PROGRAM_WORKOUTS } from "./actions";

const initialState = {
    programs: []
}
 /* 
 
 programs = [
     {
         id: 1,
         name: Basketball,
         workouts: []
     }
 ]
 
 */

function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ALL_PROGRAMS:
            return {
                ...state,
                programs: action.programs.map(program => {
                    return {
                        ...program,
                        workouts: []
                    }
                })
            }
        case RECEIVE_PROGRAM_WORKOUTS:
            return {
                ...state,
                programs: state.programs.map(program => {
                    // TODO
                })
            }
        default:
            return state
    }
}

export default reducer