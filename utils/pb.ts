import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

const PB_URL = import.meta.env.PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";

const pb = new PocketBase(PB_URL) as TypedPocketBase;

console.log("🔗 PocketBase URL:", PB_URL);

export default pb;
export { PB_URL as POCKETBASE_URL };
