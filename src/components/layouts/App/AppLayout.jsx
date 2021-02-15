import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '../../../shared/nav-bar';
import css from './AppLayout.module.css';

const AppLayout = ({ children }) => {
    let history = useHistory();

    const handleLogoClick = () => {
        history.replace('/');
    }

    return (
        <div className={css.container}>
            <NavBar onClick={handleLogoClick} />
            <div className={css.childrenContainer}>
                {children}
            </div>
        </div>
    );
}

export default AppLayout;