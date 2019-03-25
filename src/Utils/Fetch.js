export const getToken = async () => {
  let response = await fetch(
    'https://mpm-node-backend.herokuapp.com/dashboard/callback',
    {
      method: 'GET'
    }
  );
  let data = await response.json();
  console.log('response', response);
  console.log('data', data);
};
