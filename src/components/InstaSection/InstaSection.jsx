/* eslint-disable max-len */
import React from 'react'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import InstaSec, {
  InstaSecWrapper, InstaPostWrap, PostPic, PostText, PostDate
} from './StylesInstaSection'
import firstImg from '../../images/news&rewiews/pic1.png'
import secondImg from '../../images/news&rewiews/pic2.png'
import thirdImg from '../../images/news&rewiews/pic3.jpg'
import fourthImg from '../../images/news&rewiews/pic4.jpg'
import fifthImg from '../../images/news&rewiews/pic5.jpg'
import sixthImg from '../../images/news&rewiews/pic6.png'
import seventhImg from '../../images/news&rewiews/pic7.png'
import eighthImg from '../../images/news&rewiews/pic8.png'
import ninthImg from '../../images/news&rewiews/pic9.jpg'

export const InstaSection = () => (
  
  <Container>
    <Wrapper>
      <InstaSec>
        <h3>Follow us on Instagram for News, Offers & More</h3>
        <InstaSecWrapper>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={firstImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={secondImg} />
              <PostText>
                As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={thirdImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={fourthImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={fifthImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={sixthImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={seventhImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={eighthImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
          <InstaPostWrap>
            <a href="#void">
              <PostPic src={ninthImg} />
              <PostText>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
              </PostText>
              <PostDate>
                01.09.2020
              </PostDate>
            </a>
          </InstaPostWrap>
        </InstaSecWrapper>
      </InstaSec>
    </Wrapper>
  </Container>

)

export default InstaSection
