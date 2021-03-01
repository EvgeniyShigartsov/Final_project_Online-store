import React from 'react';

// Ant design
import {
  RightOutlined,
  CloseOutlined
} from '@ant-design/icons';

// styled-compoents
import styled, { css } from 'styled-components';

// framer-motion
import { motion } from 'framer-motion';

// img
import vector from '../Vector.png';

// media-brak-points
import {forTablet, forDesktop} from '../styles/mediaBrakepoints';

const PopUpList = ({

  // eslint-disable-next-line react/prop-types
  openSlide, isOpen, openModal, setIsOpen
}) => (

  <PopUpContainer setIsOpen={setIsOpen} isOpen={isOpen} variants={openSlide} initial={false} animate={isOpen ? 'show' : 'hidden'}>
    <HeaderOfPopUp>
      <Logo
        src={vector}
        alt="icon"
      />
      <CloseOutlinedStyled onClick={(e) => { openModal(e) }} />
      <Line />
    </HeaderOfPopUp>
    <ul>
      <li>
        <h5>Laptops</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Desktop PCs</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Networking</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Printers & Scanners</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>PC Parts</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>All Other Products</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Repairs</h5>
        <RightOutlinedStyled />
      </li>
    </ul>
    <button type="submit">Our Deals</button>
  </PopUpContainer>
)

export default PopUpList;

// popup container

const PopUpContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: white;
   ul{
    display: flex;
    width: 100%;
    flex-direction: column;
    @media(min-width: ${forDesktop.minWidth}px) {
      flex-direction: row;
  }
    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 25px 20px 10px 25px;
      @media(min-width: ${forDesktop.minWidth}px) {
        padding: 5px 10px 10px 5px;
      }
      h5{
        font-size: 20px;
      }
    }
  }
   @media(min-width: ${forDesktop.minWidth}px) {
      position: static;
      background-color: red;
      ${(props) => !props.isOpen && css`
        clip-path: circle(2200px at 40px 40px) !important;
      `}
  }
  button{
      margin: 20px 0px 0px 25px;
      padding: 10px 45px;
      border: none;
      background-color:transparent;
      border: 3px solid #0156FF;
      border-radius: 30px;
      font-size: 20px;
      color: #0156FF;
      font-weight: bold;
    }
    @media(min-width: ${forTablet.minWidth}px) {
      width: 50%;
    }
    @media(min-width: ${forDesktop.minWidth}px) {
      min-width: 80%;
    }
`;

const HeaderOfPopUp = styled.div`
  position: relative;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  ${(props) => !props.isOpen && css`
        display: none;
      `}
`;

const Line = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  display: inline-block;
  height: 1px;
  width: 90%; 
  background: #A9A9A9;
  transform: translateX(-50%);
`;

// icons styled

const RightOutlinedStyled = styled(RightOutlined)`
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding-right: 5px;
    @media(min-width: ${forDesktop.minWidth}px) {
      display: none;
    }
`;

const Logo = styled.img`
    padding-left: 20px;
    filter: invert(96%) sepia(27%) saturate(843%) hue-rotate(320deg) brightness(114%) contrast(109%);
`;

const CloseOutlinedStyled = styled(CloseOutlined)`
    color: black;
    font-size: 20px;
    padding-right: 25px;
`;