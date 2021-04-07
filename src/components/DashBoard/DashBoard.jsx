/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../common/Container'
import { getCustomer } from '../../store/customer/middleware';
import Subscribe from './Subscribed/Subscribe';
import {
  AccountInfo, MyDash, WrapperBlocks, RowBlocks,
  StyledSpin
} from './StyledDashBoard';
import PasswordInfoChange from './PasswordInfoChange/PasswordInfoChange';
import Orders from './Orders/Orders';
import { selectCustomerInfo } from '../../store/customer/reducer'

const mapStateToProps = (state) => ({
  customerInfo: selectCustomerInfo(state)
})

const DashBoard = connect(mapStateToProps, { getCustomer })(({customerInfo, getCustomer}) => {
  useEffect(() => {
    if (Object.keys(customerInfo).length !== 0) {
      return customerInfo
    }
    getCustomer()
  }, [getCustomer, customerInfo])

  if (Object.keys(customerInfo).length === 0) return <StyledSpin size="large" tip="Loading..." />
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
          <PasswordInfoChange info={customerInfo} />
        </RowBlocks>
        <RowBlocks>
          <Subscribe
            email={customerInfo.email}
          />
        </RowBlocks>
        <RowBlocks>
          <Orders />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})
export default DashBoard;
