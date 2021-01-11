const injectStrapiMediaRoot = (contentString) => {
  return contentString.replace(
    "/uploads/",
    process.env.VUE_APP_STRAPI_API_URL + "/uploads/"
  );
};

export { injectStrapiMediaRoot };
