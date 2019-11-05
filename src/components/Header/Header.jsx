import React, { useState } from 'react';
import { Link } from 'gatsby';

import { headerNav } from 'src/config/navigation';

import useMedia from 'src/hooks/useMedia';
import useSiteDataQuery from 'src/hooks/query/useSiteDataQuery';

import breakpoints from 'src/styles/breakpoints';

import Navigation from 'src/components/Navigation/Navigation';
import SideDrawer from 'src/components/SideDrawer/SideDrawer';

import Logo from 'src/shared/Logo/Logo';

import BurgerBtn from 'src/shared/Buttons/Burger/Burger';
import ExtraButton from 'src/shared/Buttons/ExtraButton/ExtraButton';

import styles from './style.module.scss';

export default () => {
  const [isButtonVisible, toggleVisibility] = useState(false);

  const navLinks = headerNav.slice(0, headerNav.length - 1);
  const extra = headerNav[headerNav.length - 1];

  const columns = useMedia(breakpoints, [6, 5, 4, 3, 2, 1], 2);
  const menuConfig = {
    sideMenu: columns <= 3,
    fullExtra: columns <= 2
  };

  const { title } = useSiteDataQuery();

  return (
    <header>
      <div className={styles.container}>
        {menuConfig.sideMenu && (
          <BurgerBtn
            isActive={isButtonVisible}
            action={() => toggleVisibility(!isButtonVisible)}
          />
        )}

        <Link to="/">
          <h1>
            <Logo
              name={title}
              size={!menuConfig.fullExtra ? 3.6 : 3}
              color="inherit"
            />
          </h1>
        </Link>

        {!menuConfig.sideMenu && <Navigation links={navLinks} />}

        <ExtraButton isFull={!menuConfig.fullExtra} extra={extra} />
      </div>
      {menuConfig.sideMenu && (
        <SideDrawer isVisible={isButtonVisible} links={navLinks} />
      )}
    </header>
  );
};
