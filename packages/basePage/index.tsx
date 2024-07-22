import React from 'react';

export interface BasePageProps {
  title?: string;
  children?: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = React.memo((props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
      {props?.children}
    </div>
  );
});

BasePage.displayName = 'BasePage';
// BasePage.defaultProps = { title: '这是一个title' };
export default BasePage;
