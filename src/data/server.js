const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const adapter = new FileSync("./src/data/db.json");
const db = low(adapter);

server.use(middlewares);
server.use(bodyParser.json());

// user 로그인
server.post("/login", (req, res) => {
  const userData = req.body.userData;
  const userList = db
    .get("user")
    .find({ id: userData.id, password: userData.password })
    .value();
  if (userList) {
    res.send("통과 토큰발급");
  } else {
    res.send("불통 메인페이지로 이동");
  }
});

// user 전체 데이터
server.get("/user", (req, res) => {
  const resultData = db.get("user").value();
  res.send(resultData);
});

// 특정 user 데이터
server.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  const resultData = db.get("user").find({ id: userId }).value();
  res.send(resultData);
});

// user 추가
server.put("/user", (req, res) => {
  const userData = req.body.userData;
  db.get("user")
    .push({
      id: userData.id,
      password: userData.password,
      nickName: userData.nickName,
      description: userData.description,
      profileUrl: userData.profileUrl,
    })
    .write();
  res.send(db.get("user"));
});

// user 제거
server.delete("/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  db.get("user").remove({ id: userId }).write();
  res.send(db.get("user"));
});

// user 데이터 업데이트
server.patch("/user/:userId", (req, res) => {
  const userData = req.body.userData;
  db.get("user")
    .find({ id: userData.id })
    .assign({
      id: userData.id,
      password: userData.password,
      nickName: userData.nickName,
      description: userData.description,
      profileUrl: userData.profileUrl,
    })
    .value();
  res.send(db.get("user"));
});

server.use(router);

server.listen(3001, () => {
  console.log("Json Server is running");
});
