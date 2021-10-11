import jwt_decode from "jwt-decode";

const checkJwtToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      if (token === "undefined") {
        logout();
        return (window.location.href = "/");
      }
      const decoded = jwt_decode(token);
      const current_time = new Date().getTime() / 1000;
      if (current_time > decoded.exp) {
        logout();
      }
      return token;
    } else {
      logout();
    }
  }
};

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    // window.location.href = "/";
  }
};

export { checkJwtToken, logout };
