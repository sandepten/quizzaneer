import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizzaneer</title>
        <meta
          name="description"
          content="Quizzaneer is a app for generating and playing quizzes with AI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="p-5 text-2xl">Quizzaneer</h1>
      </main>
    </>
  );
}
