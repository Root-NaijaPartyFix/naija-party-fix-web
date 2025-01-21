import "~/styles/globals.css";
import { Poppins } from "@/fonts";
import { type Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Soiree",
  description: "Find your next event vendors.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <body className={`${Poppins.className}`}>
        <Theme accentColor="brown" radius="full">
          <TRPCReactProvider>
            <Navbar />
            <div className="">{children}</div>
            <Footer />
          </TRPCReactProvider>
        </Theme>
      </body>
    </html>
  );
}
