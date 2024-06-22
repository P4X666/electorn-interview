import React from 'react';
import ResumeAction from '../../components/ResumeAction';
import ResumeContent from '../../components/ResumeContent';
import ResumeToolbar from '../../components/ResumeToolbar';
import './index.less';
import ReactDOMServer from 'react-dom/server';
import { exportStrToPDF } from '@src/common/utils/appPath';

const exportToStr=()=>{
  const htmlString = ReactDOMServer.renderToString(<ResumeContent />);
  console.log(htmlString);
  // FIX: 获取html中的style的dateset为emotion的内容，并放到html，用以解决html样式丢失的问题
  const styles = Array.from(document.querySelectorAll('style'))
  .filter(item=> item.getAttribute('data-emotion') === 'css')
  .map(item=> `${item.innerHTML}`)
  
  exportStrToPDF(`<style>${styles.join('')}</style>${htmlString}`)
}

function Resume() {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction exportHandle={exportToStr} />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;
