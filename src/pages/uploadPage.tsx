import Head from "next/head";

import { Storage } from "@aws-amplify/storage";

const pageTitle = "Upload Page";

import { FileUploader } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'
export const DefaultFileUploaderExample = () => {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      accessLevel="public"
    />
  );
};


const uploadFileToS3Example = async () => {
  await Storage.put("test.txt", "Hello");
};

const UploadPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title> Upload page </title>
      </Head>
      <section>
        <p> Upload a file below </p>
        <button type="button" onClick={uploadFileToS3Example}>
          Click here to upload a text file to s3
        </button>
      </section>
    </div>
  );
};




export default UploadPage;