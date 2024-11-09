import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";


import "react-vertical-timeline-component/style.min.css";

// const element = document.getElementById('about');
// if (element) {
//   // Ensure element is not null before calling getBoundingClientRect
//   const rect = element.getBoundingClientRect();
//   // Continue with your code using rect
// } else {
//   console.error('Element not found');
// }

const About = () => {
  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Welcome to Portraitstone{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Labs
        </span>{" "}
        𓂀
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        A first principle of PortraitstoneLabs is to mix the pure value of 3D printing, video gaming, and NFTs (Non-Fungible Tokens) for individuals and companies to pivot toward decentralization through the manifestation of light so technologies can bring new dimensions of transparency, creativity, and value to businesses and communities.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>The Stack.</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>The Myers–Briggs Type Indicator.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            (MBTI)
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;