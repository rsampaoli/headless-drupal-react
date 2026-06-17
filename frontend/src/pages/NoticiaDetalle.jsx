import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getNoticiaById, getImageUrlFromIncluded } from "../api/drupal";

function NoticiaDetalle() {
  const { id } = useParams();

  const [noticia, setNoticia] = useState(null);
  const [included, setIncluded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getNoticiaById(id)
      .then((data) => {
        setNoticia(data.data);
        setIncluded(data.included || []);
      })
      .catch((error) => {
        console.error(error);
        setError("No se pudo cargar la noticia.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="page">Cargando noticia...</p>;
  }

  if (error) {
    return <p className="page">{error}</p>;
  }

  if (!noticia) {
    return <p className="page">La noticia no existe.</p>;
  }

  const imageUrl = getImageUrlFromIncluded(noticia, included);

  return (
    <main className="page">
      <Link to="/" className="back-link">
        ← Volver
      </Link>

      <article className="news-detail">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={noticia.attributes.title}
            className="news-detail-image"
          />
        )}

        <h1>{noticia.attributes.title}</h1>

        <div
          className="news-detail-body"
          dangerouslySetInnerHTML={{
            __html: noticia.attributes.body?.processed,
          }}
        />
      </article>
    </main>
  );
}

export default NoticiaDetalle;