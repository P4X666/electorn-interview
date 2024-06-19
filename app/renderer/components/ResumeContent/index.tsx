import React from 'react';
import './index.less';
import ScrollBox from '@common/components/ScrollBox';
import * as UseTemplateList from '../../templates';

const HEADER_ACTION_HEIGHT = 92;

function ResumeContent() {
  const height = document.body.clientHeight;
  return <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
  <UseTemplateList.TemplateOne />
</ScrollBox>
}
export default ResumeContent;
