import React from 'react';

import {
  RightOutlined,
  CloseOutlined
} from '@ant-design/icons';

import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

import PropTypes from 'prop-types';

import vector from '../../images/header/Vector.png';

import {forDesktop} from '../../styles/mediaBreakPoints';

const PopUpList = ({

  openSlide, isOpen, openModal, setIsOpen, hideList
}) => (

  <PopUpContainer hideList={hideList} setIsOpen={setIsOpen} isOpen={isOpen} variants={openSlide} initial={false} animate={isOpen ? 'show' : 'hidden'}>
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
      <li>
        <button type="submit">Our Deals</button>
      </li>
    </ul>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  openSlide: PropTypes.shape({
    show: PropTypes.shape({
      clipPath: PropTypes.string.isRequired,
      transition: PropTypes.shape({
        type: PropTypes.string.isRequired,
        stiffness: PropTypes.number.isRequired,
        restDelta: PropTypes.number.isRequired
      })
    }),
    hidden: PropTypes.shape({
      clipPath: PropTypes.string.isRequired,
      transition: PropTypes.shape({
        delay: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        stiffness: PropTypes.number.isRequired,
        damping: PropTypes.number.isRequired
      })
    })
  }).isRequired,
}
export default PopUpList;

// popup container

const PopUpContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: white;
  z-index: 20;
  
   ul{
    display: flex;
    width: 100%;
    flex-direction: column;
    @media(min-width: ${forDesktop.minWidth}px) {
      min-width: 80%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }

    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 25px 20px 10px 25px;
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
           @media(min-width: ${forDesktop.minWidth}px) {
             margin: 0px;
             padding: 0px 10px;
             font-size: 8px;
           }
          
        }
    
      @media(min-width: ${forDesktop.minWidth}px) {
        padding: 0px 5px 0px 5px;
      }
      
      h5{
        font-size: 20px;
        @media(min-width: ${forDesktop.minWidth}px) {
          font-size: 11px;
        }
      }
    }
  }
   @media(min-width: ${forDesktop.minWidth}px) {
      position: static;
      width: 100%;
      display: flex;
      align-items: center;
      ${(props) => !props.isOpen && css`
        clip-path: circle(2200px at 40px 40px) !important;
      `}
      ${(props) => props.hideList && css`
        display: none;
    `}
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

  @media(min-width: ${forDesktop.minWidth}px) {
        display: none;
  }
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
    filter: invert(78%) sepia(90%) saturate(6818%) hue-rotate(576deg) brightness(112%) contrast(145%);

`;

const CloseOutlinedStyled = styled(CloseOutlined)`
    color: black;
    font-size: 20px;
    padding-right: 25px;
`;