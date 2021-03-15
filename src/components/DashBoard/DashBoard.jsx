/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
// import PasswordChange from 'antd/lib/input/Password';
import { forTablet, forDesktop, forMobile } from '../../styles/mediaBreakPoints';
import { Container } from '../common/Container'
import { getCustomer } from '../../store/customer/middleware'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
import Modal from './Modal';
import FormInfoChange from './FormInfoChange';
import { setShowModal } from '../../store/modal/middleware';

const DashBoard = connect(null, { getCustomer, setShowModal })(({ setShowModal }) => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    const customer = async () => {
      const information = await getCustomer()
      const infoCustomer = information.data;
      setInfo(() => ({
        ...infoCustomer
      }))
    }
    customer()
  }, [])
  console.log(info.password);

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
                <Modal>
                  <FormInfoChange />
                </Modal>
                <button type="submit" id="setPassword" onClick={(e) => setShowModal(e.target.id)}>Change Password</button>
                {/* <Modal
                  title="Add New Password"
                  cancelText="Close"
                  okButtonProps={{style: {display: 'none'}}}
                  visible={isModalVisible}
                  onCancel={handleCancel}
                >
                  <PasswordChange handleCancel={handleCancel} setInfo={setInfo} />
                </Modal> */}
              </div>
            </div>
          </BlockInfo>
          <BlockInfo>
            <h4>Contact Information</h4>
            <div>
              <div>
                <p>
                  {info.firstName}
                </p>
                <p>
                  {info.lastName}
                </p>
              </div>
              <div>
                <button type="submit">Edit</button>
                <button type="submit">Change Password</button>
              </div>
            </div>
          </BlockInfo>
        </RowBlocks>
        <ManagingBooks>
          <h3>Address Book</h3>
          <BtnMenage type="submit">Menage Addresses</BtnMenage>
        </ManagingBooks>
        <RowBlocks>
          <BlockInfo>
            <h4>Contact Information</h4>
            <div>
              <div>
                <p>
                  {info.firstName}
                </p>
                <p>
                  {info.lastName}
                </p>
              </div>
              <div>
                <button type="submit">Edit</button>
                <button type="submit">Change Password</button>
              </div>
            </div>
          </BlockInfo>
          <BlockInfo>
            <h4>Contact Information</h4>
            <div>
              <div>
                <p>
                  {info.firstName}
                </p>
                <p>
                  {info.lastName}
                </p>
              </div>
              <div>
                <button type="submit">Edit</button>
                <button type="submit">Change Password</button>
              </div>
            </div>
          </BlockInfo>
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})

const AccountInfo = styled.div`
  @media(max-width: ${forMobile.maxWidth}px) {
      width: 90%;
    }
  @media(min-width: ${forTablet.minWidth}px) {
     width: 70%;
     margin: 0 auto;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
     width: 50%;
     margin: 0 auto;
  }
  h3{
    border-bottom: 1px solid #CCCCCC;
    padding: 0px 0px 10px 0px;
    @media(max-width: ${forMobile.maxWidth}px) {
      text-align: left;
    }
    @media(min-width: ${forTablet.minWidth}px) {
      color: #212121;
      font-size: 14px;
    }
  }
`;
const ManagingBooks = styled.div`
  position: relative;
  @media(max-width: ${forMobile.maxWidth}px) {
      width: 90%;
    }
  @media(min-width: ${forTablet.minWidth}px) {
     width: 70%;
     margin: 0 auto;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
     width: 50%;
     margin: 0 auto;
  }
  h3{
    padding: 0px 0px 10px 0px;
    border-bottom: 1px solid #CCCCCC;
    @media(max-width: ${forMobile.maxWidth}px) {
      text-align: left;
    }
    @media(min-width: ${forTablet.minWidth}px) {
      color: #212121;
      font-size: 14px;
    }
  }
`;
const BtnMenage = styled.button`
  position: absolute;
  top: -50%;
  right: -5%;
`;
const MyDash = styled.aside`
  padding-top: 20px;
  padding-bottom: 15px;
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-bottom: 2px;
  }
  p{ 
    font-size: 18px;
    font-weight: bold;
    @media(min-width: ${forDesktop.minWidth}px) {
    font-size: 25px;
  }
  }
`;
const WrapperBlocks = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: ${forTablet.minWidth}px) {
    align-items: center;
    padding-bottom: 2px;
    border-top: 0px solid #CCCC;
  }
  button {
    border: none;
    background-color: transparent;
    color: #0156FF;
    text-decoration-line: underline;
    font-style: normal;
    font-weight: 300;
    margin-top: 10px;
  }
`;
const RowBlocks = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: ${forTablet.minWidth}px) {
    flex-direction: row;
  }
`;
const BlockInfo = styled.div`
  padding: 20px 20px 20px 0px;

  @media(min-width: ${forTablet.minWidth}px) {
      padding: 20px 20px 20px 20px;
  }
  h4{
    font-weight: bold;
    padding-bottom: 15px;
  }
`;

const TextInfo = styled.div`
  p{
    padding: 5px;
  }
`;
export default DashBoard;