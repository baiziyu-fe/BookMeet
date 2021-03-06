import React, { useMemo, useContext } from 'react';
import { Form, FormItemProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { GlobalFormStore } from '../Form';
import R from 'ramda';
interface IProps extends FormItemProps {
  disabled?: boolean | NamePath[];
}

const addPropToChild = (children: any, options: any) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      ...options,
    });
  });
};

function AItem(props: IProps) {
  const { disabled, rules, label, name, required, children, ...reset } = props;
  const FormStore = useContext(GlobalFormStore);

  /**
   * 绑定默认验证规则
   */
  const defaultRequireRules = useMemo(() => {
    if (required) return rules;
    const labelString = typeof label === 'string' ? label : '本项';
    return [{ required: true, message: `${labelString}不能为空` }, ...(rules || [])];
  }, [label, name, required]);

  /**
   * 为具有name属性的item添加全局属性
   */
  const formItems = useMemo(() => {
    if (
      (name && (Array.isArray(name) || typeof name === 'string') && name.length) ||
      typeof name === 'number' ||
      // @ts-ignore
      (children && children.props && children.props.htmlType === 'submit')
    ) {
      const itemDisabled = disabled === undefined ? FormStore.disabled : disabled;
      return addPropToChild(children, {
        disabled: itemDisabled,
      });
    }
    return children;
  }, [FormStore.disabled, name]);

  return (
    <Form.Item {...reset} label={label} name={name} required={required} rules={defaultRequireRules}>
      {formItems}
    </Form.Item>
  );
}

export default React.memo(AItem);
