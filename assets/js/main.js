function checkVowels(){
    var text = document.getElementById('inputText').value;
    var vowelCount = 0;
    var consonantCount = 0;

    text = text.toLowerCase();

    for(var i = 0; i < text.length; i++){
        var char = text.charAt(i);

        if(isVowel(char)){
            vowelCount++;
        }

        if(isConsonant(char)){
            consonantCount++;
        }
    }

    var result = document.getElementById('result')
    result.textContent = "Total Number Of Vowels: " + vowelCount;

    var result2 = document.getElementById('result2')
    result2.textContent = "Total Number Of Consonant: " + consonantCount;
}

function isVowel(char){
    var vowels = ["a", "e", "i", "o","u"];
    return vowels.includes(char);
}

function isConsonant(char){
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    return consonants.includes(char);
}