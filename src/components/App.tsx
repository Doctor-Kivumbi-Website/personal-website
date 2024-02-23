"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {

  return (
    <div>
      <div>
        <Header />
        <main className="p-4">{children}</main>               
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
