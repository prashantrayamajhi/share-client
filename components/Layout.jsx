import Head from "next/head";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: "Share",
  description:
    "Share and find out about businesses. Get investors and partners for your business ideas.",
  keys: "business, business ideas,nepali startups",
};

export default Layout;
