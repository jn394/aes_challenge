import { saveTest } from "../actions"

const initialState = {
    role: '',
    currentTest: {},
    savedTests: [],
    QATests: [],
    prodTests: []
}

const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setRole':
            return {
                ...state,
                role: action.payload
            }
        case 'selectCurrentTest':
            return {
                ...state,
                currentTest: action.payload
            }
        case 'saveTest':
            let newSaves;
            if (state.savedTests.length > 0) {
                let gotUpdated = false;
                for (let i = 0; i < state.savedTests.length; i++) {
                    if (state.savedTests[i].id === action.payload.id) {
                        state.savedTests[i] = action.payload;
                        gotUpdated = true;
                        break;
                    }
                }
                if (gotUpdated) {
                    newSaves = [...state.savedTests]
                } else {
                    newSaves = [...state.savedTests, action.payload]
                }
            } else {
                newSaves = [...state.savedTests, action.payload]
            }

            return {
                ...state,
                savedTests: newSaves
            }
        case 'publishTest':
            state.savedTests.splice(state.savedTests.findIndex(test => test.id === action.payload.id), 1);
            return {
                ...state,
                savedTests: [...state.savedTests],
                QATests: [...state.QATests, action.payload]
            }
        case 'saveToProd':
            state.QATests.splice(state.QATests.findIndex(test => test.id === action.payload.id), 1);
            return {
                ...state,
                QATests: [...state.QATests],
                prodTests: [...state.prodTests, action.payload]
            }
        default:
            return state
    }
}
export default initialReducer;