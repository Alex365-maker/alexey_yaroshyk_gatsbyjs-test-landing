import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { useSpring, animated } from "react-spring";

import {
  WhatWeCanContainer,
  WhatWeCanTitle,
  WhatWeCanWithGreyBlock,
  WhatWeCanWitBlueBlock,
  WhatWeCanTextBox,
  WhatWeCanFlexBox,
  WhatWeCanStyleForTegP,
  WhatWeCanRedSqare,
  WhatWeCanBlackSqare,
  WhatWeCanYellowSqare,
  WhatWeCanPurpleSqare,
  WhatWeCanAbsoluteYellowSqare,
} from "./styled";


const WhatWeCan: React.FC<any> = () => {
  const {
    WhatWeCan: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        WhatWeCan: markdownRemark(frontmatter: {title: {eq: "What we can do for you"}}) {
          frontmatter {
            title
            secondTitle
            thirdBlock
            firstBlock
            secondBlock
          }
        }
      }
    `
  );
  const { title, secondTitle, thirdBlock, firstBlock, secondBlock } = frontmatter;
 
  
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const greyBlockAnimFirst = useSpring({
    width: scroll >= 1600 ? "38%" : "10%",
    config: { duration: 400 },
  });

  const textVisible = useSpring({
    opacity: scroll >= 1400 ? 1 : 0,
    config: { duration: 400 },
  });

  const textVisible2 = useSpring({
    opacity: scroll >= 2200 ? 1 : 0,
    right: "63%",
     minWidth: "427px",
      textAlign: "left",
    config: { duration: 400 },
  });

  const greyBlockAnimSecond = useSpring({
    width: scroll >= 1900 ? "70%" : "10%",
    config: { duration: 400 },
  });

  const greyBlockAnimThird = useSpring({
    height: "270px",
    width: scroll >= 2050 ? "20%" : "10%",
    config: { duration: 400 },
  });

  const BlockAnim = animated(WhatWeCanWithGreyBlock);
  const TextAnim = animated(WhatWeCanTitle);

  return (
    <WhatWeCanContainer>

      <TextAnim style={textVisible}>
        {title}
      </TextAnim>
      <WhatWeCanFlexBox>
      <BlockAnim style={greyBlockAnimFirst} />
        <WhatWeCanWitBlueBlock />
        <WhatWeCanTextBox>
          {firstBlock.map((currentValue: string) => {
            return (
              <WhatWeCanStyleForTegP>{currentValue}</WhatWeCanStyleForTegP>
            )
          })}
        </WhatWeCanTextBox>
        <WhatWeCanRedSqare />
      </WhatWeCanFlexBox>
      <WhatWeCanFlexBox>
        <BlockAnim style={greyBlockAnimSecond} />
        <WhatWeCanWitBlueBlock />
        <WhatWeCanTextBox>
          {secondBlock.map((currentValue: string) => {
            return (
              <WhatWeCanStyleForTegP>{currentValue}</WhatWeCanStyleForTegP>
            )
          })}
        </WhatWeCanTextBox>
      </WhatWeCanFlexBox>
      <TextAnim style={textVisible2} >
        {secondTitle}
      </TextAnim>
      <WhatWeCanFlexBox>
      <BlockAnim style={greyBlockAnimThird} />
        <WhatWeCanWitBlueBlock style={{ height: "270px" }} />
        <WhatWeCanTextBox style={{ width: "594px", height: "283px" }}>
          {thirdBlock.map((currentValue: string) => {
            return (
              <WhatWeCanStyleForTegP>{currentValue}</WhatWeCanStyleForTegP>
            )
          })}
        </WhatWeCanTextBox>
        <WhatWeCanBlackSqare>
          <WhatWeCanYellowSqare />
        </WhatWeCanBlackSqare>
      </WhatWeCanFlexBox>
      <WhatWeCanPurpleSqare />
      <WhatWeCanAbsoluteYellowSqare />
    </WhatWeCanContainer>
  );
};


export default WhatWeCan;
