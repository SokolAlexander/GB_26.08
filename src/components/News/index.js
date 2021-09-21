import { useEffect } from "react";

import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticlesError, selectArticlesLoading, selectArticles } from "../../store/articles/selectors";

export const News = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const reload = () => {
    dispatch(getArticles());
    // setLoading(true);
    // fetch(PUBLIC_URL)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`error ${response.status}`);
    //     }

    //     return response.json();
    //   })
    //   .then((result) => {
    //     setArticles(result);
    //     setError('');
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setError(e.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h2>News</h2>
      {error ? (
        <>
          <h3>Error: {error}</h3>
          <button onClick={reload}>Refresh</button>
        </>
      ) : (
        articles.map((art) => (
          <article key={art.id}>
            <h4>{art.title}</h4>
          </article>
        ))
      )}
      {loading && <CircularProgress />}
    </div>
  );
};
