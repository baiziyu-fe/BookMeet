import React, { useEffect, useState } from 'react';
import AItem from '@/components/FormItem';
import AForm from '@/components/Form';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const DisabledForm = () => {
  const [disabled, setDisabled] = useState(false);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setDisabled(!disabled);
        }}>
        设置disabled： {`${disabled}`}
      </Button>
      <AForm
        name="validate_other"
        {...layout}
        onFinish={onFinish}
        disabled={disabled}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}>
        <AItem label="Plain Text">
          <span className="ant-form-text">China</span>
        </AItem>
        <AItem
          name="select"
          label="Select"
          hasFeedback
          rules={[{ required: true, message: 'Please select your country!' }]}>
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </AItem>

        <AItem
          name="select-multiple"
          label="Select[multiple]"
          rules={[
            { required: true, message: 'Please select your favourite colors!', type: 'array' },
          ]}>
          <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </AItem>

        <AItem label="InputNumber">
          <AItem name="input-number" noStyle>
            <InputNumber min={1} max={10} />
          </AItem>
          <span className="ant-form-text"> machines</span>
        </AItem>

        <AItem name="switch" label="Switch" valuePropName="checked">
          <Switch />
        </AItem>

        <AItem name="slider" label="Slider">
          <Slider
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
        </AItem>

        <AItem name="radio-group" label="Radio.Group">
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>
        </AItem>

        <AItem
          name="radio-button"
          label="Radio.Button"
          rules={[{ required: true, message: 'Please pick an item!' }]}>
          <Radio.Group>
            <Radio.Button value="a">item 1</Radio.Button>
            <Radio.Button value="b">item 2</Radio.Button>
            <Radio.Button value="c">item 3</Radio.Button>
          </Radio.Group>
        </AItem>

        <AItem name="checkbox-group" label="Checkbox.Group">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="F" style={{ lineHeight: '32px' }}>
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </AItem>

        <AItem name="rate" label="Rate">
          <Rate />
        </AItem>

        <AItem
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="longgggggggggggggggggggggggggggggggggg">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </AItem>

        <AItem label="Dragger">
          <AItem name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </AItem>
        </AItem>

        <AItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AItem>
      </AForm>
    </React.Fragment>
  );
};

export default DisabledForm;
