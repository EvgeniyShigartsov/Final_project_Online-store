import React, { useEffect } from 'react'
import { Tabs } from 'antd'

// Redux
import { connect } from 'react-redux'
import { getCatalogProducts } from '../../store/catalogProducts/middleware'

// Components
import { MainCatalogCardWrapper } from './MainCatalogCardWrapper/MainCatalogCardWrapper'
import { MainCatalogBillboardMobile } from './MainCatalogBillboard/MainCatalogBillboardMobile'
import { MainCatalogBillboardDesktop } from './MainCatalogBillboard/MainCatalogBillboardDesktop'

// Styles
import StyledTabs from './StyledMainCatalog'
import Flex from '../../styles/Flex/Flex'

// Redux maps
const mapStateToProps = (state) => ({catalogProduct: state.catalogProduct.catalogProduct.catalog})
const mapDispatchToProps = (dispatch) => ({
  dispatchCatalogProduct: () => dispatch(getCatalogProducts())
})

export const MainCatalog = connect(mapStateToProps, mapDispatchToProps)(({
  catalogProduct,
  dispatchCatalogProduct
}) => {
  // Ant tabs
  const { TabPane } = Tabs

  useEffect(() => {
    dispatchCatalogProduct()
  })

  let catalogToRender

  if (catalogProduct !== undefined) {
    catalogToRender = catalogProduct.map((catalog) => (
      <div key={`main wrapper ${catalog.catalogNo}`}>
        <MainCatalogBillboardMobile
          billboardInfo={catalog.billboard}
          key={`bilboard mobile ${catalog.billboard.itemNo}`}
        />
        
        <StyledTabs key={`styled tabs ${catalog.catalogNo}`}>
          {
            catalog.category.map((categoryItem) => (
              <TabPane
                tab={categoryItem.productSubcategory}
                key={`main catalog nav${categoryItem.productSubcategory}`}
              >
                <Flex key={`main catalog nav${categoryItem.productSubcategory}`}>
                  <MainCatalogBillboardDesktop
                    billboardInfo={catalog.billboard}
                    key={`bilboard desktop ${catalog.billboard.itemNo}`}
                  />
                  <MainCatalogCardWrapper
                    productsList={categoryItem.productItem}
                    key={`main catalog card wrapper' ${categoryItem.productSubcategory}`}
                  />
                </Flex>
              </TabPane>
            ))
          }
        </StyledTabs>
      </div>
    ))
  }

  return (
    <>
      { catalogToRender }
    </>
  )
})

export default MainCatalog
