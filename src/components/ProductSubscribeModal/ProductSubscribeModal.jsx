import React from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Button,
  Form,
  Input
} from 'antd';
import { showModal, hideModal } from '../../store/subscriceOnProductModal/middleware'
import { selectIsOpenModal, selectCustomerEmail } from '../../store/subscriceOnProductModal/reducer'

const mapStateToProps = (state) => ({
  isOpen: selectIsOpenModal(state),
  customerEmail: selectCustomerEmail(state)
})

const ProductSubscribeModal = connect(mapStateToProps, {showModal, hideModal})((
  {
    isOpen,
    showModal,
    hideModal,
    customerEmail,
  }
) => {
  const [form] = Form.useForm()

  const onSubmit = (values) => {
    hideModal()
    form.resetFields()
    console.log(values)
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Modal
        title="Notify on product availability"
        visible={isOpen}
        okText="Subscribe"
        onCancel={hideModal}
        okButtonProps={{htmlType: 'submit', form: 'subscribeOnProductsForm'}}
      >
        <Form name="subscribeOnProductsForm" onFinish={onSubmit} form={form}>
          <Form.Item
            label="Email"
            name="email"
            initialValue={customerEmail || null}
            rules={[
              {
                required: true,
                message: 'Please input your email.',
              },
              {
                type: 'email',
                message: 'Entered data is not an email.',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
})
export default ProductSubscribeModal