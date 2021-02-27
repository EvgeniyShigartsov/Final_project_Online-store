/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { SliderArrowLeft } from '../common/SliderArrowLeft'
import { SliderArrowRight } from '../common/SliderArrowRight'
import { forMobile, forTablet } from '../../styles/mediaBreakPoints'
import { ProductCard } from '../ProductCard/ProductCard'
import { Wrapper } from '../common/Wrapper'
import { Container } from '../common/Container'

const mapStateToProps = (state) => ({ newProducts: state.products.newProducts })

export const NewProductsSlider = connect(mapStateToProps, null)(({
  getNewProducts,
  newProducts
}) => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({ next: () => null, prev: () => null })

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({ next: ref.current.next, prev: ref.current.prev }))
    }
    getNewProducts()
    // при первом рендере ref.current === undefined потому используется useEffect & useState
    // next и prev это методы слайдера для стрелок
  }, [getNewProducts])

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
          {newProducts.map((el) => (
            <ProductCard
              key={el.itemNo}
              title={el.name}
              img={el.imageUrls[0]}
              previousPrice={el.previousPrice}
              currentPrice={el.currentPrice}
              reviews={100}
              isGoodsInStock={el.quantity > 0}
              rating={4}
            />
          ))}
        </Carousel>
        <SliderArrowLeft onClick={handlers.prev} />
        <SliderArrowRight onClick={handlers.next} />
      </Wrapper>
    </Container>
  )
})
export default NewProductsSlider