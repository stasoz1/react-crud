import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/actions/userActions'

export default ({ user }) => {

    const dispatch = useDispatch()

    const onRemoveBtnClick = id => {
        dispatch(deleteUser(id))
    }

    return(
        <div className="col-md-3">
            <div className="card">
                <h5 class="card-header">Username</h5>
                <div className="card-body">
                    <h5 className="card-title">{ user.username } </h5>
                </div>
                <button className="btn btn-primary" onClick={() => onRemoveBtnClick(user.id)}>Remove</button>
            </div>
        </div>
    )
}