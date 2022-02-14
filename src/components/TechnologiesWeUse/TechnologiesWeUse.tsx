import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";


import {
  TechnologiesWeUseContainer,
  TechnologiesWeUseTitle,
  TechnologiesWeUseWrapper,
  TechnologiesWeUseImage1,
  TechnologiesWeUseImage2,
  TechnologiesWeUseImage3,
  TechnologiesWeUseImage4,
  TechnologiesWeUseFormText,
  TechnologiesWeUseConteinerImgText,
} from "./styled";

const TechnologiesWeUse: React.FC<any> = () => {
  const {
    TechnologiesWeUse: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        TechnologiesWeUse: markdownRemark(frontmatter: {title: {eq: "Technologies we use"}}) {
          frontmatter {
            title
            languages
            toto
          }
        }
      }
    `
  );
  const { title, languages, toto} = frontmatter;
  return (
    <TechnologiesWeUseContainer>
      <TechnologiesWeUseWrapper>
        <TechnologiesWeUseTitle>
          {title}
        </TechnologiesWeUseTitle>
      </TechnologiesWeUseWrapper>
      <TechnologiesWeUseWrapper>

      <AniLink cover bg="#663399" to={toto[0]} duration={1}>
      <TechnologiesWeUseConteinerImgText>
      <TechnologiesWeUseImage1 />
      <TechnologiesWeUseFormText>
        {languages[0]}
      </TechnologiesWeUseFormText>
      </TechnologiesWeUseConteinerImgText>
      </AniLink>
      
       <AniLink paintDrip color="rebeccapurple" to={toto[1]} duration={1}>
      <TechnologiesWeUseConteinerImgText>
      <TechnologiesWeUseImage2 />
      <TechnologiesWeUseFormText>
        {languages[1]}
      </TechnologiesWeUseFormText>
      </TechnologiesWeUseConteinerImgText>
      </AniLink>
    

      <AniLink swipe top="entry" entryOffset={80} to={toto[2]} duration={1} hex="#7a3bff">
      <TechnologiesWeUseConteinerImgText>
      <TechnologiesWeUseImage3 />
      <TechnologiesWeUseFormText>
        {languages[2]}
      </TechnologiesWeUseFormText>
      </TechnologiesWeUseConteinerImgText>
      </AniLink>

      
      <AniLink swipe direction="up" to={toto[3]} duration={1} hex="#7a3bff">
      <TechnologiesWeUseConteinerImgText style={{marginRight:"0px"}}>
      <TechnologiesWeUseImage4 />
      <TechnologiesWeUseFormText>
        {languages[3]}
      </TechnologiesWeUseFormText>
      </TechnologiesWeUseConteinerImgText>
      </AniLink>

      </TechnologiesWeUseWrapper>
    </TechnologiesWeUseContainer>

  );
};

export default TechnologiesWeUse;

