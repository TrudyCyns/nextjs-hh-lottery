import Head from "next/head";
// import ManualHeader from "../../components/ManualHeader";
import Header from "../../components/Header";
import LotteryEntrance from "../../components/LotteryEntrance";

export default function Home() {
  return (
    <>
      <Head>
        <title>DL0tte</title>
        <meta name="description" content="Smart Contract Lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Create a Header connect button */}
      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />
    </>
  );
}
