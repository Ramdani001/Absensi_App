/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1pgcof8k",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  // remove
  collection.schema.removeField("1pgcof8k")

  return dao.saveCollection(collection)
})
