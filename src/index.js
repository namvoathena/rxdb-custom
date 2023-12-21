const enableDevMode = async () => {
  return await window.RxDBLib.RxDBCore.addRxPlugin(
    window.RxDBLib.RxDBPluginsDevMode.RxDBDevModePlugin
  );
};

const createSampleDatabase = async () => {
  return await window.RxDBLib.RxDBCore.createRxDatabase({
    name: "todos",
    storage: window.RxDBLib.RxDBPluginsStorageLokijs.getRxStorageLoki({
      adapter: new window.RxDBLib.LokiIncrementalIndexedDBAdapter(),
    }),
  });
};

const createSampleCollection = async (db) => {
  const collectionSchema = {
    version: 0,
    primaryKey: "id",
    type: "object",
    properties: {
      id: {
        type: "string",
        maxLength: 100,
      },
      name: {
        type: "string",
      },
      done: {
        type: "boolean",
      },
      timestamp: {
        type: "date-time",
      },
    },
    required: ["id", "name", "done", "timestamp"],
  };
  const collectionName = "todos";
  return await db
    .addCollections({
      [collectionName]: {
        schema: collectionSchema,
      },
    })
    .then((collections) => collections[collectionName]);
};

const createSampleDocument = async (collection) => {
  const document = {
    id: "todo1",
    name: "Learn RxDB",
    done: false,
    timestamp: new Date().toISOString(),
  };
  return await collection.insert(document);
};

const updateSampleDocument = async (document) => {
  return await document.modify((docData) => {
    docData.done = true;
    return docData;
  });
};

const findSampleDocuments = async (collection) => {
  const foundDocuments = await collection
    .find({
      selector: {
        done: {
          $eq: true,
        },
      },
    })
    .exec();
  return foundDocuments;
};

const main = async () => {
  console.log(window);

  const db = await createSampleDatabase();
  const collection = await createSampleCollection(db);
  const document = await createSampleDocument(collection);
  await updateSampleDocument(document);
  const foundDocuments = await findSampleDocuments(collection);
  console.log(foundDocuments);
};

main();
