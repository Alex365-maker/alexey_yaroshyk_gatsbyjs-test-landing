import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Head from "../components/Head";
import ErrorBoundry from "../components/ErrorBoundry";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Header from "../components/Header";
import "./normalize.scss";
import "./fonts.scss";

const Python: React.FC<any> = () => {
  const {
    python: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        python: markdownRemark(frontmatter: {type: {eq: "python"}}) {
            frontmatter {
              promo
              description
              buttonText
              to
            }
          }
      }
    `
  );
  return (
    <React.Fragment>
      <React.Fragment>
        <Head pageTitle="Type Script" pathname={location.pathname} />
        <ErrorBoundry>
          <DefaultLayout>
            <Header frontmatter={frontmatter} />
          </DefaultLayout>
        </ErrorBoundry>
      </React.Fragment>
    </React.Fragment>
  );
};

export default Python;