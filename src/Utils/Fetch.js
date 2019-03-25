export const getToken = async () => {
  let response = await fetch(
    'https://mpm-node-backend.herokuapp.com/dashboard/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  console.log('response', response);
  let data = await response.json();
  console.log('data', data);
};
