import styled from "styled-components";
import ArrowBack from "../../assets/images/arrowBack.svg";
import ArrowNext from "../../assets/images/arrowNext.svg";
export const OurTeamContainer = styled.div`
  min-height: 495px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 250px;
  margin-top: 230px;
  `;
export const OurTeamTitle = styled.h2`
  margin-right: 58px;
  margin-left: auto;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #1E242F;
  `;
export const LeftSide = styled.div`
  padding: 75px 0 73px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 213px);
  `;
export const ArrowButtons = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #1E242F;
  justify-content: space-between;
  align-items:center;
  padding: 0 67px 0 calc(100% - 360px);
  `;
export const RightSide = styled.div`
  padding-bottom: 70px;
  display: flex;
  align-items: flex-end;
  width: calc(50% + 107px);
  position: relative;
  `;
export const ArrowBackBtn = styled(ArrowBack)`
  `;
export const ArrowNextBtn = styled(ArrowNext)`
  `;
export const YellowBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 107px;
  width: 100%;
  height: 307px;
  background-color: #FFD363;
  z-index: -1
  `;
export const Wrapper = styled.div`
  overflow: hidden;
  height: 424px;
  `;
export const SlideItem = styled.div`
  margin-right: 36px;
  flex-direction: column;
  `;

  export const SlideBoxText = styled.section`
  display: flex;
  position relative;
  width: 225px;
  height: 75px;
  flex-direction: column;
  justify-content: center;
  `;

  export const SlideText1 = styled.p`
  display: flex;
  position relative;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #1E242F;
  align-self: center;
  `;

  export const SlideText2 = styled.p`
  display: flex;
  position relative;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #535B66;
  align-self: center;
  `;

  export const SlideItemPlusImg = styled.section`
  display: flex;
  position relative;
  flex-dirextion: column;
  `;

export const Btn = styled.button`
  outline: none;
  border: 0;
  background: transparent
  `;