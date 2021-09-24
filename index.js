/*
Idee Originale qui marche : Laissez les textes dans un fichier Text 
et les recupere avec ma fonction readFile; Cette fonction utilise: "const fs = require('fs')";
Le browser ne reconnait pas require(car nodejs).
Pour cela maintenant je sauvegarde les textes dans le meme fichier JS!!!

Frequence d'un mot : nb de fois que le mot apparait dans le doc / nb de  mots du document
*/


var stopWords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"] ;
// French StopWords
//var stopWords = ["a","à","â","abord","afin","ah","ai","aie","ainsi","allaient","allo","allô","allons","après","assez","attendu","au","aucun","aucune","aujourd","aujourd\u0027hui","auquel","aura","auront","aussi","autre","autres","aux","auxquelles","auxquels","avaient","avais","avait","avant","avec","avoir","ayant","b","bah","beaucoup","bien","bigre","boum","bravo","brrr","c","ça","car","ce","ceci","cela","celle","celle-ci","celle-là","celles","celles-ci","celles-là","celui","celui-ci","celui-là","cent","cependant","certain","certaine","certaines","certains","certes","ces","cet","cette","ceux","ceux-ci","ceux-là","chacun","chaque","cher","chère","chères","chers","chez","chiche","chut","ci","cinq","cinquantaine","cinquante","cinquantième","cinquième","clac","clic","combien","comme","comment","compris","concernant","contre","couic","crac","d","da","dans","de","debout","dedans","dehors","delà","depuis","derrière","des","dès","désormais","desquelles","desquels","dessous","dessus","deux","deuxième","deuxièmement","devant","devers","devra","différent","différente","différentes","différents","dire","divers","diverse","diverses","dix","dix-huit","dixième","dix-neuf","dix-sept","doit","doivent","donc","dont","douze","douzième","dring","du","duquel","durant","e","effet","eh","elle","elle-même","elles","elles-mêmes","en","encore","entre","envers","environ","es","ès","est","et","etant","étaient","étais","était","étant","etc","été","etre","être","eu","euh","eux","eux-mêmes","excepté","f","façon","fais","faisaient","faisant","fait","feront","fi","flac","floc","font","g","gens","h","ha","hé","hein","hélas","hem","hep","hi","ho","holà","hop","hormis","hors","hou","houp","hue","hui","huit","huitième","hum","hurrah","i","il","ils","importe","j","je","jusqu","jusque","k","l","la","là","laquelle","las","le","lequel","les","lès","lesquelles","lesquels","leur","leurs","longtemps","lorsque","lui","lui-même","m","ma","maint","mais","malgré","me","même","mêmes","merci","mes","mien","mienne","miennes","miens","mille","mince","moi","moi-même","moins","mon","moyennant","n","na","ne","néanmoins","neuf","neuvième","ni","nombreuses","nombreux","non","nos","notre","nôtre","nôtres","nous","nous-mêmes","nul","o","o|","ô","oh","ohé","olé","ollé","on","ont","onze","onzième","ore","ou","où","ouf","ouias","oust","ouste","outre","p","paf","pan","par","parmi","partant","particulier","particulière","particulièrement","pas","passé","pendant","personne","peu","peut","peuvent","peux","pff","pfft","pfut","pif","plein","plouf","plus","plusieurs","plutôt","pouah","pour","pourquoi","premier","première","premièrement","près","proche","psitt","puisque","q","qu","quand","quant","quanta","quant-à-soi","quarante","quatorze","quatre","quatre-vingt","quatrième","quatrièmement","que","quel","quelconque","quelle","quelles","quelque","quelques","quelqu\u0027un","quels","qui","quiconque","quinze","quoi","quoique","r","revoici","revoilà","rien","s","sa","sacrebleu","sans","sapristi","sauf","se","seize","selon","sept","septième","sera","seront","ses","si","sien","sienne","siennes","siens","sinon","six","sixième","soi","soi-même","soit","soixante","son","sont","sous","stop","suis","suivant","sur","surtout","t","ta","tac","tant","te","té","tel","telle","tellement","telles","tels","tenant","tes","tic","tien","tienne","tiennes","tiens","toc","toi","toi-même","ton","touchant","toujours","tous","tout","toute","toutes","treize","trente","très","trois","troisième","troisièmement","trop","tsoin","tsouin","tu","u","un","une","unes","uns","v","va","vais","vas","vé","vers","via","vif","vifs","vingt","vivat","vive","vives","vlan","voici","voilà","vont","vos","votre","vôtre","vôtres","vous","vous-mêmes","vu","w","x","y","z","zut","alors","aucuns","bon","devrait","dos","droite","début","essai","faites","fois","force","haut","ici","juste","maintenant","mine","mot","nommés","nouveaux","parce","parole","personnes","pièce","plupart","seulement","soyez","sujet","tandis","valeur","voie","voient","état","étions"];

