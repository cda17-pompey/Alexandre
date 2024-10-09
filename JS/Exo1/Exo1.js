

/**
 * Calcule la somme des nombres pairs de 1 a N
 * @param { Number } N
 * @return { String }
*/
function calculPair(N) {
    // Vérifier si N est bien un nombre
    if (typeof N === "number") {
        
        // Variable pour stocker la somme des nombres pairs
        let pair = 0;
        let i = 2;

        // Si N est plus grand ou égal à i (qui est 2)
        if (N >= i) {

            // Boucle de i jusqu'à N, avec incrémentation de i
            for (; i <= N; i++) {

                // Si i est un nombre pair
                if (i % 2 === 0) {
                    pair = pair + i;
                }
            }

            // Affiche la somme des nombres pairs
            console.log("La somme des nombres pairs de " + N + " est : " + pair);

        } else {
            // Si N est plus petit que 2
            console.log('Le paramètre est plus petit que la boucle (N est inférieur à 2)');
        }

    } else {
        // Si le paramètre n'est pas un nombre
        console.log("Le paramètre n'est pas un nombre");
    }
}

calculPair(10);

/**
 * Vérifie si une chaine de caractère est un Palindrome
 * @param { String } string
 * @return { String }
*/
function checkStringPalindrome(string) {

    if (typeof string !== 'string') {
        console.log("Le paramètre n'est pas une chaine de caractère");
    }
    //On vérifie que la chaine est en minuscule, puis on dégage tout les types de caractères qui ne sont pas dans l'alphabet (Nombres, caractères spécials, etc..)
    let clearString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    // On vérifie si la chaîne nettoyée est égale à sa version inversée
    let reversedString = clearString.split('').reverse().join('');

    if (clearString === reversedString) {
        console.log("C'est bien un palindrome"); // C'est un palindrome
    } else {
        console.log("Ce n'est pas un palindrome"); // Ce n'est pas un palindrome
    }
}

checkStringPalindrome('radar');

/**
 * Vérifie si deux chaines de caractères sont des anagrammes
 * @param { String } string1
 * @param { String } string2
 * @return { String }
*/
function checkStringsAnagramme(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        console.log("L'un des deux paramètres n'est pas une chaîne de caractères");
    }

    // Si les chaînes n'ont pas la même longueur, elles ne peuvent pas être des anagrammes
    if (string1.length !== string2.length) {
        console.log("Les deux paramètres n'ont pas la même longueur");
    }

    // Convertir les chaînes en tableaux de caractères, les trier et les comparer
    const string1Fold = string1.split('').sort().join('');
    const string2Fold = string2.split('').sort().join('');

    // Comparer les chaînes triées
    if (string1Fold === string2Fold) {
        console.log('Les deux chaînes de caractères sont des anagrammes');
    } else {
        console.log('Les deux chaînes de caractères ne sont pas des anagrammes');
    }
}

checkStringsAnagramme('ABC', 'BAC');

/**
 * Une fonction qui sert de petit jeu (trop petit ou trop grand)
 * @return { Alert }
*/
function moreOrLess() {
    let input = prompt("Donne moi un nombre");
    let numberToHave = 24;

    while (input !== null) {  // Si l'utilisateur n'a pas cliqué sur Annuler
        let number = parseInt(input);

        if (number < numberToHave) {
            input = prompt("Trop petit, donne moi en un autre");
        } else if (number > numberToHave) {
            input = prompt("Trop grand, donne m'en un autre !");
        } else {
            alert("Félicitations ! Le nombre était bien 24 !");
            break;
        }
    }

    if (input === null) {
        alert("Partie annulée.");
    }
}

moreOrLess();
