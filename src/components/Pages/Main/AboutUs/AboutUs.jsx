import React from 'react';

import useAwardsQuery from 'src/hooks/query/useAwardsQuery';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderSimple from 'src/shared/Sliders/SliderSimple/SliderSimple';

import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

import pic from 'src/assets/pics/office.jpg';

import { autoplay_slider as cfg } from 'src/config/sliders';

import styles from './style.module.scss';

export default () => {
  const data = useAwardsQuery();
  const columns = useMedia(breakpoints, [8, 7, 6, 5, 4, 2], 2);
  const images = data.map(edge => {
    const {
      logo: { fluid },
      title
    } = edge.node;
    return <img src={fluid.src} alt={title} />;
  });
  return (
    <>
      <Section label="About us" heading="CleverSoft awards and recognitions">
        <div className={styles.container}>
          <p>
            CleverSoft is a software development company headquartered in San
            Diego, USA, with its development center based in Minsk, Belarus.
            Since our company’s foundation in 2000, we have successfully
            completed more than 800 projects for small, medium-sized and large
            enterprises. We are honored to be recognized as a trusted partner in
            the global IT community. EffectiveSoft has been certified with the
            Microsoft Gold Application Development status and holds the ISO 9001
            certificate. This gives our clients the peace of mind that their
            projects will be handled in a professional and effective manner.
          </p>
          <div className={styles.image__wrapper}>
            <img src={pic} alt="office" />
          </div>
        </div>
      </Section>
      <section>
        <SliderSimple
          style={{ width: '100%' }}
          items={images}
          cfg={cfg}
          slidesToShow={columns}
        />
      </section>
    </>
  );
};
