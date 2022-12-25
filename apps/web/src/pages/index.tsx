/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Button } from "ui";
export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div>
        <Button />
      </div>
    </div>
  );
}
