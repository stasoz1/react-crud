import React, { useReducer, useState } from 'react'
import { UPDATE_FORM, RESET_FORM, onInputChange, onFocusOut, validateInput } from '../lib/formUtils'

const initialState = {
    username: { value: "", touched: false, hasError: true, error: ""},
    password: { value: "", touched: false, hasError: true, error: ""},
    email: { value: "", touched: false, hasError: true, error: ""},
    isFormValid: false
};

function formsReducer(state, action) {
    switch(action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
                isFormValid
            }
        case RESET_FORM:
            return action.data
        default:
            return state
    }
}


function UserForm() {
    const [formState, dispatch] = useReducer(formsReducer, initialState);
    const [showError, setShowError] = useState(false);

    function onSubmitHandle(e) {
        e.preventDefault();

        let isFormValid = true;

        for(const name in formState) {
            const item = formState[name];
            const { value } = item;
            const { hasError, error } = validateInput(name, value);

            if (hasError) {
                isFormValid = false
            }

            if (name) {
                dispatch({
                  type: UPDATE_FORM,
                  data: { name, value, hasError, error, touched: true, isFormValid },
                })
            }

            if (!isFormValid) {
                setShowError(true)
            } else {
                //Logic to submit the form to backend
                dispatch({
                    type: RESET_FORM,
                    data: initialState
                })
            }

            setTimeout(() => {
                setShowError(false)
            }, 5000)
        }
    }

    return (
        <div className="container">
            <form className="userForm" onSubmit={onSubmitHandle}>
                <h3>Create new user {formState.username.value}</h3>
                {showError && !formState.isFormValid && (
                    <div className="form-error">Please fill all the fields correctly</div>
                )}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        className="form-control" 
                        name="username"
                        value={formState.username.value}
                        onChange={e => onInputChange("username", e.target.value, dispatch, formState)}
                        onBlur={e => onFocusOut("username", e.target.value, dispatch, formState)}/>
                    <div style={{ color: 'red' }}>{formState.username.error}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className="form-control" 
                        name="password"
                        value={formState.password.value}
                        onChange={e => onInputChange("password", e.target.value, dispatch, formState)}
                        onBlur={e => onFocusOut("password", e.target.value, dispatch, formState)}/>
                    <div style={{ color: 'red' }}>{formState.password.error}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                        className="form-control"
                        name="email"
                        value={formState.email.value}
                        onChange={e => onInputChange("email", e.target.value, dispatch, formState)}
                        onBlur={e => onFocusOut("email", e.target.value, dispatch, formState)}/>
                    <div style={{ color: 'red' }}>{formState.email.error}</div>
                </div> 
                <div>
                    <input type="submit" className="btn btn-primary pull-right" value="Create"/>
                </div>
            </form>
        </div>
    )
}


export default UserForm;