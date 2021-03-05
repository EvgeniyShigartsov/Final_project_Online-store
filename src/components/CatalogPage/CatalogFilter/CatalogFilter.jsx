/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled, {css} from 'styled-components';
//
import PropTypes from 'prop-types';
import {
  Menu, Form, Input, InputNumber, Button
} from 'antd';
import {forMobile, forDesktop, forTablet} from '../../../styles/mediaBreakPoints';
import close from '../../../images/filter/close.svg';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const CatalogFilter = ({showFilter, setShowFilter}) => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  console.log(openKeys);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} style={{background: '#F5F7FF'}}>
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <h4>Filters</h4>
          <CloseBtn onClick={() => setShowFilter((prev) => !prev)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
          <SubMenu key="sub1" title="Category">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Price">
            <LI key="5" style={{paddingLeft: '0px !important'}}>
              <Form.Item name={['filteredInfo', 'priceFrom']} label="From">
                <InputFrom style={{width: '80%'}} />
              </Form.Item>
            </LI>
            <LI key="6">

              <Form.Item name={['filteredInfo', 'priceTo']} label="To" style={{marginLeft: '19px'}}>
                <InputTo style={{width: '80%'}} />
              </Form.Item>

            </LI>
            {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
          </SubMenu>
          <SubMenu key="sub4" title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </StyledMenu>
        <AlignBtn>
          <Button type="primary" htmlType="submit">
            Apply Filtres
          </Button>
        </AlignBtn>
        
      </Wrapper>
      
    </Form>
  );
}
CatalogFilter.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired
}
const Wrapper = styled.aside`
    /* max-width: 200px;
    min-height: 100%;
    background-color: gray; */
    @media(max-width: ${forMobile.maxWidth}px) {
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
  @media(max-width: ${forMobile.maxWidth}px) {
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
  @media(min-width: ${forTablet.minWidth}px) {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: #ECECEC;
      h3{
        @media(max-width: ${forMobile.maxWidth}px) {
          font-size: 20px;
          font-weight: bold;
        }
    }
  }
`;
const InputFrom = styled(InputNumber)`
  border-radius: 3px;
  width: 50%;
`;
const InputTo = styled(InputNumber)`
  border-radius: 3px;
  width: 80%;
`;
const CloseBtn = styled.div`
  @media(max-width: ${forMobile.maxWidth}px) {
    cursor: pointer;
  }
  @media(min-width: ${forTablet.minWidth}px) {
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
`;
const AlignBtn = styled.div`
  @media(max-width: ${forMobile.maxWidth}px) {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default CatalogFilter