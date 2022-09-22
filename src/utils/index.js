const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const emailValidation = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return {
      isValid: false,
      message: "Email tidak valid",
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

const passwordValidation = (password, confirmPassword) => {
  if (password.length < 6) {
    return {
      isValid: false,
      message: "Password minimal 6 karakter",
    };
  }

  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: "Password tidak sama",
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

const nameValidation = (name) => {
  if (name.length < 3) {
    return {
      isValid: false,
      message: "Nama minimal 3 karakter",
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

export {
  showFormattedDate,
  emailValidation,
  passwordValidation,
  nameValidation,
};
