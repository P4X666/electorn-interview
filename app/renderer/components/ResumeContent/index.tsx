import React, { useEffect, useState } from 'react';
import './index.less';
import ScrollBox from '@common/components/ScrollBox';
import * as UseTemplateList from '../../templates';

const HEADER_ACTION_HEIGHT = 92;

function ResumeContent() {
  const [maxHeight, setMaxHeight] = useState(600)
  useEffect(()=>{
    const height = document.body.clientHeight;
    setMaxHeight(height-HEADER_ACTION_HEIGHT)
  }, [])
  
  return <ScrollBox maxHeight={maxHeight}>
  <UseTemplateList.TemplateOne />
</ScrollBox>
}
export default ResumeContent;
