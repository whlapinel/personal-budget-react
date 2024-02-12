import React from 'react';
import MenuComponent from './menu-component/menu-component';
import FooterComponent from './footer-component/footer-component';
import AboutComponent from './about-component/about-component';
import LoginComponent from './login-component/login-component';
import HomepageComponent from './homepage-component/homepage-component';

import './App.css';
import HeroComponent from './hero-component/hero-component';

export default function App() {
  return (
    <div>
      <MenuComponent />
      <HeroComponent/>
      <HomepageComponent />
      <FooterComponent />
    </div>
  );
}

