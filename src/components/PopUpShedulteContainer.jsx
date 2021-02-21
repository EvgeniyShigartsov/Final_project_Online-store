/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// framer-motion
import { motion } from 'framer-motion';
import styled from 'styled-components';

// ant-designIcons
import {
  FieldTimeOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const openSlide = {
  hidden: {
    y: -250,
    opacity: 0,
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 200,
      damping: 40
    }

  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }
};

const PopUpShedulteContainer = ({isOpenSheduleMenu, popUpShaduleWindow}) => (
  <PopUpBlock
    variants={openSlide}
    initial={false}
    animate={isOpenSheduleMenu ? 'show' : 'hidden'}
    onClick={(e) => popUpShaduleWindow(e)}
  >
    <TimeContainer>
      <PositionTimeIcon>
        <FieldTimeOutlinedStyled />
      </PositionTimeIcon>

      <ListsTime>
        <li>
          <h5>
            {' '}
            <small>We are open:</small>
          </h5>
        </li>
        <li>
          <h5>
            <span>Mon-Thu:</span>
            {' '}
            9:00 AM - 5:30 PM
          </h5>
        </li>
        <li>
          <h5>
            <span>Fr:</span>
            {' '}
            9:00 AM - 6:00 PM
          </h5>
        </li>
        <li>
          <h5>
            <span>Sat:</span>
            {' '}
            11:00 AM - 5:00 PM
          </h5>
        </li>
      </ListsTime>

    </TimeContainer>

    <SmoothLine />

    <AdressContainer>
      <PositionAdressIcon>
        <EnvironmentOutlinedStyled />
      </PositionAdressIcon>
      <ul>
        <li>Address: 1234 Street Adress,</li>
        <li>City Address, 1234</li>
      </ul>
    </AdressContainer>

    <SmoothLine />

    <ContactsContainer>
      <BlackEP>
        <h6>
          Phones:
          {' '}
          <span>(00) 1234 5678</span>
        </h6>
        <h6>
          E-mail:
          {' '}
          <span>shop@email.com</span>
        </h6>
      </BlackEP>
    </ContactsContainer>

  </PopUpBlock>
)

const PopUpBlock = styled(motion.div)`
    position: absolute;
    top: 0%;
    height: 250px;
    width: 350px;
    transform: translateX(-50%);
    background-color: white;
    z-index: 2;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
`;
const FieldTimeOutlinedStyled = styled(FieldTimeOutlined)`
  font-size: 30px;
  
`;
const TimeContainer = styled.div`
  height: 100px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PositionTimeIcon = styled.div`
  height: 65px;
  display: flex;
  align-items: flex-start;
`;
const SmoothLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background-color: #000000;
`;
const ListsTime = styled.ul`
  li{
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    h5{
      &:first-child span{
        display: inline-block;
        font-size: 15px; 
        color: #8C8C8C;
      }
      &:first-child small{
        display: inline-block;
        font-size: 13px;
        color: #000000;
        font-weight: normal;
      }
    }
  }
`;
const AdressContainer = styled.div`
  height: 75px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PositionAdressIcon = styled.div`
  height: 25px;
  
  display: flex;
  align-items: flex-start;
`;
const EnvironmentOutlinedStyled = styled(EnvironmentOutlined)`
  font-size: 30px;
`;
const ContactsContainer = styled.div`
  height: 75px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BlackEP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6{
    padding: 5px;
    span{
      display: inline-block;
      color: #2596be;
    }
  }
`;

export default PopUpShedulteContainer;