//Reponse question 1
var myJson = {"doc1":{},"doc2":{},"doc3":{},"doc4":{},"doc5":{}}

var jsonUserQuest = {};

//Reponse question 2 
var jsonSimil = {};






var porterStemmingAlgo = (function(){ // Porter Stemming algorithm trouve sur internet !!!
    var step2list = {
            "ational" : "ate",
            "tional" : "tion",
            "enci" : "ence",
            "anci" : "ance",
            "izer" : "ize",
            "bli" : "ble",
            "alli" : "al",
            "entli" : "ent",
            "eli" : "e",
            "ousli" : "ous",
            "ization" : "ize",
            "ation" : "ate",
            "ator" : "ate",
            "alism" : "al",
            "iveness" : "ive",
            "fulness" : "ful",
            "ousness" : "ous",
            "aliti" : "al",
            "iviti" : "ive",
            "biliti" : "ble",
            "logi" : "log"
        },
    
        step3list = {
            "icate" : "ic",
            "ative" : "",
            "alize" : "al",
            "iciti" : "ic",
            "ical" : "ic",
            "ful" : "",
            "ness" : ""
        },
    
        c = "[^aeiou]",          // consonant
        v = "[aeiouy]",          // vowel
        C = c + "[^aeiouy]*",    // consonant sequence
        V = v + "[aeiou]*",      // vowel sequence
    
        mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
        meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
        mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
        s_v = "^(" + C + ")?" + v;                   // vowel in stem
    
    return function (w) {
        var     stem,
            suffix,
            firstch,
            re,
            re2,
            re3,
            re4,
            origword = w;
    
        if (w.length < 3) { return w; }
    
        firstch = w.substr(0,1);
        if (firstch == "y") {
            w = firstch.toUpperCase() + w.substr(1);
        }
    
        // Step 1a
        re = /^(.+?)(ss|i)es$/;
        re2 = /^(.+?)([^s])s$/;
    
        if (re.test(w)) { w = w.replace(re,"$1$2"); }
        else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }
    
        // Step 1b
        re = /^(.+?)eed$/;
        re2 = /^(.+?)(ed|ing)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            re = new RegExp(mgr0);
            if (re.test(fp[1])) {
                re = /.$/;
                w = w.replace(re,"");
            }
        } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1];
            re2 = new RegExp(s_v);
            if (re2.test(stem)) {
                w = stem;
                re2 = /(at|bl|iz)$/;
                re3 = new RegExp("([^aeiouylsz])\\1$");
                re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
                if (re2.test(w)) {  w = w + "e"; }
                else if (re3.test(w)) { re = /.$/; w = w.replace(re,""); }
                else if (re4.test(w)) { w = w + "e"; }
            }
        }
    
        // Step 1c
        re = /^(.+?)y$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = new RegExp(s_v);
            if (re.test(stem)) { w = stem + "i"; }
        }
    
        // Step 2
        re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step2list[suffix];
            }
        }
    
        // Step 3
        re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step3list[suffix];
            }
        }
    
        // Step 4
        re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        re2 = /^(.+?)(s|t)(ion)$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = new RegExp(mgr1);
            if (re.test(stem)) {
                w = stem;
            }
        } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1] + fp[2];
            re2 = new RegExp(mgr1);
            if (re2.test(stem)) {
                w = stem;
            }
        }
    
        // Step 5
        re = /^(.+?)e$/;
        if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = new RegExp(mgr1);
            re2 = new RegExp(meq1);
            re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
            if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
                w = stem;
            }
        }
    
        re = /ll$/;
        re2 = new RegExp(mgr1);
        if (re.test(w) && re2.test(w)) {
            re = /.$/;
            w = w.replace(re,"");
        }
    
        // and turn initial Y back to y
    
        if (firstch == "y") {
            w = firstch.toLowerCase() + w.substr(1);
        }
    
        return w;
    }
    })();



