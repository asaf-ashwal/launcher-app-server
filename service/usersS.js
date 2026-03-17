import {
  getUserByIdD,
  createUserD,
  updateUserD,
  deleteUserD,
  updateUserLoginD,
  getAllUsersD,
} from "../dal/usersD.js";

export async function createUserS(user) {
  await createUserD(user);
}

export async function getAllUsersS() {
  const users = await getAllUsersD();
  return users;
}

export async function updateUserS(user, id) {
  const dbUser = await getUserByIdD(id);
  if (!dbUser) throw new Error("User not exist !");
  const res = await updateUserD(user, id);
  return res;
}
export async function deleteUserS(id) {
  const user = await getUserByIdD(id);
  if (!user) throw new Error("User not exist !");
  await deleteUserD(id);
}

export async function UpdateLastLoginS(id) {
  const date = new Date();
  await updateUserLoginD(date, id);
}

