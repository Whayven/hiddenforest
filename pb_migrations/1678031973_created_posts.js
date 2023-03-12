migrate((db) => {
  const collection = new Collection({
    "id": "uj70ga71wu1zy63",
    "created": "2023-03-05 15:59:33.172Z",
    "updated": "2023-03-05 15:59:33.172Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rbgld2xa",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/vnd.mozilla.apng",
            "image/jpeg",
            "image/webp",
            "image/png"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "ynazzvgx",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 255,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("uj70ga71wu1zy63");

  return dao.deleteCollection(collection);
})
