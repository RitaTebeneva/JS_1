var i = "";
for (var l = 0; l < 8; l++) {
    for (var w = 0; w < 8; w++) {
        if ((l + w) % 2 == 0)
            i += "#";
        else
            i += " ";
    }
    i += "\n";
}
console.log(i);/**
 * Created by margaritatebeneva on 06.02.17.
 */
