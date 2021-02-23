/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { Container } from '../../styles/styled-components/Container'
import 'antd/dist/antd.css'
import { SliderArrowLeft } from '../../styles/styled-components/SliderArrowLeft'
import { SliderArrowRight } from '../../styles/styled-components/SliderArrowRight'
import { forMobile, forTablet } from '../../styles/mediaBrakepoints'
import { ProductCard } from '../ProductCard/ProductCard'

export const NewProductsSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({next: () => null, prev: () => null})
  
  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({next: ref.current.next, prev: ref.current.prev}))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])

  const carouselStentings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: forTablet.maxWidth,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: forMobile.maxWidth,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  }
  return (
    <Container>
      <Wrapper>
        <Carousel ref={ref} {...carouselStentings}>
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock={false}
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock={false}
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={4}
            isGoodsInStock
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock={false}
          />
          <ProductCard
            title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
            img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
            lastPrice="544"
            nowPrice="644"
            reviews="999"
            rating={2}
            isGoodsInStock={false}
          />
        </Carousel>
        <SliderArrowLeft onClick={handlers.prev} />
        <SliderArrowRight onClick={handlers.next} />
      </Wrapper>
    </Container>
  )
}
export default NewProductsSlider

const Wrapper = styled.div`
    position: relative;
`