Projet realise par Dave Joseph 

Mon Projet consiste a faire un petit moteur de recherche d'informations. J'ai une petite base de donnees qui contient des documents. Ces documents sont des textes en anglais. Disons quand une personne cherche un mot , le document dont le mot recherche apparait le plus de fois apparaitra en premier, ainsi de suite. 
Si aucun document contient le mot recherche, notre moteur de recherche informe a la personne qu'il n'y a aucune correspondance.
J'ai utilise 5 documents ANGLAIS qui constituent ma base de documents.

Le doc1 parle de :
Le doc2 parle de :
Le doc3 parle de :
Le doc4 parle de :
Le doc5 parle de :

Le fonctionnement de mon code:
Mes documents sont stockes sur un serveur localhost:

Comment faire fonctionner le code :   ======> Partie Tres importante!!!

Taper "node basic-server.js" dans votre Terminal
Si ca dit que le Port "8087" est deja occupe il faut changer le port du serveur dans le code : basic-server.js:

1)server.listen(8087,function(){          ==========> au lieu du 8087, mettez un autre et refaire "node basic-server.js" dans votre Terminal
                                          ==========> jusqu'a ce que vous trouvez un port qui marche. Exemple:"Listenning on port 8087" s'affichera dans le 
   console.log("Listenning on port 8087") ==========> Terminal qd le port selectionne fonctionne!!!!
    
})

2) Dans le code javascript("index.js"); il faut changer dans ma fonction "getTheDocs()":
xhr.open('get','http://localhost:8087',true); en mettant a la place de 8087 , le numero du port a laquelle le serveur fonctionne.

Des que vous avez fini avec ces deux etapes, vous pouvez lancer le code HTML(index.html) dans le browser qui vous convient.



Idee pour la conception de mon code:

Qd je recupere les documents du browser je met les documents(texte) dans un tableau; Pour chaque index de ce tableau(a savoir chaque document)
je le parcours et pour chaque mot je clacule son poids(tf*idf).
Formule utilise pour le calcul du poids : nbde fois mot apparait dans le document / math.log(nbdocs/nb de docs qui contient le mot)
Et j'enregistre pour chaque document, le poids de chaque mot dans un objet javascript( Apres avoir fait une requete si vous regarder sur la console vous verrez un objet js qui a comme property:le document et comme valeur le poids de chaque mot dans le document!!)


Pour calculer la similarite entre la requete et les documents:

je calcule le poids de chaque mot de la requete avec la formule qui suit:
tf: nb de fois que le mot apparait dans la requete
idf:Math.log(NbdeDocs/nb de documents que le mot apparait dedans)

Pour le calcule de similarite:
ex: entre doc1 et requete

Je parcours la requete si le mot de la requete est dans le document je multiplie le poids entre eux ainsi de suite....
Tout ca divise par (/) longueur doc1 * longueur requete;
Formule longueur de document: Math.sqrt(la somme des poids des termes du doc au carre )




NB: ma fonction de stemming(porter's algorithm),ma liste de stopwords et ma fonction getTheDocs() sont prises directement de l'internet ; 
    Les autres fonctions , je les ai faites!!!!!!!!!!!!
    Les textes des documents sont accessibles dans les documents HTML qui suivent(doc1.html,.....doc5.html).
    Si vous changez le nb de documents, il faut mettre le nouveau nombre dans mon fichier JS("index.js") car ce fichier JS
    a ete fait pour 5 documents; Il y a quelques ajustements a faire si vous ajoutez un autre (au serveur et fichier JS). 


Limitation de mon code:

Si je cherche 2016 et le document 5 a 2016, ; le fait que la virgule soit immediatement apres 2016 il y aura pas de similiraite
Pas de similarite aussi entre Lala et lala car premiere lettre majuscule != minuscule
Pas de similarite si les deux mots(apres stemming) sont pas pareils;
Ceci devrait etre fait par un algo de "lemmatization" mais les algo de lemmatization trouve recquiert nodejs ce qui marche pas
avec le browser!!



Seul petit soucis qui peut y avoir avec mon code c'est pour acceder au server et le mettre en ecoute; Des que cette partie est
faite le reste marche parfaitement!!!!!!!!!

Projet realise en Aout2020
