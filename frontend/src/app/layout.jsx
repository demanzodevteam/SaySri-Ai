"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
