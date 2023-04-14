import "@/styles/globals.scss";
import "@/styles/footer.scss";
import "@/styles/postcard.css";
import "@/styles/news.css";
import "@/styles/proect.css";
import "@/styles/ipcard.css";
import "@/styles/calculatorpage.css";
import "@/styles/pagefooter.css";
import "@/styles/price.css";
import  "@/styles/header.css";
import type { AppProps } from "next/app";
import { Layout } from "antd";
import MainHeader from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHeader />
      <Layout className="page">
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
