import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Form } from 'antd';
// import axios from 'axios';
import StyledButton from '../../common/Buttons/StyledButton'
import StyledInput from './footer-style-components/StyledInput'

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//   }
// };

const FormSubscribe = () => (
  // const onFinish = ({email}) => {
//   const newSubscriber = {
//     email,
//     letterSubject: 'Test letter (final project)',
//     letterHtml:
//           `<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' />
//           <meta name='viewport' content='width=device-width, initial-scale=1.0' />
//           <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title>
//           <style> td { padding: 20px 50px; background-color: yellow;
//     color: blueviolet; font-size: 20px; }
//           </style> </head> <body> <table> <tr>
//     <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td>
//           <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>`
//   };
//   console.log(email);
//   axios
//     .post('https://intense-reaches-12245.herokuapp.com/api/subscribers', newSubscriber)
//     .then((newSubscriber) => {
//       /* Do something with newSubscriber */
//     })
//     .catch((err) => {
//       /* Do something with error, e.g. show error to user */
//     });
// };
 
  <StyledForm name="nest-messages">
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <StyledInput placeholder="email" />
    </Form.Item>
    <StyledButton type="primary" htmlType="submit">
      Subscribe
    </StyledButton>
  </StyledForm>
)

export default FormSubscribe

const StyledForm = styled(Form)`
display: flex;
`
