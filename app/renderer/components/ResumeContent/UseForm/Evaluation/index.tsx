/**
 * @description 个人评价Form
 */
import React from 'react';
import './index.less';
import MyModal from '@common/components/Modal';
import MyInput from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}

function Evaluation({ onClose }: IProps) {
  const store = useResumeModel();
  const { evaluation, updateStore } = store;

  return (
    <MyModal.Dialog
      title="个人评价"
      showFooter
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>评 价 ：
          </div>
          <div styleName="right">
            <MyInput
              type="textarea"
              onChange={(e) => {
                updateStore('evaluation', e.target.value);
              }}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear={true}
            />
            <div styleName="tips"> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Evaluation;
