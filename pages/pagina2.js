import Head from "next/head";
import React from "react";

export default function Home() {

  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <Head>
        <title>Pagina2</title>
        <meta name="description" content="Pokedex by Uli y Barto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        hola
      </main>
    </>
  );
}
