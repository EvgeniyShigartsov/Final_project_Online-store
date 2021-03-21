/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {useCycle} from 'framer-motion';
import {
  DownOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import FaceBook from '../../images/header/FaceBook.png';
import Inst from '../../images/header/Inst.png';
import PopUpList from './PopUpList/PopUpList';
import PopUpShedulteContainer from './PopUpShadule/PopUpShedulteContainer';
import UserPopUp from './UserPopUp/UserPopUp';
import LogoMobile from './Utils/LogoMobile';
import LogoDesktop from './Utils/LogoDesktop'

// styled
import {
  HeaderContainer, ContainerAlign, ContactUsCall, CallBackAsk,
  SearchAndItemsBlock, FormContainer, SearchInputBlock, Input,
  RelativePosUserPopUp, CircleDesktop, ShaduleContainer,
  ShaduleArrowContainer, ShoppingCartOutlinedStyled,
  UserOutlinedStyled, SearchOutlinedStyledMedia,
  CircleMobile, MenuOutlinedStyled, SearchOutlinedStyled,
  CloseOutlinedFormStyled
} from './HeaderStyled';

const Header = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [isOpenSheduleMenu, setisOpenSheduleMenu] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
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
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };
  const checkForLinkOpen = (e) => {
    if (e.target.localName === 'h5') {
      setIsOpen((prev) => !prev)
    }
  }
  const openCloseMenu = () => {
    setIsOpen((prev) => (!prev))
  }
  const toggleShow = () => {
    setHideInput((prev) => !prev);
    setHideList((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <ShaduleContainer>
        <ContainerAlign>
          <Link to="/" style={{outline: 'none'}}>
            <CircleMobile>
              <LogoMobile />
            </CircleMobile>
          </Link>
          <ShaduleArrowContainer id="shadule">
            <p>
              Mon - Thu:
              <span> 9.30 AM - 5.30 PM</span>
            </p>
            <div data-testid="arrowDownShedule" id="arrowDownShedule">
              <DownOutlined style={{color: 'white', cursor: 'pointer'}} />
            </div>
          </ShaduleArrowContainer>
          <ContactUsCall>
            <p>
              Visit our showroom in 1234 Street Adress City Address, 1234
            </p>
            <h3 style={{cursor: 'pointer'}}>Contact Us</h3>
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
            setisOpenSheduleMenu={setisOpenSheduleMenu}
            isOpenSheduleMenu={isOpenSheduleMenu}
          />
        </ContainerAlign>
      </ShaduleContainer>
      <SearchAndItemsBlock>
        <MenuOutlinedStyled onClick={openCloseMenu} data-testid="burger" />
        <Link to="/" style={{outline: 'none', paddingRight: '20px'}}>
          <CircleDesktop>
            <LogoDesktop />
          </CircleDesktop>
        </Link>
        <PopUpList
          checkForLinkOpen={checkForLinkOpen}
          hideList={hideList}
          setIsOpen={setIsOpen}
          openSlide={openSlide}
          isOpen={isOpen}
          openCloseMenu={openCloseMenu}
          hideInput={hideInput}
        />
        <FormContainer action="submit" hideInput={hideInput}>
          <SearchInputBlock>
            <SearchOutlinedStyled />
            <Input type="text" placeholder="Serch for goods" />
          </SearchInputBlock>
        </FormContainer>

        {hideInput
          ? (<SearchOutlinedStyledMedia onClick={toggleShow} />)
          : (<CloseOutlinedFormStyled onClick={toggleShow} />)}
        
        <Link to="/cart">
          <ShoppingCartOutlinedStyled />
        </Link>
        <RelativePosUserPopUp>
          <UserOutlinedStyled id="userBtn" data-testid="userBtn" />
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
