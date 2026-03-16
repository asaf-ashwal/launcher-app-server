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
  return data;
}

export async function create(lanuncher) {
  const {data, error} = await lanunchers.insert(lanuncher);
  if (error) throw new Error(error.message);
  return data;
}
