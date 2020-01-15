export const getUserData = url => {
  return fetch(url)
  .catch(error => {
    throw new Error(`Error with fetching data ${error}`)
  });
};
