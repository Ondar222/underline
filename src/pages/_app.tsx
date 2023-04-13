import "@/styles/globals.css";
import "@/styles/footer.css";
import "@/styles/postcard.css";
import "@/styles/news.css";
import "@/styles/proect.css";
import "@/styles/ipcard.css";
import "@/styles/table.css";
import "@/styles/calculatorpage.css";
import "@/styles/pagefooter.css";
import type { AppProps } from "next/app";
import { Layout } from "antd";
import MainHeader from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHeader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
