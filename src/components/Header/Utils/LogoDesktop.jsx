/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const LogoBurger = ({backToDefaulOpen}) => (
  <NavLink to="/" style={{outline: 'none'}} onClick={backToDefaulOpen}>
    <StyledLogo width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0331 0.945312L0.296875 10.8636V23.0707L17.0331 32.989L30.4588 25.3596V28.9836L17.0331 36.9945L0.296875 26.8855V31.2724L17.0331 41L33.7693 31.2724V19.0653L20.3435 26.8855V23.0707L33.7693 15.0598V10.8636L17.0331 0.945312Z" fill="#0156FF" />
    </StyledLogo>
  </NavLink>

)
const StyledLogo = styled.svg`
   padding-left: 20px;
   width: 47.7px;
   height: 34px;
   margin-right: 10px;
`;
export default LogoBurger;