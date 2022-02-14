import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Head from "../components/Head";
import ErrorBoundry from "../components/ErrorBoundry";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Header from "../components/Header";
import "./normalize.scss";
import "./fonts.scss";

const ReactN: React.FC<any> = () => {
  const {
    react: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        react: markdownRemark(frontmatter: { type: { eq: "react" } }) {
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
        <Head pageTitle="React" pathname={location.pathname} />
        <ErrorBoundry>
          <DefaultLayout>
            <Header frontmatter={frontmatter} />
          </DefaultLayout>
        </ErrorBoundry>
      </React.Fragment>
    </React.Fragment>
  );
};

export default ReactN;
