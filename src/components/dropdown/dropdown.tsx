import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import './dropdown.css';

interface dropdown {
  dropdown: any;
}

export const Dropdown: FC<dropdown> = ({ dropdown }) => {
  const mokApiDropdown = [
    {
      id: 1,
      img: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.9795 7.71741C21.9795 3.45569 20.1612 0 14.9997 0C9.98236 0 8.02002 3.45569 8.02002 7.71741C8.02002 11.9785 11.1455 15.4335 14.9997 15.4335C18.854 15.4335 21.9795 11.9785 21.9795 7.71741Z"
            fill="white"
          />
          <path
            d="M29.2504 23.5332C29.3858 22.6758 30.0331 21.7524 29.9987 20.4512C29.9494 18.623 28.7486 16.9088 27.4368 15.5723C25.7719 13.8768 22.8812 14.4346 20.7161 15.6524C19.279 16.4604 17.3722 21.1271 14.9997 21.1085C12.6272 21.1271 10.7213 16.4611 9.28337 15.6524C7.1183 14.4353 4.22841 13.8768 2.56352 15.5716C1.25085 16.9081 0.0501257 18.6223 0.00159556 20.4512C-0.0336279 21.7524 0.523686 22.6898 0.749116 23.5332C3.01046 31.988 27.8626 32.3216 29.2504 23.5332Z"
            fill="white"
          />
        </svg>
      ),
      name: 'Профіль',
      link: '/profile',
    },
    {
      id: 2,
      img: (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <g id="web-app" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="music" fill="#fff">
              <path
                d="M20,4 L20,17 C20,18.6568542 18.6568542,20 17,20 C15.3431458,20 14,18.6568542 14,17 C14,15.3431458 15.3431458,14 17,14 C17.3506354,14 17.6872211,14.0601542 18,14.1707057 L18,6 L10,6 L10,19 C10,20.6568542 8.65685425,22 7,22 C5.34314575,22 4,20.6568542 4,19 C4,17.3431458 5.34314575,16 7,16 C7.35063542,16 7.68722107,16.0601542 8,16.1707057 L8,4 C8,2.8954305 8.8954305,2 10,2 L18,2 C19.1045695,2 20,2.8954305 20,4 Z"
                id="Shape"></path>
            </g>
          </g>
        </svg>
      ),
      name: 'Мої пісні',
      link: '/mymusic',
    },
    {
      id: 3,
      img: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 494.239 494.238">
          <g>
            <path
              d="M199.725,0v36.025H85.211v421.66l114.514,0.094v36.459l209.085-37.555l0.216-418.867L199.725,0z M234.404,230.574
		c7.022,0,12.715,7.408,12.715,16.545c0,9.139-5.692,16.545-12.715,16.545s-12.715-7.406-12.715-16.545
		C221.688,237.982,227.382,230.574,234.404,230.574z M119.211,423.713V70.025h80.514v353.753L119.211,423.713z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
      name: 'Вихід',
      link: ' ',
    },
  ];

  return (
    <nav className={dropdown ? 'dropdown block' : 'dropdown'}>
      <ul>
        {mokApiDropdown.map((dropdownitems) => (
          <li key={dropdownitems.id}>
            <NavLink className="dropdown__link" to={dropdownitems.link}>
              {dropdownitems.img}
              <p>{dropdownitems.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
