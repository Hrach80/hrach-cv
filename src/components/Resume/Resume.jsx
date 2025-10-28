
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaBriefcase, FaCode, FaTools, FaCheckCircle } from 'react-icons/fa';
import './Resume.scss';


const resumeData = {
    experience: [
        {
            id: 1,
            titleKey: 'exp_1_title',
            companyKey: 'exp_1_company',
            yearsKey: 'exp_1_years',
            descriptionKey: 'exp_1_description',
        },
        {
            id: 2,
            titleKey: 'exp_2_title',
            companyKey: 'exp_2_company',
            yearsKey: 'exp_2_years',
            descriptionKey: 'exp_2_description',
        },
    ],
    education: [
        {
            id: 1,
            degreeKey: 'edu_1_degree',
            institutionKey: 'edu_1_institution',
            yearsKey: 'edu_1_years',
        },
    ],

    skills: [
        'HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React.js', 'Redux / Redux-Toolkit',
         'REST APIs',  'Git/GitHub', 'Responsive Design',
    ],
    toolsAndPlatforms: [
        'VS Code', 'npm / yarn', 'Webpack / Vite', 'Vercel / Netlify', 'Domain Setup', 'Figma/Adobe fotoshop', "WordPress", "Supabase",
    ]
};

const Resume = () => {
    const { t } = useTranslation();

    return (
        <section id="resume" className="resume">
            
            <h1 className="resume__title">{t('resume_section_title')}</h1>

            <div className="resume__container">
                <div className="resume__section">
                    <h2 className="resume__section-title"><FaBriefcase /> {t('section_experience')}</h2>
                    <div className="timeline">
                        {resumeData.experience.map(item => (
                            <div key={item.id} className="timeline-item">
                                <div className="timeline-item__dot"></div>
                                <div className="timeline-item__content">
                                    <h3>{t(item.titleKey)}</h3>
                                    <h4>{t(item.companyKey)} | {t(item.yearsKey)}</h4>
                                    <p>{t(item.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume__section">
                    <h2 className="resume__section-title"><FaGraduationCap /> {t('section_education')}</h2>
                    <div className="timeline">
                        {resumeData.education.map(item => (
                            <div key={item.id} className="timeline-item">
                                <div className="timeline-item__dot"></div>
                                <div className="timeline-item__content">
                                    <h3>{t(item.degreeKey)}</h3>
                                    <h4>{t(item.institutionKey)} | {t(item.yearsKey)}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="resume__section">
                    <h2 className="resume__section-title"><FaCode /> {t('section_skills')}</h2>
                    <div className="skills-grid">
                        {resumeData.skills.map(skill => (
                            <div key={skill} className="skill-item">
                                <FaCheckCircle className="skill-icon" />
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="resume__section">
                    <h2 className="resume__section-title"><FaTools /> {t('section_tools')}</h2>
                    <div className="tools-list">
                        {resumeData.toolsAndPlatforms.map(tool => (
                            <span key={tool} className="tool-tag">{tool}</span>
                        ))}
                    </div>
                </div>
                <div className="resume__download-box">
                    <a href="/Your_Resume_File.pdf" download className="download-button">
                        {t('download_resume')}
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Resume;