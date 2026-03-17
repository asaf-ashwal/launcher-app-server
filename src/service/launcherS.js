import {
  getLauncherById,
  getLaunchers,
  create,
  deleteL,
  update,
  updateDestroyedLauncherD,
} from "../dal/launcherCrud.js";

export async function updateDestroyedLauncherS(id) {
   await updateDestroyedLauncherD(id);
  
}

export async function getAllS() {
  const lanunchers = await getLaunchers();
  return lanunchers;
}


export async function getlauncherS(id) {
  const lanuncher = await getLauncherById(id);
  return lanuncher;
}
export async function createLauncherS(launcher) {
  await create({...launcher, destroyed:false});
}

export async function deleteLauncherS(id) {
  const lanuncher = await getLauncherById(id);
  if (!lanuncher) throw new Error ('launcher not exist !')
   await deleteL(id);
  return lanuncher;
}

export async function updateLauncherS(laucher,id) {
  const lanunchers = await update(laucher,id);
  return lanunchers;
}