import React, { useState } from 'react'
import {
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import { WeWorkWithWrapper, WeWorkWithConteiner, WeWorkWithButton} from './stylesGrid'
import {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  FormText,
  FormWeWork,
} from "./styled";

import { graphql, useStaticQuery } from "gatsby"


const WeWorkWith: React.FC<any> = () => {
  const {
    WeWorkWith: { frontmatter },
  } = useStaticQuery(
    graphql`
        query {
          WeWorkWith: markdownRemark(frontmatter: {type: {eq: "WeWorkWith"}}) {
            frontmatter {
              elements
              promo
            }
          }
      }`
  )

  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transApi = useSpringRef()

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

const Container = animated(WeWorkWithConteiner);

  return (
    <WeWorkWithWrapper>
      <Container
      
        style={{ ...rest, width: size, height: size, opacity: Number(open)}}
        
        onClick={() => set(open => { 
          return !open})}>

          <FormWeWork>{frontmatter.promo}</FormWeWork>

<div><Item1 />
  <FormText>{frontmatter.elements[0]}</FormText>
</div>

<div></div>

<div><Item2 />
  <FormText>{frontmatter.elements[1]}</FormText>
  </div>

<div><Item3 />
  <FormText>{frontmatter.elements[2]}</FormText>
  </div>

<div></div>

<div><Item4 />
  <FormText>{frontmatter.elements[3]}</FormText>
  </div>

<div></div>

<div><Item5 />
  <FormText>{frontmatter.elements[4]}</FormText>
  </div>

<div></div>

<div></div>

<div><Item6 />
  <FormText>{frontmatter.elements[5]}</FormText>
  </div>

<div></div>

<div><Item7 />
  <FormText>{frontmatter.elements[6]}</FormText>
  </div>

<div></div>

<div></div>

      </Container>
      
      <WeWorkWithButton onClick={() => set(open => { 
          console.log(open)
          return !open})} style={{position: "absolute", opacity: Number(!open)}}>{frontmatter.promo}</WeWorkWithButton>
    </WeWorkWithWrapper>
  )
};

export default WeWorkWith;
