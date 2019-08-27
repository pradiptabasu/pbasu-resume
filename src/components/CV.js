// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Section from './common/Section';
import Sidebar from './sidebar/index';
import Category from './common/Category';

type Props = {
  sidebar ?: Object,
  profile ?: Object,
  projects ?: Object,
};

const renderExperience = function renderExperience(props : Object) {
  if (props.experience) {
    return (<Category {...props.experience} />);
  }
  return null;
};

const renderProjects = function renderProjects(props : Object) {
  if (props.projects) {
    return (<Category {...props.projects} />);
  }
  return null;
};

const renderProfile = function renderProfile(props : Object) {
  if (props.profile) {
    const { title, description, icon, highlights } = props.profile;
    return (
      <Section className="summary-section" title={title || 'Profile'} icon={icon || 'user'}>
        <p>{description}</p>
        <ul className="ul">
        {
            highlights.map(function(highlightsValue)  {
              return <li>{highlightsValue}</li>;
            })
          }
        </ul>
      </Section>
    );
  }
  return null;
};

const CV = (props : Props) => (
  <div className="wrapper a4page" id="overallPage">
    <Sidebar {...props.sidebar} />
    <div className="main-wrapper">
      {renderProfile(props)}
      {renderExperience(props)}
      <div className="pageSpacing" />
      {renderProjects(props)}
    </div>
  </div>
);

export default CV;

CV.propTypes = {
  sidebar: PropTypes.shape.isRequired,
  profile: PropTypes.shape.isRequired,
  experience: PropTypes.shape.isRequired,
  projects: PropTypes.shape.isRequired,
};
