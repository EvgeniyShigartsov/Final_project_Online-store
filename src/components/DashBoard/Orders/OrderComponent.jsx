/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Descriptions, Dropdown, Button, Menu
} from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {
  ContainerOrder, ShowListStyled, StyledMenu, ImgContainer
} from './StyledOrderComponent'
import UpperCaseFirstLetter from '../../../utils/upperCaseFirstLetter';
import slicePlus from '../../../utils/slicePlus';
 
const OrderComponent = ({orders}) => {
  const menu = (
    <StyledMenu style={{width: '90%'}}>
      {orders.products.map((item) => (
        <Menu.Item key={item._id}>
          <Link to={`products/${item.product.itemNo}`} onClick={() => window.scrollTo(0, 0)}>
            {`${UpperCaseFirstLetter(item.product.name)} - ${item.cartQuantity} pc`}
            <ImgContainer src={item.product.imageUrls[0]} />
          </Link>
        </Menu.Item>
      ))}
    </StyledMenu>
  );
  return (
    <ContainerOrder>
      <Descriptions
        style={{paddingTop: '30px'}}
        bordered
        title={`Order №: ${orders.orderNo}`}
        column={{
          xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1
        }}
        size="small"
      >
        <Descriptions.Item label="Order Date:">{orders.date.substr(0, 10)}</Descriptions.Item>
        <Descriptions.Item label="Payment type:">{orders.paymentInfo}</Descriptions.Item>
        <Descriptions.Item label="Quantity of goods:">
          {orders.products.length}
          {' '}
          <ShowListStyled>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>Show</Button>
            </Dropdown>
          </ShowListStyled>
        </Descriptions.Item>
        <Descriptions.Item label="Shipping:">{`${orders.shipping} ₴`}</Descriptions.Item>
        <Descriptions.Item label="Total amount:">{`${orders.totalSum} ₴`}</Descriptions.Item>
        <Descriptions.Item label="Phone:">{slicePlus(orders.mobile)}</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
    </ContainerOrder>
  );
}

OrderComponent.propTypes = {
  orders: PropTypes.instanceOf(Object).isRequired
}

export default OrderComponent;
