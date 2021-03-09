import React, {useRef, useState} from 'react'

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {
  Checkbox,
  Button, Menu
} from 'antd';
import close from '../../../images/filter/close.svg';
// styles
import {
  StyledForm, StyledMenuItem, Wrapper, FilterTitle,
  FormItemWrapper, FromTag, ToTag, InputFrom, InputTo,
  CloseBtn, StyledMenu, LI, AlignBtn, AllBrandsTitle,
  GridFilterPart, ContainerBrandsImg, WishList, NoWishItem,
  WishItem, ContainerImage
} from './StylesCatalogfilter';
import {checkPriceValues, checkCurrent} from '../../../utils/checkPriceValues';
// img
import imageBrands1 from '../../../images/filter/imageBrands1.svg';
import imageBrands2 from '../../../images/filter/imageBrands2.svg';
import imageBrands3 from '../../../images/filter/imageBrands3.svg';
import imageBrands4 from '../../../images/filter/imageBrands4.svg';
import imageBrands5 from '../../../images/filter/imageBrands5.svg';
import imageBrands6 from '../../../images/filter/imageBrands6.svg';
import styl from '../../../images/filter/styl.svg';

const { SubMenu } = Menu;

const CatalogFilter = ({
  showFilter, setShowFilter, setFilter
}) => {
  // eslint-disable-next-line no-unused-vars
  const [wish, setWish] = useState(true); // temporaly for wisth list
  const { current } = useRef({
    brand: [],
    categoris: []
  });
  const valuesOfBrand = current.brand;
  const valuesOfCategories = current.categoris;

  const onFinish = (values) => {
    const refValue = checkPriceValues(values);
    const refCheckBox = checkCurrent(current);
    setFilter({
      ...refValue,
      ...refCheckBox
    })
  };

  const getValuesFromBrands = (e, values) => {
    if (e.target.checked) {
      values.push(e.target.value)
    } else {
      values.forEach((item, i) => {
        if (item === e.target.value) {
          values.splice(i, 1)
        }
      });
    }
  }

  const getValuesFromCategories = (e, values) => {
    if (e.target.checked) {
      values.push(e.target.value)
    } else {
      values.forEach((item, i) => {
        if (item === e.target.value) {
          values.splice(i, 1)
        }
      });
    }
  }

  return (
    <StyledForm onFinish={onFinish}>
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <CloseBtn onClick={() => setShowFilter((prev) => !prev)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <StyledMenu mode="inline">
          <SubMenu key="brand" title="Brands">
            <StyledMenuItem key="msi"><Checkbox value="MSI" onChange={(e) => { getValuesFromBrands(e, valuesOfBrand) }}>MSI</Checkbox></StyledMenuItem>
            <StyledMenuItem key="lg"><Checkbox value="LG" onChange={(e) => { getValuesFromBrands(e, valuesOfBrand) }}>LG</Checkbox></StyledMenuItem>
            <StyledMenuItem key="liyama"><Checkbox value="Liyama" onChange={(e) => { getValuesFromBrands(e, valuesOfBrand) }}>Liyama</Checkbox></StyledMenuItem>
            <StyledMenuItem key="samsung"><Checkbox value="Samsung" onChange={(e) => { getValuesFromBrands(e, valuesOfBrand) }}>Samsung</Checkbox></StyledMenuItem>
          </SubMenu>
          <SubMenu title="Price">
            <LI style={{paddingLeft: '0px !important'}}>
              <FromTag>From</FromTag>
              <FormItemWrapper name="minPrice" label="From">
                <InputFrom autoFocus />
              </FormItemWrapper>
            </LI>
            <LI>
              <ToTag>To</ToTag>
              <FormItemWrapper name="maxPrice" label="To" style={{fontSize: '2px !important'}}>
                <InputTo autoFocus />
              </FormItemWrapper>
            </LI>
          </SubMenu>
          <SubMenu key="сategories" title="Сategories">
            <StyledMenuItem key="gamingMonitors"><Checkbox onChange={(e) => { getValuesFromCategories(e, valuesOfCategories) }} value="gamingMonitors">Gaming Monitors</Checkbox></StyledMenuItem>
            <StyledMenuItem key="tablets"><Checkbox onChange={(e) => { getValuesFromCategories(e, valuesOfCategories) }} value="tablets">Tablets</Checkbox></StyledMenuItem>
            <StyledMenuItem key="laptops"><Checkbox onChange={(e) => { getValuesFromCategories(e, valuesOfCategories) }} value="laptops">Laptops</Checkbox></StyledMenuItem>
            <StyledMenuItem key="desctops"><Checkbox onChange={(e) => { getValuesFromCategories(e, valuesOfCategories) }} value="desctops">Desctops</Checkbox></StyledMenuItem>
          </SubMenu>
        </StyledMenu>
        <AlignBtn>
          <Button type="primary" htmlType="submit" size="middle">
            Apply Filtres
          </Button>
        </AlignBtn>
        <AllBrandsTitle>
          <h5>All Brands</h5>
        </AllBrandsTitle>
        <GridFilterPart>
          <ContainerBrandsImg>
            <img src={imageBrands1} alt="imageBrands1" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands2} alt="imageBrands2" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands3} alt="imageBrands3" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands4} alt="imageBrands4" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands5} alt="imageBrands5" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands6} alt="imageBrands6" />
          </ContainerBrandsImg>
        </GridFilterPart>
        <WishList>
          <h5>My Wish List</h5>
          {wish ? (
            <NoWishItem>
              <p>You have no items in your wish lists</p>
            </NoWishItem>
          ) : (
            <WishItem>
              <p>You have some items in your wish lists</p>
            </WishItem>
          )}
        </WishList>
        <ContainerImage>
          <img src={styl} alt="styl" />
        </ContainerImage>
      </Wrapper>
    </StyledForm>
  );
}
CatalogFilter.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default CatalogFilter