var  allText = new Array();


function getTheDocs(){      /* Fonction trouve surinternet */
    const xhr = new XMLHttpRequest();
                
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                

                var answer = JSON.parse(xhr.responseText);

                // Comme nb documents statics, on sait le nb de docs qu'on a 
                var tsLesTextes = [];
                for(var i =1;i<=5;i++){
                    tsLesTextes.push(answer["doc"+i]);
                }
                readTextFile(tsLesTextes);

            }

            if(xhr.status == 404){
            console.log("file or ressource not found!");  
            }
        }
    }

    xhr.open('get','http://localhost:8087',true);

    xhr.send()
}


function readTextFile(texte)
{
    var interTable = texte;

    
    for(var l =0;l<interTable.length; l++){
        
           var allWords = [];

           var newTab = interTable[l].split(' ');

           for(var k = 0; k<newTab.length; k++){ // j'enleve les stopwords
                if(stopWords.includes(newTab[k])){
                    newTab[k] = '';
                }

           }
 
   
               for(var j = 0; j<newTab.length; j++){
                   if(newTab[j]!=''){
                    newTab[j] = porterStemmingAlgo(newTab[j]) ; //j'effectue le stemming
                    allWords.push(newTab[j]);
                   }
               }
   
           


        

        saveIndex(allWords);
    
}

        
}



 

// test 
//var snowball = require('node-snowball');




function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function saveIndex(tab){
    allText.push(tab);
    var nbDocs = 5;      // Ne jamais oublier d'enlever ca!!

   

    if(allText.length == nbDocs){

        console.log(allText);

       

        

        for(var i = 0; i<allText.length; i++){
            for(var j = 0; j<allText[i].length; j++){

                if(allText[i][j] != ''){

                    // Ici j'ai le tf
                    var frequency = getOccurrence(allText[i],allText[i][j])
                    
                    var nbDocsWithWords = 0;

                    for(var k = 0; k<allText.length; k++){
                        if(allText[k].includes(allText[i][j])){nbDocsWithWords++;}
                    
                    }
                    

                    // nbDocsWithWords jamais car tjrs au moins un document avec le mots;
                    var poids = frequency  * Math.log(nbDocs/nbDocsWithWords)

                    

                    // Remplisage du Json:

                    switch(i) {
                        case 0:

                            myJson.doc1[allText[i][j]] = poids
                        

                            break;
                        case 1:
                            myJson.doc2[allText[i][j]] = poids
                            break;
                        case 2:
                            myJson.doc3[allText[i][j]] = poids
                            break;
                        case 3:
                            myJson.doc4[allText[i][j]] = poids
                            break;
                        case 4:
                            myJson.doc5[allText[i][j]] = poids
                            break;
        
                    }

            }

            }

        }
        console.log(JSON.stringify(myJson.doc1)); // test passe pour imprimmer les poids

        findSearch();
    }

    
   

   

}

