/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// styled-components
import styled from 'styled-components'

// framer-motion
import { motion } from 'framer-motion';

const openSlideUser = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.35,
      type: 'spring',
      stiffness: 200,
      damping: 40
    }
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.35,
      type: 'spring',
      stiffness: 200,
      damping: 40
    }
  }
  
};

const UserPopUp = ({isOpenUser}) => (
  <NavUserContainer
    variants={openSlideUser}
    initial={false}
    animate={isOpenUser ? 'show' : 'hidden'}
  >
    <ul>
      <li>My Account</li>
      <li>My Wish List (0)</li>
      <li>Compare (0)</li>
      <li>Create an Account</li>
      <li>Sign In</li>
    </ul>
  </NavUserContainer>

)

const NavUserContainer = styled(motion.div)`
    background-color: white;
    position: absolute;
    top: 0;
    transform: translate(-90%, 20%);
    width: 200px;
    height: 150px;
    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: centerl;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
        li{
            padding-left: 30px;
        }
    }
`;

export default UserPopUp;