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

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

export function deleteAccessToken() {
  return localStorage.removeItem("accessToken");
}

export const getInitialName = (name) => {
  if (name) {
    const nameArray = name.split(" ");
    if (nameArray.length === 2) {
      return `${nameArray[0][0]}${nameArray[1][0]}`.toUpperCase();
    }
    if (nameArray.length > 2) {
      return `${nameArray[0][0]}${nameArray[1][0]}${nameArray[2][0]}`.toUpperCase();
    }

    return name[0][0].toUpperCase();
  }
  return "";
};
