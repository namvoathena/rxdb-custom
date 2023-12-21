import * as RxDBCore from "rxdb";

import * as RxDBPluginsDevMode from "rxdb/plugins/dev-mode";
import * as RxDBPluginsUpdate from "rxdb/plugins/update";
import * as RxDBPluginsJsonDump from "rxdb/plugins/json-dump";
import * as RxDBPluginsMigration from "rxdb/plugins/migration";
import * as RxDBPluginsCleanup from "rxdb/plugins/cleanup";
import * as RxDBPluginsBackup from "rxdb/plugins/backup";
import * as RxDBPluginsLocalDocuments from "rxdb/plugins/local-documents";
import * as RxDBPluginsLeaderElection from "rxdb/plugins/leader-election";
import * as RxDBPluginsAttachmentsCompression from "rxdb/plugins/attachments-compression";
import * as RxDBPluginsEncryptionCryptoJS from "rxdb/plugins/encryption-crypto-js";
import * as RxDBPluginsKeyCompression from "rxdb/plugins/key-compression";
import * as RxDBPluginsCRDT from "rxdb/plugins/crdt";
import * as RxDBPluginsValidateAJV from "rxdb/plugins/validate-ajv";
import * as RxDBPluginsValidateZSchema from "rxdb/plugins/validate-z-schema";
import * as RxDBPluginsValidateIsMyJsonValid from "rxdb/plugins/validate-is-my-json-valid";
import * as RxDBPluginsQueryBuilder from "rxdb/plugins/query-builder";
import * as RxDBPluginsStorageDexie from "rxdb/plugins/storage-dexie";
import * as RxDBPluginsStorageLokijs from "rxdb/plugins/storage-lokijs";
import * as RxDBPluginsStorageMemory from "rxdb/plugins/storage-memory";
import * as RxDBPluginsStorageRemote from "rxdb/plugins/storage-remote";

const LokiIncrementalIndexedDBAdapter = require("lokijs/src/incremental-indexeddb-adapter");

/**  TODO: Resolve errors from import and export  */
// import * as RxDBPluginsReplicationGraphQL from "rxdb/plugins/replication-graphql";
// import * as RxDBPluginsReplicationWebSocket from "rxdb/plugins/replication-websocket";
// import * as RxDBPluginsReplicationCouchDB from "rxdb/plugins/replication-couchdb";
// import * as RxDBPluginsReplicationFirestore from 'rxdb/plugins/replication-firestore';
// import * as RxDBPluginsReplicationP2P from "rxdb/plugins/replication-p2p";
// import * as RxDBPluginsReplicationNats from "rxdb/plugins/replication-nats";
// import * as RXDBPluginsStorageFoundationDB from "rxdb/plugins/storage-foundationdb";
// import * as RXDBPluginsStorageMongoDB from 'rxdb/plugins/storage-mongodb';

const RxDBLib = {
  RxDBCore,
  RxDBPluginsDevMode,
  RxDBPluginsUpdate,
  RxDBPluginsJsonDump,
  RxDBPluginsMigration,
  RxDBPluginsCleanup,
  RxDBPluginsBackup,
  RxDBPluginsLocalDocuments,
  RxDBPluginsLeaderElection,
  RxDBPluginsAttachmentsCompression,
  RxDBPluginsEncryptionCryptoJS,
  RxDBPluginsKeyCompression,
  RxDBPluginsCRDT,
  RxDBPluginsValidateAJV,
  RxDBPluginsValidateZSchema,
  RxDBPluginsValidateIsMyJsonValid,
  RxDBPluginsStorageDexie,
  RxDBPluginsStorageLokijs,
  RxDBPluginsStorageMemory,
  RxDBPluginsStorageRemote,
  RxDBPluginsQueryBuilder,
  LokiIncrementalIndexedDBAdapter,
};

window.RxDBLib = RxDBLib;
