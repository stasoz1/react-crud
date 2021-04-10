import API from '../utils/API'

export const addUser = formState => {
    let user = new FormData();

    user.append("username", formState.username.value);
    user.append("email", formState.email.value);
    user.append("password", formState.password.value);

    API.put('/users', user).then(r => console.log(r));
}