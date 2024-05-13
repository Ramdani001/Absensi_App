/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "31s5khhnb625l94",
    "created": "2024-03-31 04:01:37.503Z",
    "updated": "2024-03-31 04:01:37.503Z",
    "name": "absensi",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hoks4mdx",
        "name": "uuid",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94");

  return dao.deleteCollection(collection);
})
