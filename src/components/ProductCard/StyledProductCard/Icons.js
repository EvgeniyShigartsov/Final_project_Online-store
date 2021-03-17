import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledCardIconWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 5px;

  display: flex;
  flex-direction: column;
`

export const StyledCardIconAddToCart = styled(ShoppingCartOutlined)`
  color: #78A962;
  font-size: 17px;
  transition: .3s;

  padding: 3px;

  :hover {
    background-color: #e9ffee;
  }
`

export const StyledCardIconAddToFavorite = styled(HeartOutlined)`
  color: #fcc10a;
  font-size: 17px;
  transition: .3s;

  padding: 3px;
  margin-top: 5px;

  :hover {
    background-color: #fff8e7;
  }
`

export default StyledCardIconWrapper
