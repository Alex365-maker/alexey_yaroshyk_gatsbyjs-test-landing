import styled from "styled-components";
import Cross from "../../assets/images/headerCross.svg";
import HeaderRec from "../../assets/images/headerRec.svg";
import Logo from "../../assets/images/logoDashBouquet.svg";

export const HeaderContainer = styled.header`
  display: flex;
  height: 100vh;
  min-height: 708px;
  position: relative;
`;
export const HeaderTitleContainer = styled.div`
  width: 50%;
  position: relative;
`;
export const HeaderTitleWrapper = styled.div`
  margin-right: 0;
  margin-left: auto;
  margin-top: 94px;
  width: 467px;
  position: relative;
  padding: 99px 0 85px 40px;
`;
export const HeaderTitleBigSquare = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 220px;
  height: 220px;
  background-color: #f03f5f;
`;
export const HeaderTitleMediumSquare = styled.div`
  position: absolute;
  right: -20px;
  top: -20px;
  width: 108px;
  height: 108px;
  background-color: #ffd363;
  z-index: 1;
`;
export const HeaderSmallSquare = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  background-color: #1e242f;
  z-index: 2;
`;
export const HeaderTitleSmallSquare = styled(HeaderSmallSquare)`
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
`;
export const HeaderTitleSmallSquareBottom = styled(HeaderSmallSquare)`
  position: absolute;
  top: auto;
  bottom: 0;
  left: auto;
  right: 172px;
`;

export const HeaderImageContainer = styled.div`
  position: relative;
  width: 50%;
`;
export const HeaderCrossSVG = styled(Cross)`
  left: 85px;
  position: absolute;
  top: calc(36% - 128px);
`;
export const HeaderRecSVG = styled(HeaderRec)`
  left: -85px;
  position: absolute;
  top: 7%;
`;
export const LogoDashBouquet = styled(Logo)`
  margin-top: 30px;
  margin-left: 81px;
`;
export const HeaderImageTopPart = styled.div`
  display: flex;
  height: 36%;
`;
export const HeaderImageTopLeft = styled.div`
  background-color: #f03f5f;
  width: 213px;
`;
export const HeaderImageTopRight = styled.div`
  background-color: #7a3bff;
  width: calc(100% - 213px);
`;
export const HeaderImageBottomPart = styled.div`
  display: flex;
  height: 64%;
`;
export const HeaderImageBottomLeft = styled.div`
  background-color: #7a3bff;
  width: 213px;
`;
export const HeaderImageBottomRight = styled.div`
  background-color: #1e242f;
  width: calc(100% - 213px);
`;
export const HeaderDescImage = styled.div`
  background-color: #ffd363;
  height: 109px;
  left: 44%;
  position: absolute;
  right: 0;
  top: 61%;
`;
export const HeaderDesc = styled.p`
  background-color: #ffffff;
  color: #535b66;
  font: 300 16px "Ubuntu", sans-serif;
  line-height: 150%;
  padding: 35px 88px 40px 40px;
  position: absolute;
  top: 67%;
  left: 57%;
  width: 613px;
  @media (max-width: 1440px) {
    left: auto;
    right: 0;
  }
`;
export const Title = styled.h1`
  color: #1e242f;
  font: 700 56px "Ubuntu", sans-serif;
  line-height: 110%;
  width: 428px;
  margin-bottom: 57px;
`;
export const HeaderButton = styled.div`
  display: block;
  padding: 12px 0;
  width: 208px;
  border: 2px solid #1e242f;
  font: 500 16px "Ubuntu", sans-serif;
  line-height: 18px;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
`;
