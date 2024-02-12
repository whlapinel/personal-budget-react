import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MenuComponent from './menu-component/menu-component';
import FooterComponent from './footer-component/footer-component';
import AboutComponent from './about-component/about-component';
import LoginComponent from './login-component/login-component';
import HomepageComponent from './homepage-component/homepage-component';
import PieChartComponent from './pie-chart-component/pie-chart-component';
import HeroComponent from './hero-component/hero-component';
import DonutChartComponent from './donut-chart-component/donut-chart-component';

export default function App() {
  return (
    <div>
      <Router>
        <MenuComponent />
        <HeroComponent />
        <div className='mainContainer'>
          <Routes>
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/" element={<HomepageComponent />} />
          </Routes>
        </div>
        <div className='charts'>
          <PieChartComponent />
          <DonutChartComponent />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

