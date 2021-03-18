import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';

test('ProductCard render test', () => {
  render(
    <ProductCard
      productInfo={{
        name: 'Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020',
        imageUrls: [
          'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg',
        ],
        previousPrice: 644,
        currentPrice: 544,
        reviews: [2, 3, 4],
        quantity: 21,
        itemNo: '3232432'
      }}
    />
  )
})