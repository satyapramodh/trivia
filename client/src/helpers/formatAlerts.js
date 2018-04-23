const success = (response) => {
  return response.data;
}

const error = (err) => {
  return err.response.data.errors[0].detail;
}

export default {
  success,
  error
};
