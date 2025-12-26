import { Layout } from "./stylesContainer,js";

function Container({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

export default Container;
