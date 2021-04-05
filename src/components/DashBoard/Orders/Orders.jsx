/* eslint-disable consistent-return */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import OrderComponent from './OrderComponent';
import DirectionChange from './StyledOrders';
import { getOrders } from '../../../store/customer/middleware'
import { selectOrders } from '../../../store/customer/reducer'

const mapStateToProps = (state) => ({
  orders: selectOrders(state)
})

const Orders = connect(mapStateToProps, {getOrders})(({getOrders, orders}) => {
  useEffect(() => {
    if (Object.keys(orders).length !== 0) {
      return orders
    }
    getOrders()
  }, [getOrders, orders])
  return (
    <div style={{marginTop: '20px'}}>
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
        {orders !== null ? (
          orders.map((item, i) => (
            <OrderComponent
              key={item.orderNo}
              orders={orders[i]}
            />
          ))
        ) : (' ')}
      </DirectionChange>
    </div>
  );
})

export default Orders;