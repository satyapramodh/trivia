const success = (response) => {
  return response.data;
}

const error = (response) => {
  return response.data.errors[0].detail;
}


export default {
  success,
  error
};
