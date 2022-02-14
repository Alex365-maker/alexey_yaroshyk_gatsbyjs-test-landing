import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Head from "../components/Head";
import ErrorBoundry from "../components/ErrorBoundry";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Header from "../components/Header";
import "./normalize.scss";
import "./fonts.scss";

const NotFound: React.FC<any> = ({ location }) => {
  const {
    notfound: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        notfound: markdownRemark(frontmatter: { type: { eq: "notfound" } }) {
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
        <Head pageTitle="Not Found" pathname={location.pathname} />
        <ErrorBoundry>
          <DefaultLayout>
            <Header frontmatter={frontmatter} />
          </DefaultLayout>
        </ErrorBoundry>
      </React.Fragment>
    </React.Fragment>
  );
};

export default NotFound;
