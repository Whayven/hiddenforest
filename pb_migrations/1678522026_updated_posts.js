migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uj70ga71wu1zy63")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uj70ga71wu1zy63")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
