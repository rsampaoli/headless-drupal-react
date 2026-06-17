const DRUPAL_BASE_URL = import.meta.env.VITE_DRUPAL_BASE_URL;

export async function getNoticias() {
  const response = await fetch(
    `${DRUPAL_BASE_URL}/jsonapi/node/noticia?include=field_imagen&sort=-created`
  );

  if (!response.ok) {
    throw new Error("Error al obtener noticias desde Drupal");
  }

  return await response.json();
}

export async function getNoticiaById(id) {
  const response = await fetch(
    `${DRUPAL_BASE_URL}/jsonapi/node/noticia/${id}?include=field_imagen`
  );

  if (!response.ok) {
    throw new Error("Error al obtener la noticia desde Drupal");
  }

  return await response.json();
}

export function getImageUrlFromIncluded(resource, included = []) {
  const imageRelationship = resource.relationships?.field_imagen?.data;

  if (!imageRelationship) {
    return null;
  }

  const imageFile = included.find(
    (item) =>
      item.type === imageRelationship.type &&
      item.id === imageRelationship.id
  );

  if (!imageFile) {
    return null;
  }

  return `${DRUPAL_BASE_URL}${imageFile.attributes.uri.url}`;
}