export const UPDATE_FORM = "UPDATE_FORM"
export const RESET_FORM = "RESET_FORM"

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for(const key in formState) {
        const item = formState[key]
        if(key === name && hasError) {
            isFormValid = false
            break
        } else if (key !== name && item.hasError) {
            isFormValid = false
            break
        }
    }
    
    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: false, isFormValid }
    })
}

export const validateInput = (name, value) => {
    let hasError = false,
        error = ""
    let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    switch (name) {
        case "username":
            if (value.trim() === "") {
            hasError = true
            error = "Name cannot be empty"
            } else if (!/^[a-zA-Z ]+$/.test(value)) {
                hasError = true
                error = "Invalid Name. Avoid Special characters"
            } else {
                hasError = false
                error = ""
            }
            break
        case "password":
            if (value.trim() === "") {
                hasError = true
                error = "Password cannot be empty"
            } else if (value.trim().length < 8) {
                hasError = true
                error = "Password must have at least 8 characters"
            } else {
                hasError = false
                error = ""
            }
            break
        case "email":
            if (value.trim() === "") {
                hasError = true
                error = "Email cannot be empty"
            } else if (!emailRegex.test(value)) {
                hasError = true
                error = "Invalid Email"
            } else {
                hasError = false
                error = ""
            }
            break
        default:
            break
    }

    return { hasError, error }
}

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value)
    let isFormValid = true
    for (const key in formState) {
      const item = formState[key]
      if (key === name && hasError) {
        isFormValid = false
        break
      } else if (key !== name && item.hasError) {
        isFormValid = false
        break
      }
    }

    dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: true, isFormValid },
    })
  }