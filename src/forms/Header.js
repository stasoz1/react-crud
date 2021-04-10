import { changeTheme } from '../store/actions/themeActions'
import { connect, useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();

    const onChangeThemeBtnClick = () => {   
        dispatch(changeTheme())
    }

    return(
        <div className="pull-right">
            <button className="btn btn-primary"
                    onClick={() => onChangeThemeBtnClick()}>
                Change theme
            </button>
        </div>
    )
}

export default connect(
    null,
    null
)(Header);