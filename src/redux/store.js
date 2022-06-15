import { createStore } from 'redux'
import blogReducer from './blog/BlogReducer'


const initialState = {
    title: 'title',
    content: "lorem ipsum" 
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                data: [...state.title, ...state.content]
            }
            default: {
                return state;
            }
    }
}

export default createStore(rootReducer)

