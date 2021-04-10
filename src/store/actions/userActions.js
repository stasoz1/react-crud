import { ADD_USER, DELETE_USER, DELETE_USERS, UPDATE_USERNAME } from './actionTypes'

let userId = 0

export const addUser = username => ({
    type: ADD_USER,
    payload: {
        id: ++userId,
        username: username
    }
})

export const deleteUser = id => ({
    type: DELETE_USER,
    payload: id
})

export const deleteUsers = () => ({
    type: DELETE_USERS
})

export const updateUsename = username => ({
    type: UPDATE_USERNAME,
    payload: username 
})