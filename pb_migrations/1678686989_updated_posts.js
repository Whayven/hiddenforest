migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uj70ga71wu1zy63")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "21231npc",
    "name": "uploader",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uj70ga71wu1zy63")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "21231npc",
    "name": "uploader",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
