import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher" style={{ display: 'flex', gap: '10px' }}>
            <button
                onClick={() => changeLanguage('am')}
                style={{ color: i18n.language === 'am' ? 'var(--color-primary)' : 'var(--color-text-dim)' }}
            >
                ARM
            </button>
            <button
                onClick={() => changeLanguage('en')}
                style={{ color: i18n.language === 'en' ? 'var(--color-primary)' : 'var(--color-text-dim)' }}
            >
                ENG
            </button>
            <button
                onClick={() => changeLanguage('ru')}
                style={{ color: i18n.language === 'ru' ? 'var(--color-primary)' : 'var(--color-text-dim)' }}
            >
                RUS
            </button>
        </div>
    );
};

export default LanguageSwitcher;