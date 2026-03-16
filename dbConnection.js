import {createClient} from "@supabase/supabase-js";
import {config} from "dotenv";

config();

function connect() {
  const connect = createClient(process.env.DB_URL, process.env.API_KEY);
  console.log("DB connect");

  return connect;
}

export const dbConnection = connect();
