import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  MobileAppConteiner,
  MobileAppBlackSqare,
  MobileAppYellowSqare,
  MobileAppWrapper,
  MobileAppTitle,
  MobileAppPhone,
  MobileAppAboutTeam,
  MobileAppPurpleBlock,
  MobileAppAppInfo,
  MobileAppQuotationMarks,
  MobileAppAboutApp,
  MobileAppAboutCEO,
  MobileAppRedSqare,
  MobileAppDounBlackSqare,
  MobileAppSmallBlackSqare,
} from "./styled";



const MobileApp: React.FC<any> = () => {
    const {
      MobileApp: { frontmatter },
    } = useStaticQuery(
      graphql`
        query {
          MobileApp: markdownRemark(frontmatter: {title: {eq: "Mobile App Development for Men's Health"}}) {
            frontmatter {
              CEOName
              aboutTeam
              aboutApp
              title
            }
          }
        }
      `
    );
  const { title, aboutTeam, aboutApp, CEOName } = frontmatter;
console.log(aboutTeam)
  return (
    <MobileAppConteiner>
      <MobileAppWrapper>
      <MobileAppBlackSqare>
          <MobileAppYellowSqare />
        </MobileAppBlackSqare>
        <MobileAppTitle>
          {title}
        </MobileAppTitle>
        </MobileAppWrapper>
        <MobileAppWrapper style={{height: "70px"}}>
          <MobileAppAboutTeam>
            {aboutTeam}
            </MobileAppAboutTeam>
        </MobileAppWrapper>
        <MobileAppWrapper style={{marginTop: "41px"}}>
          <MobileAppPurpleBlock>
          <MobileAppPhone />
          </MobileAppPurpleBlock>
          <MobileAppAppInfo>
            <MobileAppQuotationMarks />
            <MobileAppAboutApp>
              {aboutApp}
            </MobileAppAboutApp>
            <MobileAppAboutCEO>
              {CEOName}
              </MobileAppAboutCEO>
          </MobileAppAppInfo>
          <MobileAppRedSqare>
            <MobileAppDounBlackSqare />
          </MobileAppRedSqare>
        </MobileAppWrapper>
          <MobileAppSmallBlackSqare />
    </MobileAppConteiner>
  );
};

export default MobileApp;
