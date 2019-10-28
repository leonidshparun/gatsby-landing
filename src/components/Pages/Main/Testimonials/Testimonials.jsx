import React from 'react';

import Section from 'src/shared/Section/Section';

import SliderContent from 'src/shared/SliderContent/SliderContent';

// import styles from './style.module.scss';

const feedbackData = [
  {
    company: {
      name: 'Axure.com'
    },
    person: {
      name: 'Martin Smith',
      details: 'CTO Axure Software Solutions, Inc., USA axure.com'
    },
    feedback:
      'We were initially skeptical of doing any development with an outside firm, but EffectiveSoft has been a great partner. The team at EffectiveSoft is very skilled and has been a pleasure to work with. Not only have they enabled us to expand our team but they have added capability as well. They have enabled us to adopt new technologies as they add their diverse skillset to our team. I would not hesitate to recommend EffectiveSoft to anyone looking for a great software development company.'
  },
  {
    company: {
      name: 'CityIndex'
    },
    person: {
      name: 'Arthur Grimley',
      details: 'CIO CityIndex Group, UK'
    },
    feedback:
      'Since our first engagement a year ago, I have been impressed not only by the quality of work that EffectiveSoft have done for City Index but also their attention to detail and reliability on delivery dates.'
  },
  {
    company: {
      name: 'BullionRock'
    },
    person: {
      name: 'Robin Newbould',
      details: 'Managing Director BullionRock, UK bullionrock.com'
    },
    feedback:
      'EffectiveSoft helped BullionRock to bridge a huge gap in our systems. Having committed to, at one end, off-the-shelf back-office accounting software and, at the other, a client-facing secure web portal, we needed an order management system middle office application to tie the two together. After months of patient and understanding dialogue, whilst we (non-technical financial types) grappled with exactly what we wanted, EffectiveSoft were quick to deliver the project - which exceeded our expectations and was completed well within budget. We are as grateful to the team, who continue to support and develop the system to our changing requirements, now as we were in 2012.'
  },
  {
    company: {
      name: 'Soutron'
    },
    person: {
      name: 'Graham Partridge',
      details: 'R&D Director Soutron Ltd., UK soutron.com'
    },
    feedback:
      'We outsourced our development to EffectiveSoft 3 years ago and very quickly forged an excellent working relationship, initially with our client manager Maryia Marozava, our project manager Aleh Yanovich and subsequently the rest of the team. Effectivesoft have proved themselves to be dedicated to the project and have a "Can Do"  attitude and will do what it takes to get a job done and it is a pleasure working with the team. The team very quickly understood what we were trying to achieve and have contributed to ideas which has helped move our development forward at a faster pace. Our relationship is now a long term one. After three years we fully expect to work with ES for many years to come, helping us bring world class software to market.'
  },
  {
    company: {
      name: 'Shaping Tomorrow'
    },
    person: {
      name: 'Matthew Richardson',
      details: 'Founder Shaping Tomorrow, UK shapingtomorrow.com'
    },
    feedback:
      'We were searching the world for a text summariser, and were delighted to discover the Intellexer API from EffectiveSoft. After discussing our requirements with their team, it was evident that their solutions would not just meet our requirements but would also do more things than we had originally envisaged. It is also of great and ongoing benefit that they continue to develop their products so that we can offer new things to our customers. I thoroughly recommend EffectiveSoft to others. They are a really responsive team to work with.'
  },
  {
    company: {
      name: 'Cognite'
    },
    person: {
      name: 'Paul Mervin',
      details: 'Managing Director Cognite Ltd., UK cognite.co.uk'
    },
    feedback:
      'Our long-term cooperation with EffectiveSoft dates back to 2008. Since then we`ve been working on a number of complex lasting projects, and practically all the time EffectiveSoft was able to satisfy our immediate needs in resources and to meet our high demands for project results. We haven`t finished our current projects yet, but I am already looking forward to broaden our common horizons.'
  }
];

export default () => {
  return (
    <Section label="Testimonials" heading="Our customers say">
      <div>
        <SliderContent items={feedbackData} itemWidth={100} itemHeight={100} />
      </div>
    </Section>
  );
};
