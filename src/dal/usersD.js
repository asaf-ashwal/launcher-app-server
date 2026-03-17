import {dbConnection} from "../dbConnection.js";

const users = dbConnection.from("users");

export async function getUserByIdD(id) {
  const {data, error} = await users.select().eq("id", id);
  if (error) throw new Error(error.message);
  return data[0];
}

export async function getAllUsersD() {
  const {data, error} = await users.select();
  if (error) throw new Error(error.message);
  return data;
}

export async function GetUserByUserNAndPass({username, password}) {
  const {data, error} = await users
    .select()
    .eq("username", username)
    .eq("password", password);
  if (error) throw new Error(error.message);
  return data[0];
}

export async function createUserD(user) {
  const {data, error} = await users.insert(user);
  if (error) throw new Error(error.message);
  return data;
}
export async function updateUserD(user, id) {
  const {data, error} = await users.update(user).eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
export async function updateUserLoginD(date, id) {
  const {data, error} = await users.update({last_login: date}).eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
export async function deleteUserD(id) {
  const {data, error} = await users.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
