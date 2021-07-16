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
  const { id, password } = req.body;
  const checkUser = db.get("user").find({ id, password }).value();
  const filterPassword = Object.entries(checkUser)
    .map((data) => {
      const [key, value] = data;
      return [key, value];
    })
    .filter((data) => data[0] !== "password");
  const resultUserData = Object.fromEntries(filterPassword);

  if (resultUserData) {
    return res.send(resultUserData);
  } else {
    return res.status(500).json({
      status: "error",
    });
  }
});

// user 전체 데이터
server.get("/user", (_, res) => {
  const resultData = db.get("user").value();
  res.send(resultData);
});

// 특정 user 데이터
server.get("/user/:id", (req, res) => {
  const { id } = req.params.id;
  const resultData = db.get("user").find({ id }).value();
  res.send(resultData);
});

// user 추가
server.put("/user", (req, res) => {
  const { id, password, nickName, description, profileUrl } = req.body;
  db.get("user")
    .push({
      id,
      password,
      nickName,
      description,
      profileUrl,
    })
    .write();
  res.send(db.get("user"));
});

// user 제거
server.delete("/user/:userId", (req, res) => {
  const { id } = req.params.id;
  db.get("user").remove({ id }).write();
  res.send(db.get("user"));
});

// user 데이터 업데이트
server.patch("/user/:userId", (req, res) => {
  const { id, password, nickName, description, profileUrl } = req.body;
  db.get("user")
    .find({ id })
    .assign({
      id,
      password,
      nickName,
      description,
      profileUrl,
    })
    .value();
  res.send(db.get("user"));
});

server.use(router);

server.listen(3001, () => {
  console.log("Json Server is running");
});
