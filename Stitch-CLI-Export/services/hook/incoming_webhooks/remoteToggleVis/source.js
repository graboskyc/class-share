// This function is the webhook's request handler.
exports = function(payload, response) {
    const {classid} = payload.query;
    
    var conn = context.services.get("mongodb-atlas").db("classshare").collection("classes");
    var pipeline = [
      {$match: { classid:classid}}, 
      {$unwind: {path: "$entries"}}, 
      {$sort: { "entries.entryid": 1}},
      {$match:{"entries.visible":false}},
      {$limit: 1}
    ];
    conn.aggregate(pipeline).toArray().then(docs => {
       conn.updateOne({"classid":classid, "entries.entryid":parseInt(docs[0].entries.entryid)}, {$set: {"entries.$.visible":true}});
       return docs[0].entries.entryid;
    }
    )
    
};