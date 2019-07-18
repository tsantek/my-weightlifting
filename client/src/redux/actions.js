export const getAllPrograms = function() {
    return async function(dispatch) {
        const res = await fetch('http://localhost:3001/api/programs')
        const programsJson = await res.json()
        dispatch(
            receiveAllPrograms(programsJson)
        )
    }
}

export const RECEIVE_ALL_PROGRAMS = 'RECEIVE_ALL_PROGRAMS'
export const receiveAllPrograms = function(programs) {
    return {
        type: RECEIVE_ALL_PROGRAMS,
        programs
    }
}