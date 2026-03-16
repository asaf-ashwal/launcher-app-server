import {getLauncherById, getLaunchers, create} from "../dal/launcherCrud.js";

export async function getAllS() {
  const lanunchers = await getLaunchers();
  return lanunchers;
}

export async function getlauncherS(id) {
  const lanuncher = await getLauncherById(id);
  return lanuncher;
}
export async function createLauncherS(launcher) {
  await create(launcher);
}