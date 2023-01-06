import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import Link from "next/link";

type ISSRPageProps = {
  formattedDate?: number;
  authenticated: boolean;
  username?: string;
};

const SSRPage = ({ formattedDate, authenticated, username }: ISSRPageProps) => {
  if (!authenticated) {
    return <h1> Not authorised to view this page</h1>;
  }
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
        Your username is {username}
      </p>
      <p>
        <Link href="/staticExample"> View static page </Link>
      </p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );

  const { Auth } = withSSRContext(context);

  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
        authenticated: true,
        username: user.username,
        formattedDate
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        authenticated: false,
      },
    };
  }
};

export default SSRPage;
