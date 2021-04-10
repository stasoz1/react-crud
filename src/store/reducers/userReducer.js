import { ADD_USER, DELETE_USER, DELETE_USERS, UPDATE_USERNAME } from "../actions/actionTypes";

const initialState = {
    users: [],
    id: 0,
    username: "",
    password: "",
    email: ""
};

const userReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ADD_USER: {
            return { ...state, users: [...state.users, action.payload]}
        }
        case UPDATE_USERNAME: {
            return { ...state, username: action.payload}
        }
        case DELETE_USER: {
            return { ...state, users: state.users.filter(user => user.id != action.payload)}
        }
        case DELETE_USERS: {
            return { ...state, users: []}
        }
        default:
            return state
    }

}

export default userReducer