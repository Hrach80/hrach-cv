
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import profileImg from '../../assets/hrach.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaViber, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import './Hero.scss';


const socialIcons = [
    { name: 'Facebook', url: 'https://www.facebook.com/uxevorapoxadrumner.hayastanivoxjtaracqum/', icon: FaFacebookF },
    { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: FaInstagram },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hrachya-vagarshakyan-39424337b/', icon: FaLinkedinIn },
];

const contactInfo = [
    { name: 'Phone', value: '+374 94 38 52 21', icon: FaPhoneAlt, link: 'tel:+37494 38 52 21' },
    { name: 'Email', value: 'hrachyavagarshakyan@gmail.com', icon: FaEnvelope, link: 'mailto:hrachyavagarshakyan@gmail.com' },
    { name: 'Viber', value: '+374 94 38 52 21', icon: FaViber, link: 'viber://chat?number=+374 94 38 52 21' },
    { name: 'WhatsApp', value: '+374 94 38 52 21', icon: FaWhatsapp, link: 'https://wa.me/+374 94 38 52 21' },
    { name: 'Telegram', value: '@Hrachvagharshakyan', icon: FaTelegramPlane, link: 'https://t.me/Hrachvagharshakyan' },
];

const Hero = () => {
    const { t } = useTranslation();
    const [showContacts, setShowContacts] = useState(false);

    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <section id="home" className="hero">
            <div className="hero__content">
                <h3 className="hero__greeting">{t('hero_greeting')}</h3>
                <h1 className="hero__name">{t('hero_name')}</h1>
                <h2 className="hero__title">{t('hero_title')}</h2>
                <p className="hero__description">{t('hero_description')}</p>
                <div className="hero__action-row">
                    <button className="hero__button" onClick={toggleContacts}>
                        {t('hero_button')}
                    </button>

                    <div className={`contact-list ${showContacts ? 'is-visible' : ''}`}>
                        {contactInfo.map((contact) => (
                            <a
                                key={contact.name}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <contact.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hero__socials">

                    <div className="hero__icons">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.name}
                                href={icon.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={icon.name}
                                className="icon-wrapper"
                            >
                                <icon.icon size={28} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero__image-container">
                <div className="hero__image-clip">
                    <img src={profileImg} alt={t('hero_name')} />
                </div>
                <div className="hero__border-animation"></div>
            </div>
        </section>
    );
};

export default Hero;