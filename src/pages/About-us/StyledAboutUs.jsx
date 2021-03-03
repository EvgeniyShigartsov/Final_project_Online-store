import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const BlockContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 10px;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: start;
  height: 27px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 26px;
  }
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
  height: 48px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: bold;
  margin-left: 30px;
}
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: nowrap;
  width: 100%;
`
const Section = styled.div`
  display: flex;
  background-color: ${(props) => (props.colored ? 'black' : 'white')};
// Tablet
@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  justify-content: center;
  align-items: center;
}
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    justify-content: center;
    align-items: center;
  }
`
const ContentBlock = styled.div`
  max-width:1200px;
  display:flex;
  flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
  color: ${(props) => (props.colored ? 'white' : 'black')};
// Tablet
@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 39px;
  padding-bottom: 48px;
}
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 128px 0;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 17px 17px 30px 34px;
  padding-right: 20px;
// Tablet
@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  width: 45%;
  margin-right: ${(props) => (props.colored ? '5%' : '0')};
  margin-left: ${(props) => (props.colored ? '0' : '5%')};
  
}
// Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 30%;
  margin-right: ${(props) => (props.colored ? '10%' : '0')};
  margin-left: ${(props) => (props.colored ? '0' : '10%')};
  }
`
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 32px;
  margin-bottom: 13px;
  margin-top: 5px;
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 90%;
  font-size: 40px;
  margin-bottom: 32px;
}
`
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%px;
  font-size: 14px;
  letter-spacing: 1px;
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 92%px;
  font-size: 18px;
  line-height: 26px;
}
`
const SectionImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 45%;
  overflow: hidden;
  object-fit: cover;
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 65%;
    width: 35%;
  }  
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 40%;
  height: 75%;
}
`
const Image = styled.img`
  margin-top: ${(props) => (props.first ? '0' : '25px')};
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.first ? '100%' : '250px')};
  height: ${(props) => (props.first ? '100%' : '180px')};
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 100%;
    height: 100%;
  }  
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 100%;
  height: 100%;
}
`
const Img = styled.img` 
  height: 30px;
  width: ${(props) => (props.biggerSize ? '52px' : '30px')};
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
  width: ${(props) => (props.biggerSize ? '87px' : '50px')};
  height: 50px;
  margin-bottom: 10px;
}
`
const Break = styled.div`
  display: block;
  height: 20px;
}
`

export {
  Img, Image, SectionImg, ContentContainer, SectionContent, SectionTitle, Section, Flex, TitleBox,
  Break, ContentBlock, BlockContainer
};