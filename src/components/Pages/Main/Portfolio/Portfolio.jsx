import React from 'react';

import useProjectsQuery from 'src/hooks/query/useProjectsQuery';

import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderSimple from 'src/shared/Sliders/SliderSimple/SliderSimple';
import Tile from 'src/shared/Blocks/Tile/Tile';
import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

import { slider_controls as cfg } from 'src/config/sliders';
import styles from './style.module.scss';

export default () => {
  const data = useProjectsQuery();
  const items = data
    .map(edge => {
      const {
        image: {
          fluid: { src: BgSrc }
        },
        title,
        client: {
          logo: {
            fluid: { src: logoSrc }
          }
        }
      } = edge.node;
      return { BgSrc, title, logoSrc };
    })
    .map(itemData => <Tile width={320} key={uniqid()} data={itemData} />);

  const slides = useMedia(breakpoints, [3, 3, 3, 3, 2, 2, 1], 1);
  return (
    <Section
      label="Portfolio"
      heading="Featured projects"
      css={styles.container}
    >
      <SliderSimple
        showControls={slides > 1}
        items={items}
        cfg={cfg}
        slidesToShow={slides}
      />
      <div className={styles.nav}>
        <NavButton text="View more case studies" link="/portfolio" type="a" />
      </div>
    </Section>
  );
};
