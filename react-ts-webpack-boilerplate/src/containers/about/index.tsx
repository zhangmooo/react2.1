import React from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.css';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
const personalDetails = [
  {
    label: 'Name',
    value: 'Zhang',
  },
  {
    label: 'Age',
    value: '27',
  },
  {
    label: 'Address',
    value: 'Sydney',
  },
  {
    label: 'Email',
    value: 'asihashas@4399.com',
  },
  {
    label: 'Contect Me',
    value: '123123123',
  },
];

const jobsummary =
  'xxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxx.xxxxxxx,x.x,.xxxxxxxxxxxxxxxxxx';
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          {' '}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className="personalInformationHeaderText">
              Front End Developer
            </h3>
            <p>{jobsummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)',
            }}
            end={{
              transform: 'translatex(0px)',
            }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(550px)' /*初始位置再-550px */,
            }}
            end={{
              transform: 'translatex(0px)' /*最终值再0 */,
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={50} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <DiAndroid size={50} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={50} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
