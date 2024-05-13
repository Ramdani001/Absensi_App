/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zvbv6qyj03stc2")

  collection.options = {
    "query": "SELECT a.id, a.created, b.name FROM absensi a  inner JOIN users b ON a.username = b.username"
  }

  // remove
  collection.schema.removeField("xlcbksdu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bi1peyyb",
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
    "query": "SELECT a.id, a.created, b.name FROM absensi a JOIN users b ON a.username = b.username"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlcbksdu",
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
  collection.schema.removeField("bi1peyyb")

  return dao.saveCollection(collection)
})
