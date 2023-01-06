import Link from "next/link";

import { GetStaticProps } from "next";

type IStaticPageProps = {
    formattedDate: number;
};

const StaticPage = ({ formattedDate } : IStaticPageProps) => {
  return (
    <>
      <h1> Static Page </h1>
      <p> This page is static. It was built on {formattedDate}</p>
      <p>
        <Link href="/ssrExample"> View server-side rendered page </Link>
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const buildDate = Date.now();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}


export default StaticPage;