import { GetServerSideProps } from "next";
import {withSSRContext} from "aws-amplify"
import Link from "next/link";

type ISSRPageProps = {
  formattedDate: number;
};

const SSRPage = ({ formattedDate }: ISSRPageProps) => {
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <Link href="/staticExample"> View static page </Link>
      </p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
};

export default SSRPage;
