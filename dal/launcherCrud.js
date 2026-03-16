import {dbConnection} from "../dbConnection.js";

const lanunchers = dbConnection.from("Launcher");

export async function getLaunchers() {
  const {data, error} = await lanunchers.select();
  if (error) throw new Error(error.message);
  return data;
}

export async function getLauncherById(id) {
  const {data, error} = await lanunchers.select().eq("id", id);
  if (error) throw new Error(error.message);
  return data[0];
}

export async function create(lanuncher) {
  const {data, error} = await lanunchers.insert(lanuncher);
  if (error) throw new Error(error.message);
  return data;
}
export async function update(lanuncher, id) {
  const {data, error} = await lanunchers.update(lanuncher).eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteL(id) {
  const {data, error} = await lanunchers.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
