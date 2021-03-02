/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../store/products/middleware'
import { Container } from '../common/Container'
import { StarRating } from '../StarRating/StarRating'
import CartGroup from './CartGroup/CartGroup'
import {
  PageContainer,
  ImageBox,
  StyledImg,
  Description,
  ProductHeading,
  ReviewsBox,
  ReviewsCount,
  AboutProduct,
  PriceBox
} from './StylesProductPage'

const ProductPage = () => {
  const [product, setProduct] = useState({})

  const { productID } = useParams()
  useEffect(() => {
    // const getProduct = async () => {
    //   const test = await getOneProduct(productID)
    //   console.log(test)
    // }

    // axios.get(`/products/${productID}`)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(res)
    //       setProduct(() => res.data)
    //     }
    //   })
    //   .catch((err) => console.log(err.response))
  }, [productID])
  return (
    <Container>
      <PageContainer>
        <ImageBox>
          <StyledImg src="https://i2.rozetka.ua/goods/20202650/acer_nx_a1heu_00k_images_20202650421.jpg" alt="product image" />
        </ImageBox>
        <Description>About product</Description>
        <ProductHeading>MSI MPG Trident 3</ProductHeading>
        <ReviewsBox>
          <ReviewsCount>Reviews (13)</ReviewsCount>
          <StarRating rating={4} />
        </ReviewsBox>
        <AboutProduct>
          <li>Prop 1</li>
          <li>Prop 2</li>
          <li>Prop 3</li>
          <li>Prop 4</li>
          <li>Prop 5</li>
          <li>Prop 6</li>
          <li>Prop 7</li>
          <li>Prop 8</li>
        </AboutProduct>
        <CartGroup avilableQuantity={20} />
        <PriceBox>
          On Sale from
          <b> ₴ 16 500</b>
        </PriceBox>
        <div style={{ height: '50vh'}} />
      </PageContainer>
    </Container>
  )
}

export default ProductPage