import {
  addRxPlugin,
  createRxDatabase,
  removeRxDatabase,
  isRxDatabase,
} from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBUpdatePlugin } from "rxdb/plugins/update";
import { RxDBJsonDumpPlugin } from "rxdb/plugins/json-dump";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { getRxStorageLoki } from "rxdb/plugins/storage-lokijs";
import { getRxStorageMemory } from "rxdb/plugins/storage-memory";

const RxDBCustom = {
  addRxPlugin,
  createRxDB,
  removeRxDatabase,
  isRxDatabase,
  RxDBDevModePlugin,
  RxDBUpdatePlugin,
  RxDBJsonDumpPlugin,
};

async function createRxDB(type = "dexie", args = {}) {
  let storageInstance;
  switch (type) {
    case "dexie":
      storageInstance = getRxStorageDexie();
      break;
    case "lokijs":
      storageInstance = getRxStorageLoki();
      break;
    case "memory":
      storageInstance = getRxStorageMemory();
      break;
    default:
      break;
  }

  const db = await createRxDatabase({
    storage: storageInstance,
    ...args,
  });
  return db;
}

window.RxDBCustom = RxDBCustom;
