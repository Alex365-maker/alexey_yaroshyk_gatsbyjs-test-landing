import styled from "styled-components";
import medDevice from "../../assets/images/ImgPart1/medDevice.svg"
import medLab from "../../assets/images/ImgPart1/medLab.svg"
import medPractices from "../../assets/images/ImgPart1/medPractices.svg"
import pharmacy from "../../assets/images/ImgPart1/pharmacy.svg"
import pharmOrganization from "../../assets/images/ImgPart1/pharmOrganization.svg"
import providers from "../../assets/images/ImgPart1/providers.svg"
import startups from "../../assets/images/ImgPart1/startups.svg"

export const FormWeWork = styled.span`
grid-column: 1 / span 3;
  grid-row: 1;
  text-align: center;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 41px;
`;

export const FormText = styled.p`
margin-top: 20px;

font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 120%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 210px 210px 210px;
  grid-template-columns: 213px 213px 213px 213px 213px 213px;
  grid-gap: 2vw;
`
  ;

export const Item1 = styled(medPractices)`
height: 106px;
weight: 106px;
`;

export const Item2 = styled(medDevice)`
height: 106px;
weight: 106px;
`;
export const Item3 = styled(medLab)`
height: 106px;
weight: 106px;
`;

export const Item4 = styled(pharmacy)`
height: 106px;
weight: 106px;
`;

export const Item5 = styled(providers)`
height: 106px;
weight: 106px;
`;
export const Item6 = styled(startups)`
height: 106px;
weight: 106px;
`;
export const Item7 = styled(pharmOrganization)`
height: 106px;
weight: 106px;
`;
