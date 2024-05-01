import React from 'react';

import './index.moule.less';


interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles = {} }: IProps) {
  return (
    <div style={styles} className="title">
      {text}
    </div>
  );
}

export default Title;
