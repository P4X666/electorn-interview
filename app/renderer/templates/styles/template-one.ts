import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 48px;
`;
export const Title = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Content = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0 16px 0 20px;
  padding-top: 2rem;
  font-size: 13px;
  & > li {
    padding-bottom: 12px;
  }
`;
export const AvatarBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const AvatarImgWrap = styled.div`
  position: relative;
  height: 100%;
  & > img {
    position: absolute;
    top: 14px;
    left: 55px;
    width: 112px;
    height: 152px;
    z-index: 1;
  }
`;

export const FullWidthWrap = styled.div`
  width: 100%;
`;
export const ProjectComponentWrap = styled.div`
  width: 100%;
  position: relative;
  & p {
    margin-bottom: 0px;
  }
`;
export const ProjectComponentLabel = styled.p`
  padding-bottom: 8px;
  color: #01426f;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;
export const ProjectComponentList = styled.ul`
  padding-top: 12px;
  padding-bottom: 32px;
  font-size: 13px;
`;
export const ProjectComponentItemBox = styled.ul`
  line-height: 20px;
`;
export const ProjectComponentItemContent = styled.li`
  list-style: outside;
  margin-left: 18px;
  color: #345975;
  & span {
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const ProjectComponentFlexWrap = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;
export const ProjectComponentLeftContent = styled.div`
  width: 25%;
  font-size: 13px;
  & > p {
    margin-bottom: 4px;
    height: 18px;
    line-height: 18px;
    color: #01426f;
    font-weight: bold;
  }
`;
export const ProjectComponentRightContent = styled.div`
  width: 75%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 13px;
  & > p {
    margin-bottom: 4px;
    height: 18px;
    line-height: 18px;
    color: #01426f;
    font-weight: bold;
  }
`;

export const A4BoxWrap = styled.div`
  width: 820px;
  height: 1160px;
  background-color: #fff;
`;
export const A4BoxContainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const A4BoxContainLeftWrap = styled.div`
  width: 27%;
`;
export const A4BoxContainLeftAvatarWrap = styled.div`
  width: 100%;
  height: 180px;
  text-align: center;
  background-color: #eee;
`;
export const A4BoxContainLeftFillColor = styled.div`
  width: 100%;
  height: 32px;
  background-color: rgb(250, 225, 4);
`;
export const A4BoxContainBaseDataWrap = styled.div`
  width: 100%;
  height: calc(100% - 180px - 32px);
  color: #fff;
  background-color: #01426f;
`;
export const A4BoxContainMainWrap = styled.div`
  width: 72%;
  padding: 0 20px;
  box-sizing: border-box;
`;
export const A4BoxContainListWrap = styled.div`
  margin-top: 32px;
`;