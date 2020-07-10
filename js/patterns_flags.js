function stringMatch() {
    let str = "Welcome to the Mzamomtsha Primary School website.";

    let result = str.match(/Mzamomtsha/i);

    alert("The word to match is: " + result[0]);     
    alert("The max number of matched words displayed: " + result.length); 
    alert("Position of the matched word: " + result.index);
    alert("The source string: " + result.input);  
}

function stringReplace() {
    str = "Welcome to the";
    alert("Original string: " + str);
    alert("Original string + replaced string :" + str.replace(/the/, "$& Mzamomtsha Primary School Website"));
}