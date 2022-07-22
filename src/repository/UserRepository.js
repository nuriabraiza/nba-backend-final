class UserRepository {
  registerGet(req, res) {
    res.render("register");
  }

  loginGet(req, res) {
    res.render("login");
  }

  chatGet(req, res) {
    res.render("chat");
  }

  mainGet(req, res) {
    res.render("main");
  }

  logout(req, res) {
    req.logout();
    res.redirect("/user/login");
  }
}

module.exports = UserRepository;
