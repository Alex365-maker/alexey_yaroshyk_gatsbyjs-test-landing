import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useState } from 'react';
import { number } from "prop-types";
import {
  OurTeamContainer,
  LeftSide,
  OurTeamTitle,
  ArrowButtons,
  RightSide,
  ArrowBackBtn,
  ArrowNextBtn,
  YellowBox,
  Wrapper,
  SlideItem,
  Btn,
  SlideBoxText,
  SlideItemPlusImg,
  SlideText1,
  SlideText2,
} from "./styled";
const OurTeam: React.FC<any> = () => {
  const slider = React.useRef(null);
  const {
    slider: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        slider: markdownRemark(frontmatter: { type: { eq: "slider" } }) {
          frontmatter {
            promo
            members {
              id
              image_alt
              name
              position
              image_on {
                childImageSharp {
                  fixed(height: 350, width: 225) {
                    height
                    width
                    src
                  }
                }
              }
              image {
                childImageSharp {
                  fixed(width: 225, height: 300) {
                    height
                    width
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const { promo, members } = frontmatter;

  interface IState {
    activeSlide: number;
  }

  const [state, setState] = useState<IState>({
    activeSlide: 0
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setState({ activeSlide: next }),
    afterChange: (current: number) => setState({ activeSlide: current })
  };
  interface ICard {
    name: string;
    position: string;
    image: any;
    image_on: any;
  };

  let i = 1;
  return (
    <OurTeamContainer>
      <LeftSide>
        <OurTeamTitle>{promo}</OurTeamTitle>
        <ArrowButtons>
          <Btn onClick={() => slider?.current?.slickPrev()}><ArrowBackBtn /></Btn>
          <Btn onClick={() => slider?.current?.slickNext()}><ArrowNextBtn /></Btn>
        </ArrowButtons>
      </LeftSide>
      <RightSide>
        <Wrapper>

          <Slider ref={slider} {...settings}>
            {members && members.map((member: ICard,index: number) => {
              return (
                <SlideItem key={member.name}>
                  {
                    state.activeSlide === index ?
                      <>
                     
                      <SlideBoxText>
                       <SlideText1>{member.name}</SlideText1>
                       <SlideText2>{member.position}</SlideText2>
                       </SlideBoxText>
                        <Img fixed={member.image_on.childImageSharp.fixed} />
                        
                      </>
                      :
                      <Img style={{marginTop: "124px"}} fixed={member.image.childImageSharp.fixed} />
                  }
                </SlideItem>
              )
            })}
          </Slider>
        </Wrapper>
        <YellowBox />
      </RightSide>
    </OurTeamContainer>
  );
};
export default OurTeam;