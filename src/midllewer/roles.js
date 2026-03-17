export function isAdmin(req, res, next) {
  try {
    const {user_type} = req.user;
    if (user_type !== "admin") return res.status(400).send("Not allow !");
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export function isModiin(req, res, next) {
  try {
    const {user_type} = req.user;
    if (user_type !== "admin" && user_type !== "modiin")
      return res.status(400).send("Not allow !");
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}

export function isAirForce(req, res, next) {
  try {
    const {user_type} = req.user;
    if (user_type !== "admin" && user_type !== "airForce")
      return res.status(400).send("Not allow !");
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
}