function findSearch(){



  var userQuest = (document.getElementById('sizeInput').value).split(' ');
   
   // On enleve stopWord et et on stemming ca;

   for(var i = 0; i<userQuest.length; i++){
        if(stopWords.includes(userQuest[i])){
           userQuest[i] = '';
        }

        //userQuest[i] = snowball.stemword(userQuest[i], 'french') // J'essaie l'anglais en bas

        userQuest[i] = porterStemmingAlgo(userQuest[i]) 
    }



    for(var i = 0; i<userQuest.length; i++){
        if(userQuest[i] != ''){
            // Frequence du mot dans la requete
           var frequence = getOccurrence(userQuest,userQuest[i]);

           

           // nbDocs / nb documents qui a le mots
           var nbDocsAvecMots = 0;

           // On gere le cas ou le mot est un doc en lower ou upper case mais aussi si le mot est pareil!!!!
           for(var j = 0; j<allText.length; j++){   
               
              if(allText[j].includes(userQuest[i].toString().toLowerCase()) || allText[j].includes(userQuest[i].toString().toUpperCase()) || allText[j].includes(userQuest[i])){
                  nbDocsAvecMots++;} 

           }
           console.log("nbDocsWithWords: "+nbDocsAvecMots); //Test

           var idfWord =Math.log(5/nbDocsAvecMots);

           var weight = frequence * idfWord;

           if(nbDocsAvecMots == 0){weight = 0;}

           

           jsonUserQuest[userQuest[i]] = weight;




           
}

    }



console.log('-----------jsonUserQuest---------');
console.log(jsonUserQuest);
console.log('-----------FinjsonUserQuest---------');

calculSimilarities();

}

function calculSimilarities(){


    var lenUserQuest = lengthOfDoc(jsonUserQuest);

    // je met mes similarites dans un fichier json 
 
    for(var p in myJson){
        
        
        if(myJson.hasOwnProperty(p)){
 
           var answer = (cosine2Vectors(myJson[p],jsonUserQuest))/(lengthOfDoc(myJson[p])*lenUserQuest) ;

           if(Number.isNaN(answer)){ answer = 0;}



           //console.log("Similarite entre "+myJson[p]+" et la requete est "+ (lenUserQuest) );
           
           // similirarite entre la requete et la property (le document);
           jsonSimil[p] = answer;
           
        }
    }
    
    console.log('--------------Similarite---------------');
    console.log(jsonSimil);


    resultOfSearch();
}


function lengthOfDoc(obj){
    result = 0;
    for(var p in obj){
        if( obj.hasOwnProperty(p) ) {
            result +=  Math.pow(obj[p],2) ;
          } 
    }

  return(Math.sqrt(result));
}


// Peut etre probleme ici!!!
function cosine2Vectors(obj1,obj2){
    // on multiplie les poids des properties communs aux deux objets
    var result = 0;
    for(var p in obj2){



        if(obj1.hasOwnProperty(p) && obj2.hasOwnProperty(p) ){
           result += obj1[p]*obj2[p];
        }
    }

    return result;
}


function resultOfSearch(){

keysSorted = Object.keys(jsonSimil).sort(function(a,b){return jsonSimil [b] - jsonSimil [a]})

var ifNoDocs = 0;

    // La je cree et j'ajoute l'element a mon html
    for(var a in keysSorted){
        ifNoDocs+= jsonSimil[keysSorted[a]];

        if(jsonSimil[keysSorted[a]] !=0){                 // On veut pas imprimmer les pages qui ont un similirate 0!!!
        var nouveauElement = document.createElement("a");
        nouveauElement.classList.add('displayResult');
        var node = document.createTextNode('Ce lien est le document '+ keysSorted[a] +" qui a pour similarite: " + jsonSimil[keysSorted[a]]);
        nouveauElement.appendChild(node);
        nouveauElement.href = keysSorted[a] +".html";
        document.getElementById('resultat').appendChild(nouveauElement);
        }
    }
    //Si aucun texte correspond a la requete
    if(ifNoDocs==0){
        var reponse = document.createElement("h1");
        reponse.classList.add("pos");
        var txt = document.createTextNode("Aucun document de la base de documents correspond a la requete");
        reponse.appendChild(txt);
        document.getElementById('resultat').appendChild(reponse);
    }
}


