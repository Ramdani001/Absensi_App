/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  // remove
  collection.schema.removeField("hoks4mdx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dyangfh",
    "name": "uuid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("5dyangfh")

  return dao.saveCollection(collection)
})
