import styled from "styled-components";
import cross from "../../assets/images/footer/cross.svg"
export const FootWrapper = styled.section`
display: flex;
position: relative;
width: 100vw;
height: 540px;
`;

export const FooterBlackConteiner = styled.section`
display: flex;
justify-content: center;
position: relative;
width: 60%;
background: #1E242F;
`;

export const FooterTextBox = styled.p`
display: flex;
position: relative;
heigth: 43px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`;

export const FootFormConteiner = styled.section`
display: flex;
position: relative;
flex-direction: column;
margin-top: 94px;
width: 430px;
height: 344px;
`;

export const FooterFormNameEmail = styled.section`
display: flex;
position: relative;
margin-top: 62px;
height: 40px;
`;



export const FootFormName = styled.input`
type: text;
width: 190px;
opacity: 0.5;
border: 1px solid #FFFFFF;
box-sizing: borkder-box;
font-family: Ubuntu;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
background: #1E242F;
`;

export const FooterPurpleRedConteiner = styled.section`
display: flex;
position: relative;
flex-direction: column;
width: 40%;
`;

export const FootPurpleConteiner = styled.section`
display: flex;
position: relative;
height: 50%;
background: #7A3BFF;
`;

export const FootRedConteiner = styled.section`
display: flex;
position: relative;
height: 50%;
background: #F03F5F;
`;

export const FootSentButton = styled.button`
display: flex;
position: relative;
type: submit;
align-items: center;
justify-content: center;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 212.44px;
height: 39.34px;
margin-top: 20px;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
background: #1E242F;
`;

export const FooterImageCross = styled(cross)`
display: flex;
position: absolute;
left: 840px;
top: 187px;
`;