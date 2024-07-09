import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex by Uli y Barto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container text-center">
          <div className="row">
            <div className="col-2">
              <button className="button" onClick={() => setToggle(!toggle)}>
                Apretame!
              </button>
              <button className="button" onClick={() => router.push("/pagina2")}>
                Vamos a pagina 2!
              </button>
            </div>
            <div className="col-10">
              {toggle ? (
                <div className="row">
                  <div className="col">Column0</div>
                </div>
              ) : (
                <div className="row">
                  <div className="col">Column1</div>
                  <div className="col">Column2</div>
                  <div className="col">Column3</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
