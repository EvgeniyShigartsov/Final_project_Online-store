import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, CloseOutlinedStyled,
  StyledExceptionLi, Listnavigation
} from './PopUpListStyled';
import StyledButton from '../../common/Buttons/StyledButton';
import LogoDesktop from '../Utils/LogoDesktop';

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin
})

const PopUpList = connect(mapStateToProps)(({
  openSlide, isOpen, openCloseMenu, setIsOpen,
  hideList, checkForLinkOpen, isLogin,
  hideInput
}) => (

  <PopUpContainer
    hideInput={hideInput}
    hideList={hideList}
    setIsOpen={setIsOpen}
    isOpen={isOpen}
    variants={openSlide}
    initial={false}
    animate={isOpen ? 'show' : 'hidden'}
  >
    <HeaderOfPopUp>
      <LogoDesktop />
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
      {isLogin && (
      <li>
        <Link to="/dashboard"><h5>Dashboard</h5></Link>
        <RightOutlinedStyled />
      </li>
      )}
      <li>
        <Link to="/catalog"><h5>Catalog</h5></Link>
        <RightOutlinedStyled />
      </li>
      <StyledExceptionLi>
        <StyledButton color="borderBlue" size="xs" shape="round">Our Deals</StyledButton>
      </StyledExceptionLi>
    </Listnavigation>
  </PopUpContainer>
))
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  checkForLinkOpen: PropTypes.func.isRequired,
  openSlide: PropTypes.instanceOf(Object),
  hideInput: PropTypes.bool.isRequired
}
export default PopUpList;
