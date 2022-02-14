import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  SaveTimeMoneyTextConteiner,
} from "./styled";



const SaveTimeMoney: React.FC<any> = () => {
  const {
    SaveTimeMoney: { frontmatter },
  } = useStaticQuery(
    graphql`
        query {
          SaveTimeMoney: markdownRemark(frontmatter: {title: {eq: "SaveTimeMoney"}}) {
            frontmatter {
              info
            }
          }
      }`
  )

  return (
    <SaveTimeMoneyTextConteiner>
      {frontmatter.info}
    </SaveTimeMoneyTextConteiner>
  );
};

export default SaveTimeMoney;