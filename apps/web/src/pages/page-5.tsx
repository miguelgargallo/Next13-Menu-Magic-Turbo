/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu1, Menu2, Menu3 } from "ui";

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Super Menu | Sushi JS</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      </div>
    </div>
  );
}
