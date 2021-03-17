/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '../common/Container'
import { getCustomer } from '../../store/customer/middleware'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
import FormInfoChange from './FormInfoChange';
import Modal from './DashBoardModal';
import { setShowModal } from '../../store/dashBoardModal/middleware';
import Subscribe from './Subscribed/Subscribe';
import {
  AccountInfo, MyDash, WrapperBlocks, RowBlocks, BlockInfo, TextInfo
} from './StyledDashBoard';

const DashBoard = connect(null, { getCustomer, setShowModal })(({
  setShowModal,
}) => {
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
          <BlockInfo>
            <h4>Contact Information</h4>
            <div>
              <TextInfo>
                <p>
                  {info.firstName}
                </p>
                <p>
                  {info.lastName}
                </p>
              </TextInfo>
              <div>
                <button type="submit" id="setInfo" onClick={(e) => setShowModal(e.target.id)}>Edit</button>
                <Modal setInfo={setInfo} title />
                <button type="submit" id="setPassword" onClick={(e) => setShowModal(e.target.id)}>Change Password</button>
              </div>
            </div>
          </BlockInfo>
        </RowBlocks>
        <RowBlocks>
          <Subscribe email={info.email} />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})

export default DashBoard;
