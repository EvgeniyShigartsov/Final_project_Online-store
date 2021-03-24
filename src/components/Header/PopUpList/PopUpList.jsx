import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, CloseOutlinedStyled,
  Listnavigation, ExceptionLi, TechTag
} from './PopUpListStyled';
import LogoBurger from '../Utils/LogoDesktop';

const PopUpList = ({
  openSlide, isOpen, openCloseMenu, setIsOpen,
  hideList, checkForLinkOpen,
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
      <TechTag>Tech Store</TechTag>
      <LogoBurger />
      <CloseOutlinedStyled onClick={(e) => { openCloseMenu(e) }} />
      <Line />
    </HeaderOfPopUp>
    <Listnavigation onClick={(e) => checkForLinkOpen(e)}>
      <ExceptionLi>
        <Link to="/desctops">
          <h5>Desctops</h5>
        </Link>
        <RightOutlinedStyled />
      </ExceptionLi>
      <li>
        <Link to="/gamingMonitors">
          <h5>Gaming Monitors</h5>
        </Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/laptops">
          <h5>Laptops</h5>
        </Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/tablets"><h5>Tablets</h5></Link>
        <RightOutlinedStyled />
      </li>
      <li>
        <Link to="/catalog"><h5>Catalog</h5></Link>
        <RightOutlinedStyled />
      </li>
    </Listnavigation>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  checkForLinkOpen: PropTypes.func.isRequired,
  openSlide: PropTypes.instanceOf(Object).isRequired,
  hideInput: PropTypes.bool.isRequired
}
export default PopUpList;
