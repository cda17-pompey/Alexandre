/**
 * Calcule la somme des nombres pairs de 1 a N
 * @param { Number } N
 * @return { Number }
*/
function calculPair(N) {

    //On vérifie si N (ce qui a été donné par l'utilisateur) est bien un nombre
    if (typeof N == "number") {

        //Variable pair pour stocker la somme
        let pair = 0;
        
        //Pour i (1), SI i est inférieur ou égal a N, I + 1
        for (let i = 1; i <= N; i++) {
            
            //Si i divisé par 2 est égale a 0
            if (i % 2 == 0) {
                pair = pair + i
                console.log(pair)
            } else {
                console.log('pas pair')
            }
            
        }
        
        //On renvoi la valeur pair a la fin de la fonction
        return pair

    //Sinon on lui indique que c'est pas un nombre
    } else {

        console.log('C\'est pas un nombre')
    }
}

/**
 * Vérifie si une chaine de caractère est un Palindrome
 * @param { String } string
 * @return { Boolean }
*/
function checkStringPalindrome(string) {

    //On vérifie que la chaine est en minuscule, puis on dégage tout les types de caractères qui ne sont pas dans l'alphabet (Nombres, caractères spécials, etc..)
    let clearString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    // On vérifie si la chaîne nettoyée est égale à sa version inversée
    let reversedString = clearString.split('').reverse().join('');

    if (clearString === reversedString) {
        return true; // C'est un palindrome
    } else {
        return false; // Ce n'est pas un palindrome
    }
}


/**
 * Vérifie si deux chaines de caractères sont des anagrammes
 * @param { String } string1
 * @param { String } string2
 * @return { Boolean }
*/
function checkStringsAnagramme(string1, string2){

    //Si la première chaine de caractère n'est pas a la même taille que la deuxième chaine de caractère
    //On renvoi false (faux)
    if (string1.length !== string2.length) {
        return false;
    }
    
    // Convertir les chaînes en tableaux de caractères, les trier et les comparer
    const string1Fold = string1.split('').sort().join('');
    const string2Fold = string2.split('').sort().join('');
    
    //On renvoi True (vrai)
    return string1Fold === string2Fold;
}