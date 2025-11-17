/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file3411203195",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "couleurs",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // remove field
  collection.fields.removeById("file3411203195")

  return app.save(collection)
})
