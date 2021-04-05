import React, { useEffect } from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { selectModalState } from '../../../store/dashBoardModal/reducer'
import { validTelephone } from '../../../utils/constants'

const mapStateToProps = (state) => ({
  show: selectModalState(state),
})

const PhoneChange = connect(mapStateToProps, { setHideModal, updateCustomer })(({
  setHideModal, show, updateCustomer
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const validPhone = {
      telephone: `+${values.telephone}`
    }
    updateCustomer(validPhone, 'Your contact information has been changed');
    setHideModal();
    form.resetFields()
  }
  useEffect(() => {
    if (!show) {
      form.resetFields()
    }
  }, [form, show])
  return (
    <Form name="nest" form={form} onFinish={onFinish} datatest-id="ModalFormInfo">
      <Form.Item
        name="telephone"
        label="New Phone"
        rules={[
          {
            required: true,
            type: 'string',
            pattern: validTelephone,
            message: 'Enter correct Phone'
          },
          {
            min: 12,
            max: 12,
            message: 'Phone must be 12 characters',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
})

PhoneChange.propTypes = {
  show: PropTypes.bool,
  setHideModal: PropTypes.func,
  formId: PropTypes.string,
  updateCustomer: PropTypes.func
}

export default PhoneChange;
