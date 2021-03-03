import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import {
  MenuOutlined, UserOutlined, ShoppingCartOutlined, SearchOutlined, DownOutlined

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useCycle } from 'framer-motion';
import vector from '../../images/header/Vector.png';
import FaceBook from '../../images/header/FaceBook.png';
import Inst from '../../images/header/Inst.png';
import {forTablet, forDesktop, forMobile} from '../../styles/mediaBreakPoints';
import PopUpList from './PopUpList';
import PopUpShedulteContainer from './PopUpShedulteContainer';
import UserPopUp from './UserPopUp';

const Header = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [isOpenSheduleMenu, setisOpenSheduleMenu] = useCycle(false, true);
  const [isOpenUser, setIsOpenUser] = useCycle(false, true);
  const [hideInput, setHideInput] = useState(true);
  const [hideList, setHideList] = useState(false);
  
  const openSlide = {
    show: {
      clipPath: 'circle(2200px at 40px 40px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    },
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
  // isopen or close input || lists
  const toggleShow = () => {
    setHideInput((prev) => !prev);
    setHideList((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <ShaduleContainer>
        <ContainerAlign>
          <CircleMobile>
            <Logo
              src={vector}
              alt="icon"
            />
          </CircleMobile>
        
          <ShaduleArrowContainer onClick={(e) => { popUpShaduleWindow(e) }}>
            <p>
              Mon - Thu:
              <span> 9.30 AM - 5.30 PM</span>
            </p>
            <DownOutlined style={{color: 'white'}} />
          
          </ShaduleArrowContainer>
          <ContactUsCall>
            <p>
              Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us
            </p>
            <h3>Contact Us</h3>
          </ContactUsCall>
          <CallBackAsk>
            <h5>
              Call Us: (00) 1234 5678
            </h5>
            <div>
              <img src={FaceBook} alt="FaceBook" />
            </div>
            <div>
              <img src={Inst} alt="Inst" />
            </div>
          </CallBackAsk>
          <PopUpShedulteContainer
            isOpenSheduleMenu={isOpenSheduleMenu}
            popUpShaduleWindow={popUpShaduleWindow}
          />
        </ContainerAlign>
      </ShaduleContainer>

      <SearchAndItemsBlock>
        <MenuOutlinedStyled onClick={(e) => { openModal(e) }} />
        <CircleDesktop>
          <LogoDesktop
            src={vector}
            alt="icon2"
          />
        </CircleDesktop>
        <PopUpList
          hideList={hideList}
          setIsOpen={setIsOpen}
          openSlide={openSlide}
          isOpen={isOpen}
          openModal={openModal}
          isOpenUserWindow={isOpenUserWindow}
        />
        <FormContainer action="submit" hideInput={hideInput}>
          <SearchInputBlock>
            <SearchOutlinedStyled />
            <Input type="text" placeholder="Serch for goods" />
          </SearchInputBlock>
        </FormContainer>

        {/* mediaSearch */}
        <SearchOutlinedStyledMedia onClick={toggleShow} />
        {/* mediaSearch */}

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
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 0.4;
  }
`;

const ShaduleContainer = styled.div`
    width: 100%;
    background-color: black;
`;
const ContainerAlign = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    min-width: 360px;
    max-width: 1200px;
    position: relative;
    height: 40px;
    background-color: black;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const ContactUsCall = styled.div`
  padding-left: 10px;
  @media(max-width: ${forMobile.maxWidth}px) {
    p{
      display: none;
    }
  }
  @media(min-width: ${forTablet.minWidth}px) {
    p{
      display: none;
    }
    flex: 6;
    display: flex;
    justify-content: flex-end;
    
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    p{
      display: block;
      padding-right: 10px;
    }
  }
`;

const CallBackAsk = styled.div`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex !important;
    flex-direction: row;
    h5{
      padding-right: 5px;
      color: white;
      font-size: 10px;
      padding-top: 5px;
    }
    div{
      padding: 0px 5px 0px 5px;
    }
  }
  @media(max-width: ${forMobile.maxWidth}px) {
    display: none;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    display: none;
  }
`;
const SearchAndItemsBlock = styled.div`
  width: 100%;
  padding: 0 10px;
  min-width: 360px;
  height: 64px;
  background-color: #0157fe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(min-width: ${forDesktop.minWidth}px) {
    border-bottom: 1px solid #CCCCCC;
    background-color: white;

    max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        padding: 0 10px;
  }
`;

const FormContainer = styled.form`
  flex: 8;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 12;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 100;
    ${(props) => props.hideInput && css`
        display: none;
    `}
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
  @media(min-width: ${forDesktop.minWidth}px) {
    background: #EBEBEB;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  border-radius: 20px;
  flex: 30;
  @media(min-width: ${forDesktop.minWidth}px) {
    background: #EBEBEB;
  }
`;
const RelativePosUserPopUp = styled.div`
  position: relative;
  z-index: 10;
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 1;
  }
  
`;
// ICONS

const CircleDesktop = styled.div`
  position: relative;
  @media(min-width: ${forTablet.minWidth}px) {
   display: none;
   width: 0px;
   height: 0px;
  }
  @media(max-width: ${forMobile.maxWidth}px) {
   display: none;
   width: 0px;
   height: 0px;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
   display: block;
   position: relative;
   width: 30px;
   height: 30px;
   padding-right: 60px;
   padding-left: 20px;
  }
`;
const LogoDesktop = styled.img`
  display: block; 
  @media(min-width: ${forDesktop.minWidth}px) {
    color: blue;
    width: 30px;
    height: 34px;
    margin-left: auto; 
    margin-right: auto; 
    filter: invert(778%) sepia(360%) saturate(6818%) hue-rotate(-131.5deg) brightness(112%) contrast(145%);
  }
`;
const ShoppingCartOutlinedStyled = styled(ShoppingCartOutlined)`
  filter: brightness(0) invert(1);
  font-size: 25px;
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    filter: invert(0%) sepia(7%) saturate(0%) hue-rotate(39deg) brightness(102%) contrast(106%);
    flex: 3;
    padding: 0px 10px 0px 10px;
  }
`;
const UserOutlinedStyled = styled(UserOutlined)`
  color: white;
  padding-right: 10px;
  font-size: 20px;
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    color: black;
    font-size: 20px;
  }
`;
const CircleMobile = styled.div`
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
const Logo = styled.img`
  color: white; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  width: 30px;
  height: 35px;
  transform: Translate(-50%, -55%);
  @media(min-width: ${forDesktop.minWidth}px) {
    filter: invert(78%) sepia(90%) saturate(6818%) hue-rotate(246deg) brightness(112%) contrast(145%);
  }
  @media(max-width: ${forMobile.maxWidth}px) {
    filter: brightness(0) invert(1);
  }
  @media(min-width: ${forTablet.minWidth}px) {
    filter: brightness(0) invert(1);
  }
`;
const MenuOutlinedStyled = styled(MenuOutlined)`
  color: white; 
  font-size: 20px;
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
const SearchOutlinedStyled = styled(SearchOutlined)`
  color: '#CCCCCC';
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
const SearchOutlinedStyledMedia = styled(SearchOutlinedStyled)`
  @media(max-width: ${forMobile.maxWidth}px) {
    display: none;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: block;
    flex: 0.5;
    padding-left: 120px;
    font-size: 22px;
  }
`;