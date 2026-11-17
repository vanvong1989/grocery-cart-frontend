import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["300","400","500","600","700"]
})
export const metadata: Metadata = {
  title: "Grocery Cart",
  description: "Vong Nguyen's Grocery Cart",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html> 
  );
}
