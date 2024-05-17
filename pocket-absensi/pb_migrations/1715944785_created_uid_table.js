/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "luqsxi5et9vw3f0",
    "created": "2024-05-17 11:19:45.175Z",
    "updated": "2024-05-17 11:19:45.175Z",
    "name": "uid_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m4zeqh6e",
        "name": "field",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "gfentgga",
        "name": "uuid",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("luqsxi5et9vw3f0");

  return dao.deleteCollection(collection);
})
