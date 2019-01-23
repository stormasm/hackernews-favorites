export async function handlePromise(data) {
  return Promise.resolve(data)
    .then(function(result) {
      return result;
    })
    .catch(error => {
      console.log(error);
    });
}
