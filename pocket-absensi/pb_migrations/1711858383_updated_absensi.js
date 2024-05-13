/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  collection.indexes = [
    "CREATE INDEX `idx_8TVLP6y` ON `absensi` (`username`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31s5khhnb625l94")

  collection.indexes = []

  return dao.saveCollection(collection)
})
