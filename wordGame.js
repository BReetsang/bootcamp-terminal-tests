export default function longestWord(longWord){ 
    // Step 1. Split the string into an array of strings
    var longWordSplit = longWord.split(' ');
     // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWordInString = 0;
    var result='';
    // Step 3. Create the FOR loop
    for(var i = 0; i < longWordSplit.length; i++){
      if(longWordSplit[i].length >= longestWordInString){ // If strSplit[i].length is greater than the word it is compared with...
      longestWordInString = longWordSplit[i].length; // ...then longestWord takes this new value
      result=longWordSplit[i];
       }
    }
   
    //Step 4. Return the longest word
    console.log(longWord);
    return result; 
  }
  console.log(longestWord('The dog jumped over the shipyarddddd fence'));
  
  function shortestWord(shortWord){ 
    // Step 1. Split the string into an array of strings
    var shortWordSplit = shortWord.split(' ');
     // Step 2. Initiate a variable that will hold the length of the shortest word
     var result=shortWordSplit[0];
    // Step 3. Create the FOR loop
    for(var i = 0; i < shortWordSplit.length; i++){
      if(shortWordSplit[i].length <= result.length){ // If strSplit[i].length is lesser than or equal the word it is compared with...
      //...then shortestWord takes this new value
      result=shortWordSplit[i];
       }
    }
   
    //Step 4. Return the shortest word
    console.log(shortWord);
    return result; 
  }
  console.log(shortestWord('The dog jumped over the shipyarddddd fence'));
  
  
  function wordLengths(sumWord){ 
    // Step 1. Split the string into an array of strings
    var sumWordSplit = sumWord.split(' ');
    var wordLen = sumWordSplit.map(w => w.length);
    var sum=0;
     // Step 3. Create the FOR loop
    for(var i = 0; i < sumWordSplit.length; i++){
      sum += wordLen[i];
       }
      return sum;
   }
  
  console.log(wordLengths('The dog jumped over the shipyardddddyyy fence'));
  
  