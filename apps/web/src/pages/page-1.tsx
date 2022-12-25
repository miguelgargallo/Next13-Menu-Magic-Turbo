/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Menu1 } from "ui";
import { Menu2 } from "ui";
import { Menu3 } from "ui";
import { Menu4 } from "ui";
import { Menu5 } from "ui";
import { Menu6 } from "ui";
import { Menu7 } from "ui";
import { Footer } from "ui";

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Super Menu | Sushi JS</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <Menu7 />       
      <Footer />
    </div>
  );
}

