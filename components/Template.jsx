import Head from "next/head"
import Nav from "./Nav"

export default function Template({ title, children }) {
  return (
    <>
      <Head>
        {" "}
        <title>NIGGAPONG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="wrapper">{children}</div>
    </>
  )
}
