import React from 'react';
import lessClass from './index.module.less';

console.log(lessClass, );


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
