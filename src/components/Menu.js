import React, {Component} from 'react';
import Link from './Link';

const Menu = props => {
  const menu = props.menusData.map((menu, index) => {
    return (
        <li key={index}>
          <Link menuTitle={menu.title}
                menuUrl={menu.url} />
        </li>
    );
  });

  return <ul>{menu}</ul>;
}

export default Menu;
