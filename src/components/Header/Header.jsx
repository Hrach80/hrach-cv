
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 22H22L12 2Z" fill="var(--color-primary)" />
                        <path d="M12 6L4 22H20L12 6Z" fill="#121212" />
                    </svg>
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