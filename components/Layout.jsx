import Head from "next/head";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
