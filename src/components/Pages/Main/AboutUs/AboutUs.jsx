import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderSimple from 'src/shared/Sliders/SliderSimple/SliderSimple';

import pic from 'src/assets/pics/office.jpg';

import { autoplay_slider as cfg } from 'src/config/sliders';

import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query Content {
        allContentfulAwards {
          edges {
            node {
              title
              logo {
                fluid(maxWidth: 200) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allContentfulAwards: { edges }
      } = data;
      const images = edges.map(edge => {
        const {
          logo: { fluid },
          title
        } = edge.node;
        return <img src={fluid.src} alt={title} />;
      });
      return (
        <>
          <Section
            label="About us"
            heading="CleverSoft awards and recognitions"
          >
            <div className={styles.container}>
              <p>
                CleverSoft is a software development company headquartered in
                San Diego, USA, with its development center based in Minsk,
                Belarus. Since our company’s foundation in 2000, we have
                successfully completed more than 800 projects for small,
                medium-sized and large enterprises. We are honored to be
                recognized as a trusted partner in the global IT community.
                EffectiveSoft has been certified with the Microsoft Gold
                Application Development status and holds the ISO 9001
                certificate. This gives our clients the peace of mind that their
                projects will be handled in a professional and effective manner.
              </p>
              <div className={styles.image__wrapper}>
                <img src={pic} alt="office" />
              </div>
            </div>
          </Section>
          <SliderSimple
            style={{ width: '100%' }}
            items={images}
            cfg={cfg}
            slidesToShow={7}
          />
        </>
      );
    }}
  />
);
