import React from 'react'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import Item, {
  Icon, Service, Description, Round, Img
} from './StyledServiceSection'

export default function ServiceSection() {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Icon>
            <Round>
              <Img>1</Img>
            </Round>
          </Icon>
          <Service>Product Support</Service>
          <Description>
            Up to 3 years on-site warranty available for your peace of mind.
          </Description>
        </Item>
        <Item>
          <Icon>
            <Round>
              <Img>1</Img>
            </Round>
          </Icon>
          <Service>Product Support</Service>
          <Description>
            Up to 3 years on-site warranty available for your peace of mind.
          </Description>
        </Item>
        <Item>
          <Icon>
            <Round>
              <Img>1</Img>
            </Round>
          </Icon>
          <Service>Product Support</Service>
          <Description>
            Up to 3 years on-site warranty available for your peace of mind.
          </Description>
        </Item>
      </Wrapper>
    </Container>
  )
}
