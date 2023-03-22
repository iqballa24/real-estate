export const usePropertyFormat = (property) => {
  const address = property.location.map((item) => item.name).join(', ');
  const coverPhoto = property.coverPhoto.url;
  const propertyType = `${property.category[0].name} ${property.category[1].name}`;
  const price = property.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  const title = property.title;
  const rooms = property.rooms;
  const baths = property.baths;
  const purpose = property.purpose;
  const sqSize = property.area.toFixed(2);
  const externalID = property.externalID;

  const photos = property.photos?.map((photo) => photo.url);
  const description = property.description;
  const coverVideoUrl = property.coverVideo.url;
  const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11);
  const panorama = property.panoramas?.length ? property.panoramas[0].url : [];

  const amenities = property.amenities?.flatMap(({ amenities }) =>
    amenities?.map((item) => item.text)
  );

  const furshied = property.furnishingStatus;

  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furshied,
  };
};
