import styled from 'styled-components'
import { Tabs } from 'antd'

const StyledTabs = styled(Tabs)`
  margin-left: 5%;
  margin-top: 15px;

  // Styles for navigation tabs
  .ant-tabs-tab .ant-tabs-tab-btn {
    color: #838383;
    font-size: 14px;
    font-weight: 600;
  }

  .ant-tabs-tab .ant-tabs-tab-btn:hover {
    color: #000;
  }
  // Active tab navigation
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }

  // Remove all margins from navigation wrapper
  .ant-tabs-nav {
    margin: 0 0 0 0;
  }

  // Replacing indents navigation
  .ant-tabs-tab {
    padding: 0;
    margin: 0;
    margin-right: 25px;
    margin-bottom: 5px;
  }

  // Add underline in tab
  .ant-tabs-ink-bar {
    background: #0156FF;
  }

  // Remove the gray bar in the navigation
  .ant-tabs-nav::before {
    border-bottom: none;
  }

  // Remove three buttons to the right of the navigation
  .ant-tabs-nav-more{
    display: none;
  }
`

export default StyledTabs