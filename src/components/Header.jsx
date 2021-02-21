import React from 'react';
import styled from 'styled-components'

// ant design
import {
  MenuOutlined, UserOutlined, ShoppingCartOutlined, SearchOutlined, DownOutlined

} from '@ant-design/icons';
import 'antd/dist/antd.css';

// framer-motion
import { useCycle } from 'framer-motion';

// img
import vector from '../Vector.png';

// mediabreakPoint
// eslint-disable-next-line no-unused-vars
import {forTablet, forDesktop} from '../styles/mediaBrakepoints';

// components
import PopUpList from './PopUpList';
import PopUpShedulteContainer from './PopUpShedulteContainer';
import UserPopUp from './UserPopUp';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  // sideBarMenuList
  const [isOpen, setIsOpen] = useCycle(false, true);

  // SheduleMenu
  // eslint-disable-next-line no-unused-vars
  const [isOpenSheduleMenu, setisOpenSheduleMenu] = useCycle(false, true);

  // UserNavMenu
  const [isOpenUser, setIsOpenUser] = useCycle(false, true);
  
  const openSlide = {
    show: () => ({
      clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    hidden: {
      clipPath: 'circle(0.1px at 0.1px 0.1px)',
      transition: {
        delay: 0.35,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };
  // functions
  const openModal = (e) => {
    e.preventDefault();
    setIsOpen((prev) => (!prev))
  }
  // isOpenSheduleModal
  const popUpShaduleWindow = (e) => {
    e.preventDefault();
    setisOpenSheduleMenu((prev) => (!prev));
  }

  // isOpenUserNav
  const isOpenUserWindow = (e) => {
    e.preventDefault();
    setIsOpenUser((prev) => (!prev));
  }

  return (
    <HeaderContainer>

      <ShaduleContainer>
          
        <Circle>
          <Logo
            src={vector}
            alt="icon"
          />
        </Circle>
        
        <ShaduleArrowContainer onClick={(e) => { popUpShaduleWindow(e) }}>
          <p>
            Mon - Thu:
            <span> 9.30 AM - 5.30 PM</span>
          </p>
          <DownOutlined style={{color: 'white'}} />
          
        </ShaduleArrowContainer>
        <ContactUsCall>
          <h3>Contact Us</h3>
        </ContactUsCall>
        <PopUpShedulteContainer
          isOpenSheduleMenu={isOpenSheduleMenu}
          popUpShaduleWindow={popUpShaduleWindow}
        />

      </ShaduleContainer>

      <SearchAndItemsBlock>
        <MenuOutlinedStyled onClick={(e) => { openModal(e) }} />
        <PopUpList
          openSlide={openSlide}
          isOpen={isOpen}
          openModal={openModal}
          isOpenUserWindow={isOpenUserWindow}
        />
        <FormContainer action="submit">
          <SearchInputBlock>
            <SearchOutlinedStyled />
            <Input type="text" placeholder="Serch for goods" />
          </SearchInputBlock>
        </FormContainer>
        <ShoppingCartOutlinedStyled />
        <RelativePosUserPopUp onClick={(e) => isOpenUserWindow(e)}>
          <UserOutlinedStyled />
          <UserPopUp
            isOpenUser={isOpenUser}
            setIsOpenUser={setIsOpenUser}
          />
        </RelativePosUserPopUp>
      </SearchAndItemsBlock>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
`;
const ShaduleArrowContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 6;
    padding-left: 20px;
  }
`;

//
const ShaduleContainer = styled.div`
  position: relative;
  height: 40px;
  background-color: black;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
    font-size: 11px;
    color: #8C8C8C;
    font-weight: bold;

    span{
      color: white;
    }
  }
  h3{
    display: inline-block;
    font-size: 11px;
    color: white;
    font-weight: bold;
    padding: 4px 0px;
    border-bottom: 1px solid white;
  }
`;
const Circle = styled.div`
  position: relative;
  margin-top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0156FF;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 1;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
const ContactUsCall = styled.div`
  padding-left: 10px;
  @media(min-width: ${forTablet.minWidth}px) {
    flex:6;
    display: flex;
    justify-content: flex-end;
  }
`;
const SearchAndItemsBlock = styled.div`
  width: 100%;
  height: 64px;
  background-color: #0156FF;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FormContainer = styled.form`
  flex: 8;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 12;
  }
`;
const SearchInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding-left: 10px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  border-radius: 20px;
  flex: 30;
`;
const RelativePosUserPopUp = styled.div`
  position: relative;
`;
// ICONS
const ShoppingCartOutlinedStyled = styled(ShoppingCartOutlined)`
  filter: brightness(0) invert(1);
  font-size: 25px;
  flex: 1;
`;
const UserOutlinedStyled = styled(UserOutlined)`
  color: white;
  padding-right: 10px;
  font-size: 20px;
  flex:1;
`;
const Logo = styled.img`
  color: white; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: Translate(-50%, -55%);
  @media(min-width: ${forDesktop.minWidth}px) {
    position: relative;
    display: block;
    color: blue;
    transform: Translate(0%, 0%);

  }
`;

const MenuOutlinedStyled = styled(MenuOutlined)`
  color: white; 
  font-size: 20px;
  flex:1;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
const SearchOutlinedStyled = styled(SearchOutlined)`
  color: '#CCCCCC';
  flex: 1;
`;