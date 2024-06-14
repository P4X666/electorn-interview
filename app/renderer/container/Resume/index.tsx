import React from 'react';
import ResumeAction from '../../components/ResumeAction';
import ResumeContent from '../../components/ResumeContent';
import ResumeToolbar from '../../components/ResumeToolbar';
import './index.less';

function Resume() {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
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
