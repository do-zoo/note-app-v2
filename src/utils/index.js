const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export { showFormattedDate, isEmail };
