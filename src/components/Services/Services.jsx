
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DiHtml5, DiReact, DiJsBadge } from 'react-icons/di';
import './Services.scss';
const techServices = [
    {
        nameKey: 'service_title_1',
        icon: DiHtml5,
        descriptionKey: 'service_desc_1',
        animationClass: 'icon-wrapper'
    },
    {
        nameKey: 'service_title_2',
        icon: DiReact,
        descriptionKey: 'service_desc_2',
        animationClass: 'icon-wrapper'
    },
    {
        nameKey: 'service_title_3',
        icon: DiJsBadge,
        descriptionKey: 'service_desc_3',
        animationClass: 'icon-wrapper'
    },
];

const Services = () => {
    const { t } = useTranslation();
    const [openCardIndex, setOpenCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenCardIndex(index === openCardIndex ? null : index);
    };
    const closeCard = () => {
        setOpenCardIndex(null);
    };

    return (
        <section className="services">
            <h2>{t('services_title')}</h2>
            <div
                className={`services-backdrop ${openCardIndex !== null ? 'is-visible' : ''}`}
                onClick={closeCard} 
            ></div>

            <div className="services__list">
                {techServices.map((service, index) => {
                    const isOpen = index === openCardIndex;

                    return (
                        <div
                            key={service.nameKey}
                            className={`service-card ${isOpen ? 'is-open' : ''}`}
                            onClick={() => handleCardClick(index)} 
                        >
                            <div className={service.animationClass}>
                                <service.icon size={48} />
                            </div>
                            <h3>{t(service.nameKey)}</h3>
                            <p>{t(service.descriptionKey)}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;