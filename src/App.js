import UserForm from './forms/UserForm'
import Users from './forms/Users'
import Header from './forms/Header'
import { connect, useSelector } from 'react-redux';

function App() {
  const isDark = useSelector(state => state.themeReducer.isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header/>
        <UserForm/>
      <Users/>
    </div>
  );
}

export default App;
