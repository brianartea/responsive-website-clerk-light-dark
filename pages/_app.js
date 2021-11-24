import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useRouter } from "next/router";

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ClerkProvider
        frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
        navigate={(to) => router.push(to)}
      >
        {publicPages.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </ThemeProvider>
  );
}

export default MyApp;
