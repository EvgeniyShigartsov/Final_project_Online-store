import React from 'react';
import PropTypes from 'prop-types';

import NavUserContainer
  from '../../styles/styled-components/Header/UserPopUpStyled';

const UserPopUp = ({isOpenUser}) => {
  const openSlideUser = {
    hidden: {
      x: 50,
      scale: 0,
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
      x: -180,
      scale: 1,
      transition: {
        delay: 0.35,
        type: 'spring',
        stiffness: 200,
        damping: 40
      }
    }
  };
  return (
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
  );
}
UserPopUp.propTypes = {
  isOpenUser: PropTypes.bool.isRequired,
}

export default UserPopUp;