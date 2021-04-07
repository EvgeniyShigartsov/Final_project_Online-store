/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';
import OrderComponent from './OrderComponent';
import DirectionChange from './StyledOrders';
import { selectOrders } from '../../../store/customer/reducer'

const mapStateToProps = (state) => ({
  orders: selectOrders(state)
})

const Orders = connect(mapStateToProps, null)(({orders}) => (
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
))

export default Orders;