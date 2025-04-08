// Convert the First Letter of a String into UpperCase


function firstletterupper(str){
    if (str.length === 0) return str; // Handle empty strings
    let capitalizedString = '';
    for(let i=0;i<str.length;i++){
        if(i==0){
            capitalizedString += str[i].toUpperCase();
        }else{
            capitalizedString +=str[i];
        }
    }
    return capitalizedString;
}
console.log(firstletterupper("the program of first letter to uppercase"))