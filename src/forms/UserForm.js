import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import { addUser, updateUsename } from '../store/actions/userActions'

const UserForm = () => {
    const state = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    const usernameChangeHandler = value => {
        dispatch(updateUsename(value))
    }

    const onSubmitHandle = e => {
        e.preventDefault()

        dispatch(addUser(state.username))
    }

    return(
        <div className="col-md-12">
            <form className="userForm" onSubmit={onSubmitHandle}>
                <h3>Create new user {state.username}</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        className="form-control" 
                        name="username"
                        value={state.username}
                        onChange={e => usernameChangeHandler(e.target.value)}
                        />
                </div>
                <input type="submit" className="btn btn-primary pull-right" value="Create"/>
            </form>
        </div>
    )
}

export default connect(
    null,
    null
)(UserForm);