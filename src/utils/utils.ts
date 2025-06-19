const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/copy-crypgo/"
    : "";
};

export { getImagePrefix };
 
