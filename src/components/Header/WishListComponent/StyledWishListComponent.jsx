import styled from 'styled-components'
import { forTablet } from '../../../styles/mediaBreakPoints'

const StyledLiked = styled.svg`
    margin-left: 7px;
    stroke: black;
    stroke-width: 1.2px;
    @media(max-width: ${forTablet.maxWidth}px) {
      margin-left: 18px;
      stroke: white;
    }
`;
export default StyledLiked;
