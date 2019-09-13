exports = async function(payload,response) {
  var id = payload.query.id || '';
  var conn = context.services.get("mongodb-atlas").db("classshare").collection("classes");
  
  var r = {};
  var docs = await conn.aggregate([{$match: {  classid:id}}, {$project: {  tokens:1}}, {$unwind: {  path: "$tokens",  includeArrayIndex: 'index'}}, {$match: {  "tokens.used":false}}, {$sample: {  size: 1}}]).toArray();
  
  if(docs.length == 1) {
    if(docs[0].hasOwnProperty("tokens")) {
      //var kv = docs[0].tokens.key;
      r = JSON.stringify(docs[0]);
      await conn.updateOne({classid:id, "tokens.key":docs[0].tokens.key}, {$set: {"tokens.$":{key:docs[0].tokens.key, used:true}}});
    }
  }

  //console.log(r);
  response.setHeader("Content-Type", "application/json");
  response.setBody(r);

};