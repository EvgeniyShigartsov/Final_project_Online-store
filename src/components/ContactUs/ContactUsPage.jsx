import React from 'react'
import { connect } from 'react-redux'
import {
  ClockCircleOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined
} from '@ant-design/icons'
import { Form, Select } from 'antd';
import StyledButton from '../common/Buttons/StyledButton'
import {
  StyledWrapper, StyledTitle, StyledText, StyledContact, StyledAddress, StyledTextAddress,
  StyledHeaderAddress, StyledLinkPhoneAddress, StyledLinkMailAddress, Lable,
  StyledAddressWrapper, StyledLableSpan, StyledInput,
  StyledInputTextArea, StyledIconWrapper, StyledContainer, StyledFormWrapper,
  StyledInputWrapper, StyledForm, StyledLink, StyledIconContainer
} from './Styled'
import { Container } from '../common/Container'
import createNewContactForm from '../../store/contactUs/middleware'
import { letterSubject, letterHtml} from './contactUsConfig/letterConfig'

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="38">+38</Option>
    </Select>
  </Form.Item>
);

const mapStateToProps = (state) => ({isSuccess: state.contactUs.isSuccess})

const ContactUsPage = connect(mapStateToProps, {createNewContactForm})(({
  isSuccess,
  createNewContactForm,
}) => {
  const onFinish = ({
    email,
  }) => {
    createNewContactForm({email, letterSubject, letterHtml})
  }
  console.log(isSuccess);
  // {isSuccess ? 'success' : null}
  return (
    <Container>
      <StyledLink to="/#">
        Home
        <StyledIconContainer>
          <RightOutlined />
        </StyledIconContainer>
        Contact Us
      </StyledLink>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledContainer>
        <StyledWrapper>
          <StyledText>We love hearing from you, our Shop customers.</StyledText>
          <StyledText>
            Please contact us and we will make sure to get back to you as soon as we possibly can.
          </StyledText>
        </StyledWrapper>
        <StyledForm onFinish={onFinish}>
          <StyledFormWrapper>
            <Form.Item
              name={['user', 'name']}
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <StyledInputWrapper>
                <Lable>
                  Your Name
                  <StyledLableSpan>*</StyledLableSpan>
                </Lable>
                <StyledInput placeholder="Your Name" />
              </StyledInputWrapper>
            </Form.Item>
            <Form.Item
              name={['email']}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <StyledInputWrapper>
                <Lable>
                  Your Email
                  <StyledLableSpan>*</StyledLableSpan>
                </Lable>
                <StyledInput placeholder="Your Mail" />
              </StyledInputWrapper>
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <StyledInputWrapper>
                <Lable>
                  Your Phone Number
                  <StyledLableSpan>*</StyledLableSpan>
                </Lable>
                <StyledInput
                  placeholder="Your Phone Number"
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </StyledInputWrapper>
            </Form.Item>
          </StyledFormWrapper>
          <Form.Item
            name={['user', 'introduction']}
            rules={[
              {
                required: true,
                message: 'Please input what on your mind!',
              },
            ]}
          >
            <StyledInputWrapper>
              <Lable>
                What’s on your mind?
                <StyledLableSpan>*</StyledLableSpan>
              </Lable>
              <StyledInputTextArea autoSize={false} placeholder="Jot us a note and we’ll get back to you as quickly as possible" />
            </StyledInputWrapper>
          </Form.Item>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit" size="sm" padding="0" shape="round">
              Submit
            </StyledButton>
          </Form.Item>
        </StyledForm>
        <StyledContact>
          <StyledAddress>
            <StyledIconWrapper>
              <EnvironmentOutlined />
            </StyledIconWrapper>
            <StyledAddressWrapper>
              <StyledHeaderAddress>Address:</StyledHeaderAddress>
              <StyledTextAddress>1234 Street Adress City Address, 1234</StyledTextAddress>
            </StyledAddressWrapper>
          </StyledAddress>
          <StyledAddress>
            <StyledIconWrapper>
              <PhoneOutlined />
            </StyledIconWrapper>
            <StyledAddressWrapper>
              <StyledHeaderAddress>Phone:</StyledHeaderAddress>
              <StyledLinkPhoneAddress href="tel: +380504432255">(00)1234 5678</StyledLinkPhoneAddress>
            </StyledAddressWrapper>
          </StyledAddress>
          <StyledAddress>
            <StyledIconWrapper>
              <ClockCircleOutlined />
            </StyledIconWrapper>
            <StyledAddressWrapper>
              <StyledHeaderAddress>We are open:</StyledHeaderAddress>
              <StyledTextAddress>Monday - Thursday: 9:00 AM - 5:30 PM</StyledTextAddress>
              <StyledTextAddress>Friday 9:00 AM - 6:00 PM</StyledTextAddress>
              <StyledTextAddress>Saturday: 11:00 AM - 5:00 PM</StyledTextAddress>
            </StyledAddressWrapper>
          </StyledAddress>
          <StyledAddress>
            <StyledIconWrapper>
              <MailOutlined />
            </StyledIconWrapper>
            <StyledAddressWrapper>
              <StyledHeaderAddress>E-mail:</StyledHeaderAddress>
              <StyledLinkMailAddress href="mailto:ptopdruk@gmail.com">shop@email.com</StyledLinkMailAddress>
            </StyledAddressWrapper>
          </StyledAddress>
        </StyledContact>
      </StyledContainer>
    </Container>
  )
})

export default ContactUsPage