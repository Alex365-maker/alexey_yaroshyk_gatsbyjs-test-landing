import styled from "styled-components";
import javaScript from "../../assets/images/TechnologiesWeUse/javaScript.svg";
import python from "../../assets/images/TechnologiesWeUse/python.svg";
import reactNative from "../../assets/images/TechnologiesWeUse/ReactNative.svg";
import typeScript from "../../assets/images/TechnologiesWeUse/typeScript.svg";

export const TechnologiesWeUseContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
height: 378px;
width: 870px;
margin: 218px 316px;
position: relative;
`;

export const TechnologiesWeUseFormText = styled.p`
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 120%;
text-align: center;
color: #1E242F;
`;

export const TechnologiesWeUseImage = styled.section`
display: flex;
position: relative;
height: 106px;
width: 106px;
`;

export const TechnologiesWeUseWrapper = styled.section`
display: flex;
justify-content: center;
width: 100%;
position: relative;
`;

export const TechnologiesWeUseTitle = styled.p`
  display: flex;
  position: relative;
  font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 41px;
text-align: center;
color: #1E242F;
`;

export const TechnologiesWeUseConteinerImgText = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 60px;
margin-right: 107px;
`;

export const TechnologiesWeUseImage1 = styled(typeScript)`
height: 106px;
weight: 106px;

margin-bottom: 20px
`;

export const TechnologiesWeUseImage2 = styled(reactNative)`
height: 106px;
weight: 106px;

margin-bottom: 20px
`;

export const TechnologiesWeUseImage3 = styled(python)`
height: 106px;
weight: 106px;

margin-bottom: 20px
`;

export const TechnologiesWeUseImage4 = styled(javaScript)`
height: 106px;
weight: 106px;

margin-bottom: 20px
`;