/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3zvbv6qyj03stc2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3zvbv6qyj03stc2",
    "created": "2024-03-31 04:08:35.231Z",
    "updated": "2024-03-31 04:28:03.261Z",
    "name": "test",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hla82jgk",
        "name": "name",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT absensi.id, absensi.created, users.name FROM absensi JOIN users ON absensi.uuid = users.uuid"
    }
  });

  return Dao(db).saveCollection(collection);
})
