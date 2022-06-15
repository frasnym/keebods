import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Menu: NextPage = () => {
  const router = useRouter();
  const paths = router.pathname.split("/");

  let title: string;
  if (paths.length > 1) {
    title =
      paths[1].charAt(0).toUpperCase() + paths[1].substring(1).toLowerCase();
  } else {
    title = "Home";
  }

  return (
    <Head>
      <title>{title} | Keebods</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Primary Meta Tags */}
      <meta name="title" content="Keebods - Mechanical Keyboard Database" />
      <meta
        name="description"
        content="Mechanical Keyboard database inspired by GSMArena"
      />
      <meta
        name="keywords"
        content="mechanical, keyboard, database, gsmarena"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://keebods.vercel.app/" />
      <meta
        property="og:title"
        content="Keebods - Mechanical Keyboard Database"
      />
      <meta
        property="og:description"
        content="Mechanical Keyboard database inspired by GSMArena"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/frasnym/keebods/master/public/keebods.png"
      />
      <meta property="og:locale" content="en_ID" />
      <meta property="og:locale:alternate" content="en_ID" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://keebods.vercel.app/" />
      <meta
        property="twitter:title"
        content="Keebods - Mechanical Keyboard Database"
      />
      <meta
        property="twitter:description"
        content="Mechanical Keyboard database inspired by GSMArena"
      />
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/frasnym/keebods/master/public/keebods.png"
      />
      <meta name="twitter:site" content="@frasnym" />
      <meta name="twitter:creator" content="@frasnym" />
    </Head>
  );
};

export default Menu;
