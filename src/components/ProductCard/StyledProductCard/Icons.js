import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledCardIconWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 5px;
`

export const StyledCardIconCart = styled(ShoppingCartOutlined)`
  color: #155724;
  font-size: 17px;
  transition: .3s;

  padding: 3px;

  :hover {
    background-color: #D4EDDA;
  }
`

export default StyledCardIconWrapper
