import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ArticleCom from "../components/Article page/ArticleCom";
import useAxios from "../Hooks/useAxios";

function Article() {
  const { id } = useParams();
  const { dataIn, loading, error } = useAxios(
    "http://localhost:8000/articles/" + id
  );
  return (
    <div>
      <Navbar />
      <div>
        {loading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {dataIn && <ArticleCom id={id} text={dataIn.text} title={dataIn.title} date={dataIn.date} />}
      </div>

      <Footer />
    </div>
  );
}
export default Article;
