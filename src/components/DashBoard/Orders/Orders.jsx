import React, {useEffect, useState} from 'react';
import getOrders from '../../../store/orders/middleware';
import OrderComponent from './OrderComponent';
import DirectionChange from './StyledOrderComponent';

const Orders = () => {
  const [orders, setOrders] = useState()
  useEffect(() => {
    const ordersToRender = async () => {
      const results = await getOrders();
      setOrders(() => results.data)
    }
    ordersToRender()
  }, [])
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
        {orders !== undefined ? (
          orders.map((item, i) => (
            <OrderComponent
              key={item.orderNo}
              orders={orders[i].products[0].product}
            />
          ))
        ) : (' ')}
      </DirectionChange>
    </div>
  );
}

export default Orders;