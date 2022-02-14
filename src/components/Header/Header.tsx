import React from "react";
import { useSpring, animated } from "react-spring";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {
  HeaderContainer,
  HeaderImageContainer,
  HeaderTitleContainer,
  HeaderImageTopPart,
  HeaderImageBottomPart,
  HeaderImageTopLeft,
  HeaderImageTopRight,
  HeaderImageBottomLeft,
  HeaderImageBottomRight,
  HeaderDescImage,
  HeaderTitleWrapper,
  HeaderTitleBigSquare,
  HeaderTitleMediumSquare,
  HeaderSmallSquare,
  HeaderTitleSmallSquare,
  HeaderTitleSmallSquareBottom,
  HeaderDesc,
  HeaderButton,
  Title,
  LogoDashBouquet,
  HeaderCrossSVG,
  HeaderRecSVG,
} from "./styled";

const AnimatedTitle = animated(Title);

const Header: React.FC<any> = ({ frontmatter }) => {
  const { promo, description, buttonText, to } = frontmatter;

  const logoStyles = useSpring({
    from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 300 },
  });

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <animated.div style={logoStyles}>
          <LogoDashBouquet />
        </animated.div>
        <HeaderTitleWrapper>
          <HeaderTitleSmallSquare />
          <AnimatedTitle style={logoStyles}>{promo}</AnimatedTitle>
          <AniLink paintDrip to={to} duration={1} hex="#7a3bff">
            <HeaderButton>{buttonText}</HeaderButton>
          </AniLink>
          <HeaderTitleSmallSquareBottom />
        </HeaderTitleWrapper>
        <HeaderTitleBigSquare>
          <HeaderTitleMediumSquare />
          <HeaderSmallSquare />
        </HeaderTitleBigSquare>
      </HeaderTitleContainer>
      <HeaderImageContainer>
        <HeaderCrossSVG />
        <HeaderRecSVG />
        <HeaderDescImage />
        <HeaderImageTopPart>
          <HeaderImageTopLeft />
          <HeaderImageTopRight />
        </HeaderImageTopPart>
        <HeaderImageBottomPart>
          <HeaderImageBottomLeft />
          <HeaderImageBottomRight />
        </HeaderImageBottomPart>
      </HeaderImageContainer>
      <HeaderDesc>{description}</HeaderDesc>
    </HeaderContainer>
  );
};

export default Header;
