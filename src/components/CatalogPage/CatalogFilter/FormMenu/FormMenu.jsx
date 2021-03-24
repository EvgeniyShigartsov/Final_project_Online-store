import {
  Checkbox, Form, InputNumber, Menu
} from 'antd'
import React from 'react'
import { brands, categories } from '../../filterConfig'
import { StyledCheckbox } from '../StylesCatalogfilter'

export const FormMenu = () => (
  <Menu defaultOpenKeys={['сategories']} mode="inline">
    <Menu.SubMenu key="сategories" title="Сategories">
      <Form.Item name="categories" noStyle>
        <Checkbox.Group>
          {categories.map(({value, title}) => (
            <StyledCheckbox
              key={value}
              value={value}
            >
              {title}
            </StyledCheckbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="brands" title="Brand">
      <Form.Item name="brand" noStyle>
        <Checkbox.Group>
          {brands.map(({value, title}) => (
            <StyledCheckbox
              key={value}
              value={value}
            >
              {title}
            </StyledCheckbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="price" title="Price">
      <div style={{padding: '20px 20px 0'}}>
        <Form.Item name="minPrice" label="From">
          <InputNumber style={{width: '100%'}} min={0} />
        </Form.Item>
        <Form.Item name="maxPrice" label="To">
          <InputNumber style={{width: '100%'}} min={0} />
        </Form.Item>
      </div>
    </Menu.SubMenu>
  </Menu>
)

export default FormMenu