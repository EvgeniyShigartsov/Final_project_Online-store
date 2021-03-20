/* eslint-disable no-unused-vars */
// eslint-disable-file no-use-before-define
import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'
import { getMainCatalogProducts } from '../../store/mainCatalog/middleware'

// Styles
import { MainCatalogCardWrapper } from './MainCatalogCardWrapper/MainCatalogCardWrapper'
import { MainCatalogBillboard } from './MainCatalogBillboard/MainCatalogBillboard'
import { StyledMaincCatalogWrapper } from './StyledMainCatalog'

// Redux maps
const mapStateToProps = (state) => ({catalogProduct: state.mainCatalog})
const mapDispatchToProps = (dispatch) => ({
  dispatchCatalogProduct: () => dispatch(getMainCatalogProducts())
})

export const MainCatalog = connect(mapStateToProps, mapDispatchToProps)(({
  catalogProduct, dispatchCatalogProduct
}) => {
  useEffect(() => {
    dispatchCatalogProduct()
  }, [dispatchCatalogProduct])
  
  return (
    <section>
      <StyledMaincCatalogWrapper>
        <MainCatalogBillboard
          billboardInfo={{
            title: 'gaming monitors',
            img: 'https://fuzzmusic.ru/wp-content/uploads/2020/08/pesni-iz-igry-kiberpank-2077-1.jpg',
            url: 'google.com'
          }}
        />
        <MainCatalogCardWrapper
          productsList={catalogProduct.gamingMonitorList}
        />
      </StyledMaincCatalogWrapper>

      <StyledMaincCatalogWrapper>
        <MainCatalogBillboard
          billboardInfo={{
            title: 'desktops',
            img: 'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3ce6d340560cf08f/5e71863623ff3341c4f5aba8/computing-evergreen-feature-gaming-desktop-orientation-s.jpg?width=2877&quality=80',
            url: 'google.com'
          }}
        />
        <MainCatalogCardWrapper
          productsList={catalogProduct.desktopList}
        />
      </StyledMaincCatalogWrapper>

      <StyledMaincCatalogWrapper>
        <MainCatalogBillboard
          billboardInfo={{
            title: 'laptops',
            img: 'https://www.xmg.gg/wp-content/uploads/XMG_Pro-15_gg_Rotationsbanner_EN_Desktop.jpg',
            url: 'google.com'
          }}
        />
        <MainCatalogCardWrapper
          productsList={catalogProduct.laptopList}
        />
      </StyledMaincCatalogWrapper>

      <StyledMaincCatalogWrapper>
        <MainCatalogBillboard
          billboardInfo={{
            title: 'tablets',
            img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
            url: 'google.com'
          }}
        />
        <MainCatalogCardWrapper
          productsList={catalogProduct.tabletList}
        />
      </StyledMaincCatalogWrapper>
    </section>
  )
})

export default MainCatalog