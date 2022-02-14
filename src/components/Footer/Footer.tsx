import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { 
  FootWrapper,
  FooterBlackConteiner,
  FootFormConteiner,
  FooterTextBox,
  FooterFormNameEmail,
  FootFormName,
  FooterPurpleRedConteiner,
  FootPurpleConteiner,
  FootRedConteiner,
  FootSentButton,
  FooterImageCross,
} from "./styled";


const Footer: React.FC<any> = () => {
  const {
    Footer: { frontmatter },
  } = useStaticQuery(
    graphql`
        query {
          Footer: markdownRemark(frontmatter: {type: {eq: "Footer"}}) {
            frontmatter {
             title
            }
          }
      }`
  )



  return (
   <FootWrapper>
     <FooterBlackConteiner>
       <FootFormConteiner>
         <FooterTextBox>
           {frontmatter.title}
         </FooterTextBox>
         <FooterFormNameEmail>
           <FootFormName placeholder = "name"/>
           <FootFormName placeholder = "email" type = "email" style={{marginLeft: "20px"}}/>
         </FooterFormNameEmail>
         <FootFormName placeholder = "message" style={{height: "100px", marginTop: "20px", width: "400px"}} />
         <FootSentButton>Sent</FootSentButton>
         </FootFormConteiner>
     </FooterBlackConteiner>

     <FooterPurpleRedConteiner>
       <FootPurpleConteiner />
       <FootRedConteiner />
     </FooterPurpleRedConteiner>
     <FooterImageCross />
   </FootWrapper>
  );
};

export default Footer;
