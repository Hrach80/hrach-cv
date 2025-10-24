

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLink } from 'react-icons/fa';
import projectData from '../../projectsdata/projectData';
import './Projects.scss';


const Projects = () => {
    const { t } = useTranslation();
    const [loadingId, setLoadingId] = useState(null);
    const handleLiveClick = (url, id, type) => {
        const uniqueId = `${id}-${type}`; 
        if (loadingId === uniqueId) return;
        setLoadingId(uniqueId);
        setTimeout(() => {
            window.open(url, '_blank', 'noopener noreferrer');
            setLoadingId(null);
        }, 1500);
    };
    const renderButtonContent = (id, isGithub = false) => {
        const type = isGithub ? 'github' : 'live';
        const uniqueId = `${id}-${type}`;
        if (loadingId === uniqueId) {
            return <div className="circular-loader" />;
        }

        return (
            <>
                {isGithub ? <FaGithub size={20} /> : <FaLink size={20} />}
                {!isGithub && <span>{t('live_demo')}</span>}
            </>
        );
    };

    return (
        <section id="projects" className="projects">
            <h3 className="projects__subtitle">{t('projects_section_subtitle')}</h3>
            <h1 className="projects__title">{t('projects_section_title')}</h1>

            <div className="projects__grid">
                {projectData.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="project-card__content">
                            <h2 className="project-card__title">{t(project.titleKey)}</h2>
                            <div className="project-card__tech">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <p className="project-card__description">{t(project.descriptionKey)}</p>
                        </div>

                        <div className="project-card__links">
                            <button
                                onClick={() => handleLiveClick(project.liveUrl, project.id, 'live')}
                                className="link-button live"
                                title={t('view_live')}
                                disabled={loadingId === `${project.id}-live`}
                            >
                                {renderButtonContent(project.id, false)}
                            </button>
                            <button
                                onClick={() => handleLiveClick(project.githubUrl, project.id, 'github')}
                                className="link-button github"
                                title={t('view_github')}
                                disabled={loadingId === `${project.id}-github`}
                            >
                                {renderButtonContent(project.id, true)}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;