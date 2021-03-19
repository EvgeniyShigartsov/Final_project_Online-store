/* eslint-disable react/prop-types */
import React from 'react';
import { Descriptions } from 'antd';
import styled from 'styled-components';

// import { forDesktop } from '../../../styles/mediaBreakPoints';

// eslint-disable-next-line no-unused-vars
const OrderComponent = ({orders}) => {
  console.log(orders);
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <ContainerOrder>
      <br />
      <br />
      <Descriptions
        bordered
        title={capitalizeFirstLetter(orders.name)}
        size="small"
      >
        <Descriptions.Item label="Brand :">{orders.brand}</Descriptions.Item>
        <Descriptions.Item label="Categories :">{orders.categories}</Descriptions.Item>
        <Descriptions.Item label="Date :">{orders.date.substr(0, 10)}</Descriptions.Item>
        <Descriptions.Item label="Price :">{`${orders.currentPrice} $`}</Descriptions.Item>
        <Descriptions.Item label="Color :">{orders.color}</Descriptions.Item>
        <Descriptions.Item label="Quantity :">{orders.quantity}</Descriptions.Item>
        <Descriptions.Item label="Description :">{orders.description}</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
    </ContainerOrder>
  );
}
const ContainerOrder = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 100% !important;
  /* .ant-descriptions-title {
    width: 60%;
  } */
  height: 100% !important;
  .ant-descriptions-item-label {
    padding: 8px 13px 0px 13px!important;
  }
`;

export default OrderComponent;