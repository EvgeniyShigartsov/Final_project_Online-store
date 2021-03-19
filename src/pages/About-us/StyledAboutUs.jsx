import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const ComponentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
`
const TitleBox = styled.div`  
  width: 90%;
  margin: 10px auto 15px auto;
// Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
    width: 92%;
    margin: 0 auto 16px auto;
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    max-width: 1200px;
    width: 90%;
    margin: 20px auto;
    padding: 0 1%;
  }
`
const TitleText = styled.div`
  font-size: 22px;
  font-weight: bold;
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 42px;
    font-weight: bold;
    justify-content: start;
    padding: 0 1,5%;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`
const Section = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  background-color: ${(props) => (props.colored ? 'black' : 'white')};

// Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
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
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
  color: ${(props) => (props.colored ? 'white' : 'black')};
// Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 0 10px 0;
  }
// Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 39px 0 48px 0;
}
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    max-width: 1200px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 5%;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 17px 2% 25px 10%;
// Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    width: 55%;
    margin-right: ${(props) => (props.colored ? '2%' : '3%')};
    margin-left: ${(props) => (props.colored ? '0' : '5%')};  
  }
// Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
    width: 45%;
    margin-right: ${(props) => (props.colored ? '5%' : '2%')};
    margin-left: ${(props) => (props.colored ? '3%' : '5%')};  
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 50%;
    margin-right: ${(props) => (props.colored ? '5%' : '0')};
    margin-left: ${(props) => (props.colored ? '0' : '5%')};
  }
`
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 30px;
  margin: 5px 0 13px 0;
// Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    width: 95%;
    font-size: 30px;
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
    font-size: 32px;
    margin-bottom: 32px;
  }
`
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
// Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    width: 95%;
    font-size: 12px;
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 85%;
    font-size: 16px;
    line-height: 22px;
  }
`
const SectionImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;

  // Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    height: 95%;
    width: 37%;
  }
  // Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
    height: 90%;
    width: 40%;
  }  
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    width: 40%;
    height: 100%;
  }
`
const Image = styled.img`
  object-fit: cover;
  margin-top: ${(props) => (props.first ? '0' : '25px')};
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.first ? '100%' : '50%')};
  height: ${(props) => (props.first ? '100%' : '50%')};
  // Intermediate point
  @media(min-width: 650px) and (max-width:750px) {
    width: 100%;
    height: 100%;
  }
  // Tablet
  @media(min-width: 751px) and (max-width: ${forTablet.maxWidth}px) {
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
  TitleText, Text, ContentBlock, ComponentContainer
};