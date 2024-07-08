/**
 * @description 技能清单Form
 */
import React from 'react';
import './index.less';
import MyModal from '@common/components/Modal';
import MyInput from '@common/components/Input';
import RecommendSkill, { IRecommendSkill } from '@common/constants/skill';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Skill({ onClose }: IProps) {
  const store = useResumeModel();
  const { skill, updateStore } = store;

  const submitHandle=()=>{
    onClose()
  }

  return (
    <MyModal.Dialog
      title="个人信息"
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
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            技 能 ：
          </div>
          <div styleName="right">
            <div styleName="action">
              {RecommendSkill.map((recommend: IRecommendSkill) => {
                return (
                  <div
                    styleName="label"
                    key={recommend.uid}
                    style={{
                      color: recommend?.styles?.font,
                      borderColor: recommend?.styles?.font,
                      backgroundColor: recommend?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '｜' : ''}${recommend.label}`;
                      updateStore('skill', value);
                    }}
                  >
                    {recommend.label}
                  </div>
                );
              })}
            </div>
            <MyInput
              type="textarea"
              onChange={(e) => {
                updateStore('skill', e.target.value);
              }}
              rows={5}
              value={skill}
              placeholder="例如 Vue、React"
              allowClear={true}
            />
            <div styleName="tips"> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Skill;
