/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { WebSite, Organization, BreadcrumbList } from "schema-dts";
import toTitleCase from "../toTitleCase";

export interface GenerateSchemaProps {
  pathname: string;
  pageTitle: string;
}

interface BreadcrumbItem {
  title: string;
  url: string;
  position: number;
}

const generateSchema = ({ pathname }: GenerateSchemaProps) => {
  const siteUrl = "http://localhost:8000/";
  const salesTelephone = "+375 29 6721404";
  const siteTitle = "GatsbyJS: test landing";

  const ourOrganisation: Organization = {
    "@type": "Organization",
    url: siteUrl!,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: salesTelephone!,
      },
    ],
  };

  const outWebsite: WebSite = {
    "@type": "WebSite",
    url: siteUrl!,
    name: siteTitle!,
  };

  const pathnameParts: string[] =
    pathname.substring(1).length > 0 ? pathname.substring(1).split("/") : [];

  const breadcrumbItems: BreadcrumbItem[] = pathnameParts.map((part, i) => ({
    position: i + 1,
    title: toTitleCase(part.replace(/-/g, " ")),
    url: `${siteUrl!}/${pathnameParts[i]}`,
  }));

  const breadcrumb: BreadcrumbList | null =
    breadcrumbItems.length > 0
      ? {
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map(({ position, title, url }) => ({
            "@type": "ListItem",
            position,
            name: title,
            item: url,
          })),
        }
      : null;

  return [ourOrganisation, outWebsite, ...(breadcrumb ? [breadcrumb] : [])];
};

export default generateSchema;
