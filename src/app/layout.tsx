import "~/styles/globals.css";
import { Poppins } from "@/fonts";
import { ClashDisplay } from "@/fonts";
import { type Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";
import Footer from "./_components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const title = "Naija Party Fix";
const description = "Find your next event vendors.";

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: [{ rel: "icon", url: "/n.png" }],
  openGraph: {
    title: title,
    description: description,
    locale: "en-US",
    type: "website",
    url: "https://naijapartyfix.com.ng",
    siteName: "NaijaPartyFix",
    images: [
      {
        url: "https://naijapartyfix.com.ng/n.png",
        width: "600",
        height: "600",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://naijapartyfix.com.ng/n.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        className={`${Poppins.className}${ClashDisplay.className} h-screen w-full font-clashDisplay`}
      >
        <AppRouterCacheProvider>
          <Theme accentColor="brown" radius="full">
            <TRPCReactProvider>
              <Navbar />
              <div className="">{children}</div>
              <Footer />
            </TRPCReactProvider>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
