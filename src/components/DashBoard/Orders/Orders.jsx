/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import getOrders from '../../../store/orders/middleware';
import OrderComponent from './OrderComponent';
import {forMobile, forTablet} from '../../../styles/mediaBreakPoints';

const Orders = () => {
  const [orders, setOrders] = useState()
  useEffect(() => {
    const ordersToRender = async () => {
      const results = await getOrders();
      setOrders(() => results.data)
    }
    ordersToRender()
  }, [])
  // console.log(orders);

  return (
    <div style={{marginTop: '50px'}}>
      <div>
        <h5 style={{
          textAlign: 'center',
          fontSize: '20px',
          paddingBottom: '20px'
        }}
        >
          My Orders

        </h5>
      </div>
      <DirectionChange>
        {orders !== undefined && (
          orders.map((item, i) => (
            <OrderComponent
              key={item.products[0].product.id}
              orders={orders[i].products[0].product}
            />
          ))
        )}
      </DirectionChange>
    </div>
  );
}
const DirectionChange = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  @media(max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  > * {
    flex-grow: 1; 
    flex-basis: 105px;
    padding: 0px 10px 0px 10px;
    @media(max-width: 1250px) {
      padding: 0px;
    }
   @media(max-width: 580px) {
    width: 383px !important;
    }
    @media(max-width: 400px) {
    width: 323px !important;
    }
  }
`;

export default Orders;