export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type HeadQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "siteTitle" | "siteTitleShort" | "siteDescription" | "siteUrl"
        > & {
            social: Maybe<
              { __typename?: "SiteSiteMetadataSocial" } & Pick<
                SiteSiteMetadataSocial,
                "twitter" | "fbAppId"
              >
            >;
          }
      >;
    }
  >;
};
