import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
import shop from '../../images/about-us-page/computer-shop.png'
import logoIcon from '../../images/about-us-page/logo-icon.png'
import keyboard from '../../images/about-us-page/keyboard.png'
import heartIcon from '../../images/about-us-page/heart-icon.png'
import yellowComputer from '../../images/about-us-page/computer-yellow.png'
import coloredComputer from '../../images/about-us-page/computer-colored.png'
import starIcon from '../../images/about-us-page/star-icon.jpg'
import blueComputer from '../../images/about-us-page/computer-blue.png'
import carIcon from '../../images/about-us-page/car-icon.png'
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
  height: 680px;
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
  margin-right: ${(props) => (props.colored ? '220px' : '0')};
  margin-left: ${(props) => (props.colored ? '0' : '220px')};
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
  line-height: 26px;
  letter-spacing: 1px;
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
  // width: ${(props) => (props.size ? '87px' : '50px')};
  height: 55px;
  margin-bottom: 10px;
  width: 50px
`
const data = [
  {
    title: 'A Family That Keeps',
    subtitle: 'On Growing',
    content: 'We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store',
    subcontent: 'Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success',
    img: shop,
    icon: undefined
  },
  {
    title: 'shop.com',
    subtitle: '',
    content: 'Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.',
    subcontent: '',
    img: keyboard,
    icon: logoIcon,
    iconSize: '50px'
  },
  {
    title: 'You re In Safe Hands',
    subtitle: '',
    content: 'Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',
    subcontent: '*Performance compared to i7-9700. Specs varies by model.',
    img: yellowComputer,
    icon: heartIcon,
    iconSize: '50px'
  },
  {
    title: 'The Highest Quality of Products',
    subtitle: '',
    content: 'We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals',
    img: coloredComputer,
    icon: starIcon,
    iconSize: '87px'
  },
  {
    title: 'Delivery to All Regions',
    subtitle: '',
    content: 'We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.',
    img: blueComputer,
    icon: carIcon,
    iconSize: '50px'
  }
]

export function AboutUsPage() {
  return (
    <Container>
      <TitleBox><p>About As</p></TitleBox>
      <Flex className="container">
        {data.map((item, i) => {
          const section = item;
          if (i % 2 === 0) {
            return (
              <Section colored className="section">
                <ContentContainer colored className="content">
                  {section.icon === undefined ? '' : <Img src={section.icon} alt="logo" /> }
                  <SectionTitle className="section-title">
                    <p>{section.title}</p>
                    <p>{section.subtitle}</p>
                  </SectionTitle>
                  <SectionContent className="section-content">
                    <p>{section.content}</p>
                    <br />
                    <p>{section.subcontent}</p>
                  </SectionContent>
                </ContentContainer>
                <SectionImg>
                  <Image src={section.img} alt="computer" />
                </SectionImg>
              </Section>
            )
          }
          return (
            <Section>
              <SectionImg>
                <Image src={section.img} alt="keyboard" />
              </SectionImg>
              <ContentContainer className="content">
                <Img size iconSize={section.iconSize} src={section.icon} alt="logo" />
                <SectionTitle className="section-title">
                  <p>{section.title}</p>
                </SectionTitle>
                <SectionContent className="section-content">
                  <p>{section.content}</p>
                  <br />
                  <p>{section.subcontent}</p>
                </SectionContent>
              </ContentContainer>
            </Section>
          )
        })}
      </Flex>
    </Container>
  )
}

export default AboutUsPage;