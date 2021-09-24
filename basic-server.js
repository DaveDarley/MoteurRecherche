
const http = require('http');

const server = http.createServer(function(req,res){

    res.setHeader('content-type','application/json');

    // Pour eviter le probleme de cross-Origine
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.writeHead(200);





    let dataObj = {
        doc1:"The sleeping beauty Once upon a time, there was a princess living in the tower, named Lala. She was the most beautiful one of the whole kingdom. She was cursed to sleep for a hundred years by an evil fairy; she had to be awakened by a handsome prince at the end of them. The good fairy, realizing that the princess would be frightened if alone when she awakens, uses her wand to put every living person and animal in the palace asleep, to awaken when the princess does.",
        doc2:"This is the story of a young beautilful women of unparalleled kindness and sweet temper, whose father was a wealthy widower married to a proud and haughty woman as his second wife. She has two daughters, who are equally vain and selfish. The girl is forced into servitude by her stepmother, where she is made to work day and night doing menial chores. After the girl's chores are done for the day, she curls up near the fireplace in an effort to stay warm. She often arises covered in cinders, giving rise to the mocking nickname \"Cinderella\" by her stepsisters. Cinderella bears the abuse patiently and does not tell her father, who would have scolded her. One day, the Prince invites all the young ladies in the kingdom to a royal ball, planning to choose a wife. The two stepsisters gleefully plan their wardrobes for the ball, and taunt Cinderella by telling her that maids are not invited to the ball. As the sisters depart to the ball, Cinderella cries in despair. Her Fairy Godmother magically appears and immediately begins to transform Cinderella from house servant to the young lady she was by birth, all in the effort to get Cinderella to the ball. She turns a pumpkin into a golden carriage, mice into horses, a rat into a coachman, and lizards into footmen. She then turns Cinderella's rags into a beautiful jeweled gown, complete with a delicate pair of glass slippers. The Godmother tells her to enjoy the ball, but warns her that she must return before midnight, when the spells will be broken. At the ball, the entire court is entranced by Cinderella, especially the Prince. At this first ball, Cinderella remembers to leave before midnight. Back home, Cinderella graciously thanks her Godmother. She then innocently greets the stepsisters, who had not recognized her earlier, and talk of nothing but the beautiful girl at the ball. Another ball is held the next evening, and Cinderella again attends with her Godmother's help. The Prince has become even more infatuated with the mysterious woman at the ball, and Cinderella in turn becomes so enchanted by him she loses track of time and leaves only at the final stroke of midnight, losing one of her glass slippers on the steps of the palace in her haste. The Prince chases her, but outside the palace, the guards see only a simple country girl leave. The Prince pockets the slipper and vows to find and marry the girl to whom it belongs. Meanwhile, Cinderella keeps the other slipper, which does not disappear when the spell is broken. The Prince tries the slipper on all the women in the kingdom. When the Prince arrives at Cinderella's home, the stepsisters try in vain to win him over. Cinderella asks if she may try, but the stepsisters taunt her. Naturally, the slipper fits perfectly, and Cinderella produces the other slipper for good measure. Cinderella's stepfamily pleads for forgiveness, and Cinderella agrees. Cinderella had hoped her step-family would love her always.",
        doc3:"Dunkan the dragon This story is about a dragon who loves to read books. Unfortunately, from his crazy imagination he would get so excited that he would breathe fire destroying every book he read. All he wanted was to get to the end of a book. He tried his best to keep his cool but it never worked. Will he ever find out a way to finish a book without destroying it ?",
        doc4:"Rogue one : a star wars story Rogue One: A Star Wars Story is a 2016 American epic space opera film directed by Gareth Edwards. The screenplay by Chris Weitz and Tony Gilroy is from a story by John Knoll and Gary Whitta. It was produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures. It is the first installment of the Star Wars anthology series. The cast includes Felicity Jones, Diego Luna, Ben Mendelsohn, Donnie Yen, Mads Mikkelsen, Alan Tudyk, Riz Ahmed, Jiang Wen, and Forest Whitaker.",
        doc5: "Star wars, the last jedi Star Wars: The Last Jedi is a 2017 American epic space opera film written and directed by Rian Johnson. It is the second installment of the Star Wars sequel trilogy, following The Force Awakens, and it is the eighth episode of the nine-part \"Skywalker saga\". It was produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyong'o, Domhnall Gleeson, Anthony Daniels, Gwendoline Christie, and Frank Oz in returning roles, with Kelly Marie Tran, Laura Dern, and Benicio del Toro joining the cast. It features the first posthumous film performance by Fisher, who died in December 2016, and the film is dedicated to her memory."
    }

    let data = JSON.stringify(dataObj)
    res.end(data);

})

server.listen(8087,function(){
    console.log("Listenning on port 8087")
})

