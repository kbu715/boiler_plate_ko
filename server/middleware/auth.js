const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리를 하는곳

  //  클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;
  // 토큰을 복호화 한후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token; //index.js에 app.get('/api/users/auth') 여기서 쓸수 있게 하려고
    req.user = user;
    next(); //next는 하는 이유는 미드웨어에서 계속 갈수 있게
  });
  //유저가 있으면 인증 okay

  //유저가 있으면 인증 no !
};

module.exports = { auth };