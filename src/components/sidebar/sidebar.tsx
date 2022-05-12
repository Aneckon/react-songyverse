import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../image/header/logo.svg';

import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <nav className="sidebar__menu">
        <ul className="sidebar__menu-list">
          <li>
            <NavLink className="sidebar__menu-link" to="/">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.4731 11.6511L25.7194 8.45705V3.34885C25.7194 2.77362 25.2711 2.30556 24.7201 2.30556H22.3582C21.8073 2.30556 21.359 2.77362 21.359 3.34885V4.74656L16.3433 0.478677C15.9805 0.170055 15.5023 0 14.9968 0C14.4934 0 14.0174 0.169012 13.6566 0.476022L0.526892 11.651C-0.0696704 12.1585 -0.0338785 12.6006 0.0405215 12.8189C0.11474 13.0368 0.353746 13.4023 1.12009 13.4023H2.91796V28.0981C2.91796 29.1469 3.73299 30 4.7348 30H10.4125C11.4058 30 12.1839 29.1645 12.1839 28.0981V22.0716C12.1839 21.5551 12.6386 21.0848 13.1377 21.0848H16.9531C17.4289 21.0848 17.8161 21.5275 17.8161 22.0716V28.0981C17.8161 29.129 18.6689 30 19.6784 30H25.2652C26.267 30 27.082 29.1468 27.082 28.0981V13.4023H28.8799C29.6463 13.4023 29.8852 13.0368 29.9595 12.8189C30.0339 12.6006 30.0697 12.1585 29.4731 11.6511Z"
                  fill="#B9B9B9"
                />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebar__menu-link" to="/headphone">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 0C10.9505 0.0830039 7.09747 1.85333 4.28595 4.92277C1.47444 7.9922 -0.0660964 12.1102 0.00217618 16.3737V23.6842C0.00217618 24.9334 0.354019 26.1544 1.01321 27.1931C1.6724 28.2317 2.60934 29.0412 3.70554 29.5192C4.80174 29.9973 6.00796 30.1223 7.17168 29.8786C8.33539 29.6349 9.40434 29.0334 10.2433 28.1501C11.0823 27.2669 11.6537 26.1415 11.8852 24.9164C12.1166 23.6912 11.9978 22.4213 11.5438 21.2673C11.0897 20.1132 10.3208 19.1268 9.33424 18.4328C8.34769 17.7388 7.18782 17.3684 6.00131 17.3684C4.94402 17.3731 3.9076 17.6786 3.00174 18.2526V16.3737C2.93331 12.9476 4.15778 9.63277 6.4068 7.15552C8.65583 4.67827 11.746 3.24072 15 3.15789C18.254 3.24072 21.3442 4.67827 23.5932 7.15552C25.8422 9.63277 27.0667 12.9476 26.9983 16.3737V18.2526C26.0924 17.6786 25.056 17.3731 23.9987 17.3684C22.8122 17.3684 21.6523 17.7388 20.6658 18.4328C19.6792 19.1268 18.9103 20.1132 18.4562 21.2673C18.0022 22.4213 17.8834 23.6912 18.1148 24.9164C18.3463 26.1415 18.9177 27.2669 19.7567 28.1501C20.5957 29.0334 21.6646 29.6349 22.8283 29.8786C23.992 30.1223 25.1983 29.9973 26.2945 29.5192C27.3907 29.0412 28.3276 28.2317 28.9868 27.1931C29.646 26.1544 29.9978 24.9334 29.9978 23.6842V16.3737C30.0661 12.1102 28.5256 7.9922 25.714 4.92277C22.9025 1.85333 19.0495 0.0830039 15 0Z"
                  fill="#B9B9B9"
                />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebar__menu-link" to="/favorite">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.5362 0C18.9824 0 16.5917 1.21137 15 3.24101C13.4083 1.21137 11.0176 0 8.46382 0C3.79688 0 0 3.9777 0 8.86705C0 12.6956 2.17906 17.124 6.4767 22.0291C9.78409 25.804 13.3819 28.7266 14.4057 29.5324L14.9998 30L15.5938 29.5325C16.6178 28.7266 20.2157 25.8039 23.523 22.0292C27.8209 17.1241 30 12.6957 30 8.86705C30 3.9777 26.2031 0 21.5362 0Z"
                  fill="#B9B9B9"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
        <ul className="sidebar__footer">
          <li>
            <a className='sidebar__menu-link' href="https://www.instagram.com/">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 2500 2500"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    id="0"
                    cx="332.14"
                    cy="2511.81"
                    r="3263.54"
                    gradientUnits="userSpaceOnUse">
                    <stop offset=".09" stopColor="#fa8f21" />
                    <stop offset=".78" stopColor="#d82d7e" />
                  </radialGradient>
                  <radialGradient
                    id="1"
                    cx="1516.14"
                    cy="2623.81"
                    r="2572.12"
                    gradientUnits="userSpaceOnUse">
                    <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                    <stop offset="1" stopColor="#8c3aaa" />
                  </radialGradient>
                </defs>
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#0)"
                />
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#1)"
                />
              </svg>
            </a>
          </li>
          <li>
            <span>by Bonetik</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
