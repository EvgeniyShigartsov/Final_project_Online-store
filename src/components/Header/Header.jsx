import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { useCycle } from 'framer-motion';
import {
  DownOutlined
} from '@ant-design/icons';
import vector from '../../images/header/Vector.png';
import FaceBook from '../../images/header/FaceBook.png';
import Inst from '../../images/header/Inst.png';
import PopUpList from './PopUpList';
import PopUpShedulteContainer from './PopUpShedulteContainer';
import UserPopUp from './UserPopUp';

// styled
import {
  HeaderContainer, ContainerAlign, ContactUsCall, CallBackAsk,
  SearchAndItemsBlock, FormContainer, SearchInputBlock, Input,
  RelativePosUserPopUp, CircleDesktop, ShaduleContainer,
  ShaduleArrowContainer, LogoDesktop, ShoppingCartOutlinedStyled,
  UserOutlinedStyled, SearchOutlinedStyledMedia,
  CircleMobile, Logo, MenuOutlinedStyled, SearchOutlinedStyled
} from '../../styles/styled-components/Header/HeaderStyled';

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
        delay: 0.35,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };
  const openModal = () => {
    setIsOpen((prev) => (!prev))
  }

  const isOpenUserWindow = () => {
    setIsOpenUser((prev) => (!prev));
  }

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
        
          <ShaduleArrowContainer id="shadule">
            <p>
              Mon - Thu:
              <span> 9.30 AM - 5.30 PM</span>
            </p>
            <div id="arrowDownShedule"><DownOutlined style={{color: 'white', cursor: 'pointer'}} /></div>
          
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
            setisOpenSheduleMenu={setisOpenSheduleMenu}
            isOpenSheduleMenu={isOpenSheduleMenu}
          />
        </ContainerAlign>
      </ShaduleContainer>

      <SearchAndItemsBlock>
        <MenuOutlinedStyled onClick={openModal} />
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
