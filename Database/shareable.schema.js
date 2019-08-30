db.runCommand( {
    collMod: "shareable",
    validator: {
        $jsonSchema: {
          properties: {
            classid: {
              bsonType: 'string'
            },
            entryid: {
              bsonType: 'int'
            }
          },
          required: [
            'classid',
            'entryid',
            'value'
          ]
        }
      },
    validationLevel: "strict"
 } );