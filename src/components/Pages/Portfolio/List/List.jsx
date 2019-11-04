import React from 'react';
import uniqid from 'uniqid';

import useProjectsQuery from 'src/hooks/query/useProjectsQuery';

import Section from 'src/shared/Wrappers/Section/Section';
import Tile from 'src/shared/Blocks/Tile/Tile';
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
    .map(itemData => <Tile key={uniqid()} data={itemData} />);
  return (
    <Section heading="Portfolio" css={styles.container} noLabel>
      <div className={styles.list}>{items}</div>
    </Section>
  );
};
