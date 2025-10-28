
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header__logo">
                <a href="#home">
                    <strong>H.vagarshakyan</strong>
                    Portfolio
                </a>
            </div>
            <nav className="header__nav">
                <a href="#home">{t('nav_home')}</a>
                <a href="#projects">{t('nav_projects')}</a>
                <a href="#resume">{t('nav_resume')}</a>
            </nav>
            <div className="header__actions">
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;