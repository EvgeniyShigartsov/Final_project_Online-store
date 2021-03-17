import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
  const [isSubscribed, setIsSubscribed] = useState('')

  useEffect(() => {
    const customer = async () => {
      const information = await getCustomer()
      const infoCustomer = information.data;
      setInfo(() => infoCustomer)
    }
    customer()
  }, [])
  console.log(info.email);

  if (Object.keys(info).length === 0) return <SpinAnimation width="90vw" height="90vh" />
  // if (Object.keys(info).length === 0) return <SpinAnimation width="90vw" height="90vh" />
  // решить вопрос рендиринга блока который
  // отвечате за подписку, она меняется при загрузке страници,

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
          <Subscribe
            email={info.email}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})
export default DashBoard;
