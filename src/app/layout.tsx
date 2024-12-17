import "~/styles/globals.css";
import { Poppins } from "@/fonts";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
        <AntdRegistry>
          <TRPCReactProvider>
            <Navbar />
            <div className="bg-red-500 pt-16">{children}</div>
          </TRPCReactProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
