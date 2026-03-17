import {sign} from "../midllewer/auth.js";
import {
  createUserS,
  updateUserS,
  deleteUserS,
  getAllUsersS,
  getUserByIDS,
} from "../service/usersS.js";

export async function getUserByID(req, res) {
  try {
    const {userId} = req.params;
    const user = await getUserByIDS(userId);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function createUser(req, res) {
  try {
    const {body} = req;
    if (!body) return res.status(400).send("missing body !");
    const {username, password, email, user_type} = body;
    if (!username || !password || !email || !user_type)
      return res.status(400).send("missing filds !");
    await createUserS({username, password, email, user_type});
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function updateUser(req, res) {
  try {
    const {id} = req.params;
    const {body} = req;
    if (!body) return res.status(400).send("missing body !");
    const {username, password, email, user_type} = body;
    if (!username || !password || !email || !user_type)
      return res.status(400).send("missing filds !");
    await updateUserS({username, password, email, user_type}, id);
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function deleteUser(req, res) {
  try {
    const {id} = req.params;
    await deleteUserS(id);
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function login(req, res) {
  try {
    const {body} = req;
    if (!body) return res.status(400).send("missing body !");
    const {username, password} = body;
    if (!username || !password) return res.status(400).send("missing filds !");
    const token = await sign({username, password});
    res.send(token);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const {user} = req;
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function getAllUser(req, res) {
  try {
    const users = await getAllUsersS();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}
