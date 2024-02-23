import type { Metadata } from "next";
import "../styles/style.scss";
import App from "@/components/App";

export const metadata: Metadata = {
  title: "Doctor Kivumbi",
  description: "Doctor Kivumbi is a famous trusted spiritual healer in Uganda, who combines the potency of natural herbs and the mystical power of spells to help you achieve the life you desire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <App>{children}</App>
      </body>
    </html>
  );
}
