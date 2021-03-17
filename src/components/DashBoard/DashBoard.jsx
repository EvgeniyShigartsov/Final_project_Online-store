import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '../common/Container'
import { getCustomer } from '../../store/customer/middleware'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
import Subscribe from './Subscribed/Subscribe';
import {
  AccountInfo, MyDash, WrapperBlocks, RowBlocks
} from './StyledDashBoard';
import PasswordInfoChange from './PasswordInfoChange';

const DashBoard = connect(null, { getCustomer })(() => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const customer = async () => {
      const information = await getCustomer()
      const infoCustomer = information.data;
      setInfo(() => infoCustomer)
    }
    customer()
  }, [])

  if (Object.keys(info).length === 0) return <SpinAnimation width="90vw" height="90vh" />
  return (
    <Container>
      <MyDash>
        <p>My Dashboard</p>
      </MyDash>
      <AccountInfo>
        <h3>Account Information</h3>
      </AccountInfo>
      <WrapperBlocks>
        <RowBlocks>
          <PasswordInfoChange info={info} setInfo={setInfo} />
        </RowBlocks>
        <RowBlocks>
          <Subscribe email={info.email} />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})
DashBoard.PropTypes = {
  getCustomer: PropTypes.func.isRequired
}
export default DashBoard;
