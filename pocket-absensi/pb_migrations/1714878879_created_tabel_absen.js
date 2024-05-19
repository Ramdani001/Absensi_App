/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1lpwotegh6um0nz",
    "created": "2024-05-05 03:14:39.852Z",
    "updated": "2024-05-05 03:14:39.852Z",
    "name": "tabel_absen",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezzjz06i",
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
      },
      {
        "system": false,
        "id": "e19ylcod",
        "name": "nama",
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
  const collection = dao.findCollectionByNameOrId("1lpwotegh6um0nz");

  return dao.deleteCollection(collection);
})
