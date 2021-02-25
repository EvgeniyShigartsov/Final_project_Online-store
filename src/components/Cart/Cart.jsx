import React from 'react';
import Heading from '../common/Heading/Heading';
import {Container} from '../common/Container';
import { CartItem } from './CartItem/CartItem';

export const Cart = () => (
  <div>
    <Container>
      <Heading>
        Shopping Cart
      </Heading>
      <CartItem
        img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
        description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
        price="$12,345.00"
        quantity="2"
        subtotal="$24,345.00"
        key="123"
      />
      <CartItem
        img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
        description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
        price="$12,345.00"
        quantity="2"
        subtotal="$24,345.00"
        key="123"
      />
    </Container>
  </div>
);

export default Cart;