import styled from 'styled-components'
import { Tabs } from 'antd'
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

// Catalog сard
export const StyledMaincCatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  min-width: 320px;

  margin-top: 30px;
  margin-left: 5%;

  @media(min-width: ${forTablet.minWidth}px) {
    flex-direction: row;
  }
  
  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
    max-width: 1200px;

    padding: 0 10px;
    margin: 0 auto;
    margin-top: 30px;
  }
`
export const StyledMainCatalogCardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: scroll;

  margin-top: 15px;

  @media(min-width: ${forTablet.minWidth}px){
    grid-template-columns: repeat(4, 1fr);
    overflow-x: scroll;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    grid-template-columns: repeat(4, 1fr);
    overflow-x: auto;
  }
`

// Tab nav
export const StyledTabs = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }
  .ant-tabs-tab .ant-tabs-tab-btn {
    color: #838383;
    font-size: 14px;
    font-weight: 600;
  }
  .ant-tabs-tab .ant-tabs-tab-btn:hover {
    color: #000;
  }
  .ant-tabs-tab {
    padding: 0;
    margin-bottom: 5px;
  }
  .ant-tabs-ink-bar {
    background: #0156FF;
  }
  .ant-tabs-nav {
    margin: 0 0 0 0;
  }
  .ant-tabs-nav::before {
    border-bottom: none;
  }
`