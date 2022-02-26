import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ArticleCom from "../components/Article page/ArticleCom";
import useAxios from "../Hooks/useAxios";
import ArticlePlaceHolder from "../components/SkeletonPlaceHolder/ArticlePlaceHolder/ArticlePlaceHolder";

function Article() {
  const { id } = useParams();
  const { dataIn, loading, error } = useAxios(
    "http://mohammedhilal.pythonanywhere.com/api/articles/" + id
  );
  return (
    <div className="relative">
      <Navbar />
      <div>
        {loading && (<ArticlePlaceHolder />)}
        {error && <div>{error}</div>}
        {dataIn && (
          <ArticleCom
            title={dataIn.title}
            text={dataIn.content}
            date={dataIn.published_at}
            image={dataIn.images && dataIn.images[0]}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Article;
{
  /* <ArticleCom
                title={dataIn.title}
                text={dataIn.content}
                date={dataIn.published_at}
                image={dataIn.images && dataIn.images[0]}
              /> */
}
