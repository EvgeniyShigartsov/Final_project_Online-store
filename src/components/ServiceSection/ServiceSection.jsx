import React from 'react'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import Item, {
  Service, Description, Round, ItemWrapper
} from './StyledServiceSection'
import supportImg from '../../images/services/support.png'
import accountImg from '../../images/services/account.png'
import savingsImg from '../../images/services/savings.png'

export default function ServiceSection() {
  return (
    <Container>
      <Wrapper>
        <ItemWrapper>
          <Item>
            <Round>
              <img src={supportImg} alt="headphones" />
            </Round>
            <Service>Product Support</Service>
            <Description>
              Up to 3 years on-site warranty available for your peace of mind.
            </Description>
          </Item>
          <Item>
            <Round>
              <img src={accountImg} alt="user icon" />
            </Round>
            <Service>Personal Account</Service>
            <Description>
              With big discounts, free delivery and a dedicated support specialist.
            </Description>
          </Item>
          <Item>
            <Round>
              <img src={savingsImg} alt="price tag" />
            </Round>
            <Service>Amazing Savings</Service>
            <Description>
              Up to 70% off new Products, you can be sure of the best price.
            </Description>
          </Item>
        </ItemWrapper>
      </Wrapper>
    </Container>
  )
}
