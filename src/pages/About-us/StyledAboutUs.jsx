import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const BlockContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  min-width: 360px;
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
  }
`

const TitleBox = styled.div`
  display: flex;
  justify-content: start;
  height: 27px;
  margin: 10px 0 15px 15px;
  font-size: 18px;
  font-weight: bold;
  
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    margin: 13px 0 13px 26px;
  }
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    height: 48px;
    margin: 20px 0 20px 30px;
    font-size: 48px;
    font-weight: bold;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // flex-wrap: nowrap;
  width: 100%;
`
const Section = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
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
  max-width: 1200px;
  display: flex;
  flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
  color: ${(props) => (props.colored ? 'white' : 'black')};
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 39px 0 48px 0;
}
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 17px 2% 25px 10%;
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 45%;
    margin-right: ${(props) => (props.colored ? '5%' : '0')};
    margin-left: ${(props) => (props.colored ? '0' : '5%')};  
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 45%;
    margin-right: ${(props) => (props.colored ? '5%' : '0')};
    margin-left: ${(props) => (props.colored ? '0' : '5%')};
  }
`
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 32px;
  margin: 5px 0 13px 0;
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
    font-size: 36px;
    margin-bottom: 32px;
  }
`
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 14px;
  letter-spacing: 1px;
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 92%;
    font-size: 18px;
    line-height: 26px;
  }
`
const SectionImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
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
  width: ${(props) => (props.first ? '100%' : '50%')};
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
const Text = styled.p`
  margin-bottom: 20px;
`

export {
  Img, Image, SectionImg, ContentContainer, SectionContent, SectionTitle, Section, Flex, TitleBox,
  Text, ContentBlock, BlockContainer
};