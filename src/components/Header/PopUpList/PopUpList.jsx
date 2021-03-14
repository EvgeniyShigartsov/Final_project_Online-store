import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vector from '../../../images/header/Vector.png';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, Logo, CloseOutlinedStyled,
  StyledExceptionLi, Listnavigation
} from './PopUpListStyled';
import StyledButton from '../../common/Buttons/StyledButton';

const PopUpList = ({
  openSlide, isOpen, openCloseMenu, setIsOpen, hideList, checkForLinkOpen
}) => (

  <PopUpContainer hideList={hideList} setIsOpen={setIsOpen} isOpen={isOpen} variants={openSlide} initial={false} animate={isOpen ? 'show' : 'hidden'}>
    <HeaderOfPopUp>
      <Logo
        src={vector}
        alt="icon"
      />
      <CloseOutlinedStyled onClick={(e) => { openCloseMenu(e) }} />
      <Line />
    </HeaderOfPopUp>
    <Listnavigation onClick={(e) => checkForLinkOpen(e)}>
      <li>
        <Link to="/">
          <h5>Homepage</h5>
        </Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/signup"><h5>Sign Up</h5></Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/signin"><h5>Sign In</h5></Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/aboutus"><h5>About Us</h5></Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/products/739628"><h5>Products</h5></Link>
        <RightOutlinedStyled />
      </li>
      <StyledExceptionLi>
        <StyledButton color="borderBlue" size="xs" shape="round">Our Deals</StyledButton>
      </StyledExceptionLi>
    </Listnavigation>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  checkForLinkOpen: PropTypes.func.isRequired,
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