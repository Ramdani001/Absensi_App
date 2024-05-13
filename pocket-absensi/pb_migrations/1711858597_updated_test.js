/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zvbv6qyj03stc2")

  collection.options = {
    "query": "SELECT absensi.id, absensi.created, users.name FROM absensi JOIN users ON absensi.uuid = users.uuid"
  }

  // remove
  collection.schema.removeField("c9lm1ksb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ss3eaou9",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zvbv6qyj03stc2")

  collection.options = {
    "query": "SELECT absensi.id, absensi.created, users.name FROM absensi JOIN users ON absensi.username = users.username"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9lm1ksb",
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
  }))

  // remove
  collection.schema.removeField("ss3eaou9")

  return dao.saveCollection(collection)
})
