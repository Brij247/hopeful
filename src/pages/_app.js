import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import _App from "@/App.js";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <_App Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}
