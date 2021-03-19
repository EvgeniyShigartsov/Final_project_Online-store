import styled from 'styled-components'

const contentStyle = styled.div`
  height: 310px;
  color: #000000;
  line-height: 10px;
  text-align: center;
  background: #F5F7FF;
`;

export const RoundDots = styled.div`
  width: 15px;
  height: 15px;
  margin-top: -35px;
  border-radius: 50%;
  background: #CCCCCC;

  &:active {
    background: #0156FF;
  }
`;

export default contentStyle;