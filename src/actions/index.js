export const setRole = (data) => {
    return {
        type: 'setRole',
        payload: data
    }
}

export const selectCurrentTest = (data) => {
    return {
        type: 'selectCurrentTest',
        payload: data
    }
}

export const saveTest = (data) => {
    //API call should be here but since its not available, the data will go straight to the store 
    return {
        type: 'saveTest',
        payload: data
    }
}

export const publishTest = (data) => {
    //API call should be here but since its not available, the data will go straight to the store 
    return {
        type: 'publishTest',
        payload: data
    }
}

export const saveToProd = (data) => {
    //API call should be here but since its not available, the data will go straight to the store 
    return {
        type: 'saveToProd',
        payload: data
    }
}