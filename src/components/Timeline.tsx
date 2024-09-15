import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="JUL 2023 - Present"
            iconStyle={{ background: '#4d4271', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">3Di System Solutions Pvt Ltd, Mumbai</h4>
            <ul>
              <li>Developed CRON jobs/schedulers for various business implementations.</li>
              <li>Addressed session and memory management issues, enhancing stability, reducing leaks and crashes.</li>
              <li>Integrated payment gateway, implemented notifications, Redis Caching and improved map implementations.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUL 2021 - JUL 2023"
            iconStyle={{ background: '#4d4271', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">CodeArray Technologies Pvt Ltd, Mumbai</h4>
            <ul>
              <li>Worked with software development team members to design and develop robust solutions to meet requirements for functionality, scalability, and performance. </li>
              <li>Updated old code bases to modern development standards, improving functionality using microservices.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;