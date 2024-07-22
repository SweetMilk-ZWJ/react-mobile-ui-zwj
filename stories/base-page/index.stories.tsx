/*
 * @Description:
 * @Author: zhangWenJian
 * @Date: 2024-07-22 10:19:24
 * @LastEditTime: 2024-07-22 11:06:14
 * @LastEditors: zhangWenJian
 */
import React from 'react';

import { Meta } from '@storybook/react';
import BasePage from '@/basePage';
import Space from '@/space';

import DemoWrap from '../../demos/demo-wrap';
import DemoBlock from '../../demos/demo-block';

const BasePageStory: Meta = {
  title: '通用/basePage',
  component: BasePage,
};
export const Basic = () => {
  return (
    <DemoWrap>
      <DemoBlock title="填充模式">
        <Space>
          <BasePage title="标题1">1</BasePage>
          <BasePage title="YTH">12</BasePage>
        </Space>
      </DemoBlock>

      <DemoBlock title="填充模式">
        <Space>
          <BasePage title="SWORKS">911</BasePage>
        </Space>
      </DemoBlock>
    </DemoWrap>
  );
};

Basic.storyName = '基本用法';
export default BasePageStory;
