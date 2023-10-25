export let localService = {
  set: (user) => {
    return localStorage.setItem("USER", JSON.stringify(user));
  },
  get: () => {
    return JSON.parse(localStorage.getItem("USER"));
  },
  remove: () => {
    localStorage.clear();
    window.location.reload();
  },
};
