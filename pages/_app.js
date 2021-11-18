import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// import {
//   ClerkProvider,
//   RedirectToSignIn,
//   SignedIn,
//   SignedOut,
// } from "@clerk/clerk-react";
//import { useRouter } from "next/router";

// const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
