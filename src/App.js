import { Header, Layout } from "./layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout Page={<Component {...pageProps} />} />
    </>
  );
}
