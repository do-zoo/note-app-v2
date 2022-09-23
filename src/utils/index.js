const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (locale === "id") {
    return new Date(date).toLocaleDateString("id-ID", options);
  }
  return new Date(date).toLocaleDateString("en-US", options);
};

const emailValidation = (email) => {
  if (email.length === 0) {
    return {
      isValid: false,
      message: {
        id: "Email tidak boleh kosong",
        en: "Email cannot be empty",
      },
    };
  }

  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return {
      isValid: false,
      message: {
        id: "Email tidak valid",
        en: "Email is not valid",
      },
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

const passwordValidation = (password) => {
  if (password.length === 0) {
    return {
      isValid: false,
      message: {
        id: "Password tidak boleh kosong",
        en: "Password cannot be empty",
      },
    };
  }
  if (password.length < 6) {
    return {
      isValid: false,
      message: {
        id: "Password minimal 6 karakter",
        en: "Password must be at least 6 characters",
      },
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

const nameValidation = (name) => {
  if (name.length === 0) {
    return {
      isValid: false,
      message: {
        id: "Nama tidak boleh kosong",
        en: "Name cannot be empty",
      },
    };
  }
  if (name.length < 3) {
    return {
      isValid: false,
      message: {
        id: "Nama minimal 3 karakter",
        en: "Name must be at least 3 characters",
      },
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
