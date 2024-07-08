/**
 * @description 工作期望Form
 */
import React from 'react';
import './index.less';
import MyModal from '@common/components/Modal';
import MyInput from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Work({ onClose }: IProps) {
  const store = useResumeModel();
  const { work, updateStore } = store;

  const submitHandle=()=>{
    onClose()
  }

  return (
    <MyModal.Dialog
      title="工作期望"
      showFooter
      config={{
        cancelBtn: {
          callback: onClose,
        },
        submitBtn: {
          callback: submitHandle
        }
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateStore('work', { ...work, job: e.target.value });
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <MyInput
              onChange={(e) => {
                updateStore('work', { ...work, city: e.target.value });
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div styleName="tips"> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Work;
