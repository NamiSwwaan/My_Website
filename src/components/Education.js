import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2020 - May 2024"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science and Engineering (Specialization in AI and ML)</h3>
            <h4 className="vertical-timeline-element-subtitle">New L J Institute of Engineering and Technology GTU, India</h4>
            <p>CGPA: 9.30</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">12th Standard GSEB HSC Board</h3>
            <h4 className="vertical-timeline-element-subtitle">H B Kapadiya High School, Chandkheda, Ahmedabad</h4>
            <p>First class</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">10th Standard GSEB SSC Board</h3>
            <h4 className="vertical-timeline-element-subtitle">St. Ann's School, Sabarmati, Ahmedabad</h4>
            <p>Distinction</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
