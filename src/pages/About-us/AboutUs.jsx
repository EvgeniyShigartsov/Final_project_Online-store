import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
import shop from '../../images/about-us-page/computer-shop.png'
import logoIcon from '../../images/about-us-page/logo-icon.png'
import keyboard from '../../images/about-us-page/keyboard.png'
// import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'

const TitleBox = styled.div`
  display: flex;
  height: 48px;
  justify-content: start;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: bold;
  margin-left: 260px;
  // background-color: antiquewhite;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
`
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 1290px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.colored ? 'black' : 'white')};
  color:${(props) => (props.colored ? 'white' : 'black')}
  // color:${(props) => props.theme.whiteTheme}
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 465px;
  font-size: 40px;
  margin-bottom: 32px;
  margin-right: 220px;
`
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 465px;
  font-size: 40px;
  margin-bottom: 32px;
`
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 436px;
  font-size: 18px;
`
const SectionImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  height: 490px;
`
const Image = styled.img`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Img = styled.img`
  width: 87px;
  height: 50px;
`

export const AboutUsPage = () => (
  <Container>
    <TitleBox><p>About As</p></TitleBox>
    <Flex className="container">
      <Section colored className="section">
        <ContentContainer className="content">
          <SectionTitle className="section-title">
            <p>A Family That Keeps</p>
            <p>On Growing</p>
          </SectionTitle>
          <SectionContent className="section-content">
            <p>We always aim to please the home market,</p>
            <p>supplying great computers and hardware at</p>
            <p>great prices to non-corporate customers,</p>
            <p>through our large Melbourne CBD showroom</p>
            <p>and our online store.</p>
            <p>Shop management approach fosters a strong</p>
            <p>customer service focus in our staff.We prefer to</p>
            <p>cultivate long-term client relationships rather than</p>
            <p>achieve quick sales,demonstrated in the</p>
            <p>measure of our long-term success.</p>
          </SectionContent>
        </ContentContainer>
        <SectionImg>
          <Image src={shop} alt="some img" />
        </SectionImg>
      </Section>
      <Section>
        <SectionImg>
          <Image src={keyboard} alt="keyboard" />
        </SectionImg>
        <ContentContainer className="content">
          <Img src={logoIcon} alt="logo" />
          <SectionTitle className="section-title">
            <p>shop.com</p>
          </SectionTitle>
          <SectionContent className="section-content">
            <p>Shop is a proudly Australian owned, Melbourne </p>
            <p>based supplier of I.T. goods and services, </p>
            <p>operating since 1991. Our client base </p>
            <p>encompasses individuals, small business, </p>
            <p>corporate and government organisations. We </p>
            <p>provide complete business IT solutions, centred </p>
            <p>on high quality hardware and exceptional customer service.</p>
          </SectionContent>
        </ContentContainer>
       
      </Section>
    </Flex>
  </Container>
)
export default AboutUsPage;