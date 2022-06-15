import { CREATE_BLOG } from "./BlogAction";

const BLOG = [
    { id: "b01", title: "title No.1", content: "blog 1" },
    { id: "b02", title: "title No.2", content: "blog 2" },
    { id: "b03", title: "title No.3", content: "blog 3" },
    { id: "b04", title: "title No.4", content: "blog 4" },
  ];


const initialState = {
    blogs: BLOG
}

const blogReducer = (state= initialState, action) => {
    switch(action.type){
        case CREATE_BLOG : return{
            ...state, 
            blogs: state.blogs + 1
        }
        default: return state
    }
}

export default blogReducer