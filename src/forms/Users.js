import React from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'
import User from './User';
import { deleteUsers } from '../store/actions/userActions'

const Users = () => {
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    const renderedListItems = users.map((user) => {
        return <User user={user} key={user.id}/>
    })

    const deleteAllUsers = () => {
        dispatch(deleteUsers())
    }

    return (
        <div class="row margin-top-1">
            <div className="col-md-12">
                { renderedListItems }
            </div>
            <div className="col-md-12 margin-top-1">
                <button className="btn btn-primary pull-right" onClick={() => deleteAllUsers()}>Remove All</button>
            </div>
        </div>
    )
}

export default connect(
    null,
    null
)(Users)