GLOBALSTITCHAPP = "class-share-yvroi";
GLOBALDBNAME = "classshare";

function logout() {
    client.auth.isLoggedIn = false;
    client.auth.logout().then(() => {
        // So logout of Google explicitly by going to https://accounts.google.com/logout
        // NOTE: this will log you out of all the Google accounts that you are signed into
        // window.location.replace("https://accounts.google.com/logout");
        window.location = "/index.html";
    });
}

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeRandomID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function getHashbang() {
    var url = window.self.location.href;
    var kvp = url.split("#!");
    if(kvp.length > 1) {
        return kvp[1];
    } else {
        return false;
    }
 }