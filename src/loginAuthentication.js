const authentication = {
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true;
  },
  logOut() {
    this.isLoggedIn = false;
  },
};
export default authentication;
