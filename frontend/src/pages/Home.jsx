import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNoticias, getImageUrlFromIncluded } from "../api/drupal";

function Home() {
  const [noticias, setNoticias] = useState([]);
  const [included, setIncluded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getNoticias()
      .then((data) => {
        setNoticias(data.data || []);
        setIncluded(data.included || []);
      })
      .catch((error) => {
        console.error(error);
        setError("No se pudieron cargar las noticias.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="page">Cargando noticias...</p>;
  }

  if (error) {
    return <p className="page">{error}</p>;
  }

  return (
    <main className="page">
      <section className="hero">
        <h1>Drupal 10 Headless + React</h1>
        <p>
          Este frontend está hecho en React y consume contenido desde Drupal
          usando JSON:API.
        </p>
      </section>

      <section className="news-grid">
        {noticias.map((noticia) => {
          const imageUrl = getImageUrlFromIncluded(noticia, included);

          return (
            <article className="news-card" key={noticia.id}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={noticia.attributes.title}
                  className="news-image"
                />
              )}

              <div className="news-content">
                <h2>{noticia.attributes.title}</h2>

                <div
                  className="news-body"
                  dangerouslySetInnerHTML={{
                    __html: noticia.attributes.body?.summary || "",
                  }}
                />

                <Link to={`/noticias/${noticia.id}`} className="read-more">
                  Leer noticia
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;