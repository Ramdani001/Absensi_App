/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n7rv0jf2zpctnjg",
    "created": "2024-05-18 14:55:13.550Z",
    "updated": "2024-05-18 14:55:13.550Z",
    "name": "master_card",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0o4qlhen",
        "name": "uid",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n7rv0jf2zpctnjg");

  return dao.deleteCollection(collection);
})
