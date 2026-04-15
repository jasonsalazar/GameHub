import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "./Layout";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Layout>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occured"}
      </Text>
    </Layout>
  );
};

export default ErrorPage;
