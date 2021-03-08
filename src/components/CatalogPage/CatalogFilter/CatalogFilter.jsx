/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react'
import styled, {css} from 'styled-components';
//
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {
  Checkbox,
  Menu, Form,
  InputNumber, Button
} from 'antd';
import { forDesktop, forTablet} from '../../../styles/mediaBreakPoints';
import close from '../../../images/filter/close.svg';
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

const CatalogFilter = ({showFilter, setShowFilter, setFilter}) => {
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
const StyledForm = styled(Form)`
  background: #F5F7FF;
  @media(min-width: 591px) {
      min-width: 27%;
  } 
  @media(min-width: ${forDesktop.minWidth}px) {
      min-width: 20%;
  } 
`;

const StyledMenuItem = styled(Menu.Item)`
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-left: 20px !important;
  } 
  @media(min-width: ${forTablet.minWidth}px) {
    padding: 0px 0px 0px 10px !important;
    font-size: 2px !important;
  } 
`;
const Wrapper = styled.aside`
    @media(max-width: 590px) {
      position: absolute;
      top: 0%;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #ECECEC;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 10;
      ${(props) => (props.showFilter && css`
        left: 0%;
        opacity: 1;
      `)}
  }
`;

const FilterTitle = styled.div`
  @media(max-width: 591px) {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px;
    background: #ECECEC;
      h3{
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media(min-width: 592px) {
    padding: 15px 20px;
    justify-content: center;
    width: 100%;
    h3{
      font-size: 21px;
      font-weight: bold;
      text-align: center;
    }
  }
`;
const FormItemWrapper = styled(Form.Item)`
  @media(max-width: 591px) {
    text-align: right !important;
    padding-right: 20px !important;
    position: relative;
  }
  @media(min-width: 592px) {
    padding-left: 20px !important;
  }
`;
const FromTag = styled.h6`
  position: absolute;
  top: 35px;
  left: 30px;
  @media(min-width: 591px) {
    display: none;
  }
`;
const ToTag = styled.h6`
  position: absolute;
  top: 35px;
  left: 30px;
  @media(min-width: 591px) {
    display: none;
  }
`;
const InputFrom = styled(InputNumber)`
  @media(max-width: 591px) {
    width: 70% !important;
    border: 0.5px solid rgba(0,0,0,0.5) !important;
  }
  @media(min-width: 592px) {
    width: 90% !important;

  }
`;
const InputTo = styled(InputNumber)`
  @media(max-width: 591px) {
    width: 70% !important;
    border: 0.5px solid rgba(0,0,0,0.5) !important;
  }
  @media(min-width: 592px) {
    width: 80% !important;
    margin-left: 15px;
  }
`;
const CloseBtn = styled.div`
  @media(max-width: 591px) {
    cursor: pointer;
  }
  @media(min-width: 591px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
const StyledMenu = styled(Menu)`
  min-width: 20%;
`;
const LI = styled(Menu.Item)`
  padding-left: 10px !important;
  @media(max-width: ${forTablet.maxWidth}px) {
    padding-right: 0px !important;
  }
`;
const AlignBtn = styled.div`
  margin-top: 20px;
  @media(max-width: 591px) {
    width: 90%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  @media(min-width: 592px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const AllBrandsTitle = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 592px) {
    border-top: 7px solid white;
    margin-top: 50px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h5{
      font-size: 20px;
    }
  }
  
`;
const GridFilterPart = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 592px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;
const ContainerBrandsImg = styled.div`
  text-align: center;
  display: block;
`;
const WishList = styled.div`
  margin-top: 50px;
  height: 120px;
  border-top: 7px solid white;
  border-bottom: 7px solid white;
  h5{
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    color: black;
  }
`;

const NoWishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
const WishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
const ContainerImage = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 591px) {
    text-align: center;
    display: block;
    img{
      width: 100%;
    }
  }
`;
export default CatalogFilter