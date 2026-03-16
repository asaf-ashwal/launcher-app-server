import {getAllS, getlauncherS, createLauncherS} from "../service/launcherS.js";

export async function getAll(req, res) {
  try {
    const launchers = await getAllS();
    res.send(launchers);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export async function getlauncher(req, res) {
  try {
    const {id} = req.params;
    const launcher = await getlauncherS(id);
    res.send(launcher);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}
export async function createLauncher(req, res) {
  try {
    const {body} = req;
    if (!body) return res.status(400).send("body most resive !");
    const {city, rocketType, latitude, longitude, name} = body;
    if (!city || !rocketType || !latitude || !longitude || !name)
      return res.status(400).send("all filds most resive !");
    await createLauncherS({city, rocketType, latitude, longitude, name});
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

// export async function updateLauncher(req, res) {
//   try {
//     const {id} = req.params;
//     const launcher = await getlauncherS(id);
//     res.send(launcher);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error.message);
//   }
// }