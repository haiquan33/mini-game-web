const ids="1027,1285,536,287,32,1317,557,310,311,1086,1346,1347,324,1349,71,1353,1354,846,1358,847,592,337,1361,594,1362,851,1367,1371,1372,1374,1379,1381,1386,1389,1390,1392,885,1400,377,378,379,1404,1405,1151,1408,133,658,406,1174,155,160,421,684,685,686,1210,1211,1220,1234,3072,256,512,768,1024,1280"
const PageType="games";
const LoadedGamesNum=0;
const skip =30;
let url = "https://freegamemini.com/ajax_loadmoregames.php?LoadedGamesNum=" + LoadedGamesNum + "&num=" + skip + "&ids=" + ids + "&pagetype=" + PageType;
$.ajax({
    url: url,
    success: function(t) {
            if(t == 'NoData')  {
                loading = true;
            }else{
                console.log(t)
            }
          LoadedGamesNum = LoadedGamesNum + skip;
    }
});