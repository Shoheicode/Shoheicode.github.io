//This scripts helps manage the courses and keeps track of that information.

import {read} from "./index.js";

let readData;

//List of all Favorite Courses which we will use later

let favCourses = [];

//Tree that will store our data

let tree;

// All of our data/Information

let englishCourses = ["Engl 1A", "Engl 1C"]
let communciationCourses = ["Coms 100", "Coms 120"];
let mathCourses = ["Math 150", "Math 190", "Math 191"];
let artCourses = ["Art 150", "Ahis 101", "Film 105", "Musi 111"];
let humanCourses = ["Japa 2", "Chin 2", "Phil 101"];
let socBehaSci = ["Econ 100", "Econ 101", "Poli 1", "Psyc 101"];
let physicalCourses = ["Phys 1A", "Astr 12", "Chem 1A"];
let bioCourses = ["Anat 30", "Anth 1", "Biol 8"];

let englishCourseName = ["Reading and Composition", "Critical Thinking/Comp"];

let comsCourseName = ["Public Speaking", "Argumentation and Debate"];

let mathCourseName = ["Elemntry Statistcs W/Probabilty", "Sgl Var Calc/Anlyt Geometry I", "Sgl Var Calc/Anlyt Geometry II"]

let artCourseName = ["The Art of Photography", "Art/Visual Cultr: Glbl Perspec", "Media Aesthetics", "Music Appreciation-Survey"];

let humanCourseName = ["Elementary Japanese II", "Elementary Chinese II", "Introductn to Philosophy"];

let socBehaSciCourseName = ["Fundamentals of Economics", "Principls of Econ - Macroecon", "Governments US/Calif", "General Psychology"]

let physicalCourseName = ["Mechanics of Solids", "Astronomy Laboratory", "General Chemistry I"]

let bioCourseName = ["Essentls Anatomy/Physiol", "Intro to Biologicl Anthropolgy", "Biology of Plants"]

let englishCourseDescriptions = [
    "This course is designed to strengthen the students\' ability to read with understanding and discernment, to discuss assigned readings intelligently, and to write clearly. Emphasis will be placed on the ability to write an essay in which each paragraph relates to a controlling idea, has an introduction and conclusion, and contains primary and secondary support. College-level reading material will be assigned to provide the stimulus for class discussion and writing assignments, including a required research paper.",
    "This course focuses on the development of critical thinking, reading, and writing skills beyond the level achieved in English 1A. Students will apply these skills to the analysis of written arguments in various forms and genres, including classic and/or contemporary, and to the writing of effective persuasive essays. Students will learn to evaluate and interpret data, to recognize assumptions, to distinguish facts from opinions, to identify and avoid logical fallacies, to identify and employ deductive and inductive reasoning, and to effectively assert and support argumentative claims."
];

let comsCourseDescriptions = [
    "In this course students will compose, present, and evaluate original speeches. Emphasis is placed on audience analysis, topic selection, research, evidence, organization, delivery, and critical analysis of persuasive communication. Students are required to attend out-ofclass speaking events.",
    "This course introduces students to the construction of arguments for debate and other speech presentations. Emphasis is placed on analyzing claims, developing arguments that support and refute propositions, and effective delivery. Identification of types of argument and fallacies of reasoning are explored. Controversial issues are discussed, researched, and debated."    
];

let mathCourseDescriptions = [
    "The focus of this course is the basic practice of statistics, including descriptive statistics, inferential statistics, and the role probability plays in statistical analysis. Students calculate and interpret various descriptive statistics using graphing calculators with statistical testing capabilities and statistical software, as well as by hand. Major topics include methods of data collection and simulation; measures of central tendency, variability, and relative position; graphical summaries of data; linear regression and correlation; distributions, including normal and binomial distributions; probability theory; and inferential statistical methods. Students choose, justify, use, and interpret the results of inferential techniques, such as confidence intervals, hypothesis tests, goodness of fit, analysis of variance, and nonparametric tests. ",
    "Topics in this course include limits, continuity, derivatives and antiderivatives of algebraic and transcendental functions; definite integrals of algebraic and transcendental functions with and without the fundamental theorem of calculus; linear approximations; relating features of a function's graph to its derivatives; and application problems using derivatives as well as implicit differentiation. Problem solving using computer software is also addressed.",
    "This course includes a study of methods of integration, applications of integration, improper integrals, numerical integration, infinite sequences, series and power series, parametric equations, and polar coordinates."
];

let artCourseDescriptions = [
    "This course is a survey of photography as an art form which includes the evolution of photography as art. The course will also cover the aesthetic and cultural impact of photography as art. Also included is an examination of the techniques and methods of traditional and digital photography. Students will learn camera functions and develop their ability to analyze, evaluate, and compose photographs. Note: Art 150 is the same course as Photography 150. Course credit is limited to Art 150 or Photography 150.",
    "This course is an introduction to art and visual culture across time and diverse cultures with a global perspective. Examining works of art through themes, theory, terminology and media, students acquire analytical and interpretive skills to develop visual literacy as well as an understanding of the role of art and viausl culture in relation to contemporary life. This course explores how meaning is constructed, transmitted and negotiated in an increasingly visual world.",
    "This course introduces students to close analyses of film and television texts and includes broad questions of form and content, aesthetics and meaning, and history and culture. Students explore the diverse possibilities presented by the cinematic art form through an examination of a wide variety of productions, national cinemas, and film movements. Topics include modes of production, narrative and non-narrative forms, visual design, editing, sound, genre, ideology and critical analysis.",
    "This course focuses on the major stylistic periods of Western art music from the Middle Ages until the end of the 20th Century. An emphasis will be placed on the music heard in North American and European concert halls. Examples will be presented in the context of contemporaneous social, political, and artistic movements and events. Basic musical elements, terminology, voice categories, and instruments of the orchestra will be included."
];

let humCourseDescriptions = [
    "This course, taught within the context of Japanese culture, is a continuation of the study of elementary Japanese through intensive training on listening, speaking, reading, and writing. Students improve their speaking skills and extend their study of the basic grammar and Kanji characters. Note: The prerequisite for this course is comparable to two years of high school Japanese."
    ,"This course, taught within the context of Chinese culture, is a continuation of the study of elementary Mandarin Chinese through intensive practice in listening, speaking, reading, and writing. Students improve their oral communication skills and extend their study of the basic grammar, vocabulary and Chinese characters. Technological support and tutorial services enhance the course. Note: The prerequisite for this course is comparable to two years of high school Chinese.",
    "This course introduces philosophical ideas and methods concerning knowledge, reality and values. Expected topics will include the sources and limits of knowledge, and the nature of reality. Other topics that may be examined from a philosophical perspective include the nature of the self, religion, science, language, beauty and art, political theory, or mind."
]

let socBehaSciCourseDes = [
    "In this course, students are introduced to the study of how a market economy solves the problem that the scarcity of resources and goods imposes on a society. Supply and demand concepts, the effects of controls on the economy, unemployment and inflation, and the principles of international trade and finance are also discussed. ",
    "This course introduces students to the principles that explain the operation of the national economy. Topics to be analyzed include consumption of products, exchange, aggregate output, the money supply, national income, price level, economic growth, international trade, international finance, and macroeconomic policies.",
    "This course is a survey of the concepts, theories, and functions of the American political system. The basic principles of the United States Constitution and the government of California will be examined. Emphasis will be placed on the formal and informal influences of federalism on national and state governments. ",
    "This course is a survey study of human behavior and mental processes with an emphasis on basic theory and research generated by the scientific method. Major topics include psychobiology, learning, human cognition, personality, lifespan development, psychological disorders, therapeutic approaches, and social psychology."
]

let physCourseDes = [
    "This is the first course in a four-semester calculus-based physics sequence designed for students with majors in engineering and the physical sciences. The course focuses on the mechanics of solids, with topics including statics, kinematics, Newton's Laws, energy, power, linear and angular momentum, rotational dynamics, elasticity, simple harmonic motion, and gravitation. ",
    "The astronomy laboratory provides students with an introduction to the observation of the sky with telescopes, binoculars, and the unaided eye. The student will become familiar with the principles of set up and operation of telescopes and use them to view the moon, the sun, planets, stars, star clusters, and nebulae. The student will use the principles of astronomy to interpret their observations. Students will also learn to identify the bright stars and major constellations visible in California.",
    "This course details fundamental theory and principles of atomic and molecular structure, physical states and chemical reactions. Included is the study of elements, compounds, periodic relationships, bonding, acids and bases, oxidation-reduction, energy, solutions, electrolytes and chemical equations. Descriptive chemistry of water and selected nonmetals including hydrogen, oxygen and carbon is presented."
]

let bioCourseDes = [
    "This course is the study of anatomy coupled with physiology. Students compare the structure and function of human organ systems to those of other vertebrates. The laboratory includes dissection of sheep brains and hearts, cow eyes and other vertebrates. Laboratory experiments reinforce principles of anatomy and the basic principles of chemistry, cell biology, histology, embryology, and genetics. Note: This course may satisfy the anatomy requirements for other health-related programs. It does not satisfy the requirements for the Bachelor of Science in Nursing",
    "This course explores and emphasizes the evolution and biological diversity of the human species and our closest living relatives, the non-human primates. Topics include genetics, mechanisms of evolutionary change, primate behavior and ecology, human biological variation, and human evolutionary history through examination of the fossil record.",
    "This biology course focuses on the world of plants and plant-like organisms. Students will study vascular plant anatomy, physiology, and ecology as well as explore the significance of plants to human life. The laboratory work will include a survey of algae, fungi, and all representative plant groups",

]

let courses = [englishCourses, communciationCourses, mathCourses, artCourses,humanCourses,socBehaSci,physicalCourses,bioCourses];

let courseName = [englishCourseName, comsCourseName, mathCourseName, artCourseName, humanCourseName, socBehaSciCourseName, physicalCourseName, bioCourseName];

let courseDes = [englishCourseDescriptions, comsCourseDescriptions, mathCourseDescriptions, artCourseDescriptions, humCourseDescriptions, socBehaSciCourseDes, physCourseDes, bioCourseDes];

let subjects = ["English", "Communication", "Math", "Art", "Humanities", "Social and Behavior Sciences", "Physical Sciences", "Biological Sciences"];


//This class here helps store and hold onto Course Data.
//This includes, subject, courseName, the full course name, course description as well as if the course is your favorite

class CourseData {
    constructor(courseName, courseSubject, fullCourseName, courseDescription){
        this.name = courseName;
        this.subject = courseSubject;
        this.fullCourseName = fullCourseName;
        this.description = courseDescription;
        this.favorite = false;
    }
    printData(){
        console.log(this.name);
    }
}

//This Node is needed to make the binary tree and has a value of CourseData

class Node{
    constructor(CourseData){
        this.data = CourseData;
        this.left = null;
        this.right = null;
    }
}

//This is the binary tree which keeps track of all the data

class BinaryTree {
    #traversingList;

    //Constructor helps build the binary tree to store data which includes root, size and travsering list
    constructor(){
        this.root = null;
        this.size = 0;
        this.#traversingList = [];
    }

    //Used for inserting the Node for the data being entered
    insertNode(information){
        this.#traversingList = [];
        //console.log(information.name);
        if(this.root == null){
            //console.log("CREATED ROOT");
            this.root = new Node(information);
            this.size = 1;
        }
        else{
            //console.log("ADDING ONTO ROOT");
            this.searchForNode(this.root, information);
        }
        this.goLeft(this.root);
    }

    //Helper function for insert node to look for node recursively
    searchForNode(node, info){
        //console.log(info.name);
        console.log(node.data.name);
        if(info.name < node.data.name){
            if(node.left == null){
                node.left = new Node(info);
                console.log("going left");
                this.size++;
            }
            else{
                this.searchForNode(node.left, info);
            }
        }
        else if(info.name > node.data.name){
            if(node.right == null){
                node.right = new Node(info);
                console.log("going right");
                this.size++;
            }
            else{
                this.searchForNode(node.right, info);
            }
        }
        else{
            //Should not run but good for debuging
            console.log("We already have this course");
        }
    }

    //A filter that filters for subject
    filterForSubject(inputSubject){
        let listOfCourses = [];

        if(this.root.data.subject == inputSubject){
            listOfCourses.push(this.root);
        }
        if(this.root.left != null){
            this.filterForSubjectNodes(listOfCourses, this.root.left, inputSubject);
        }
        if(this.root.right != null){
            this.filterForSubjectNodes(listOfCourses, this.root.right, inputSubject);
        }

        return listOfCourses;
    }

    //A helper function that filters recusrively for subject
    filterForSubjectNodes(list, node, subject){
        if(node.data.subject == subject){
            list.push(node);
        }

        if(node.left != null){
            this.filterForSubjectNodes(list, node.left, subject);
        }
        if(node.right != null){
            this.filterForSubjectNodes(list, node.right, subject);
        }
    }

    //A function that helps find the name of the class and if it is close to the name inputed
    searchForNodeName(name){
        let array = [];
        //console.log(this.root.data.name.toUpperCase().indexOf(name.toUpperCase()));
        if(this.root.data.name.toUpperCase().indexOf(name.toUpperCase())> -1){
            array.push(this.root);
        }
        if(this.root.left != null){
            this.findNode(array, this.root.left, name);
        }
        if(this.root.right != null){
            this.findNode(array, this.root.right, name);
        }
        return array;
    }

    //A helper function that helps find the name for the function above recursively
    findNode(arr, node, name){
        //console.log(node.data.name);
        if(node.data.name.toUpperCase().indexOf(name.toUpperCase())> -1){
            arr.push(node);
            console.log(node.data.name);
        }
        if(node.left != null){
            this.findNode(arr, node.left, name);
        }
        if(node.right != null){
            this.findNode(arr, node.right, name);
        } 
    }

    //Returns the size of the Binary Tree
    getSize(){
        return this.size;
    }

    //Grabs the node with the specific name (Has to be specific as for the other one, it was based off of closeness)
    getNode(name){
        console.log(name);
        
        if(this.root.data.name == name){
            return this.root;
        }
        if(this.root.left != null && name < this.root.data.name){
            return this.helpGetNode(this.root.left, name);
        }
        if(this.root.right != null && name > this.root.data.name){
            return this.helpGetNode(this.root.right, name);
        }

        return null;
    }

    //This is a helper function that helps get the node that you want. 
    helpGetNode(node, name){

        if(node.data.name == name){
            return node;
        }
        if(name < node.data.name && node.left != null){
            return this.helpGetNode(node.left, name);
        }
        if(name > node.data.name && node.right != null){
            return this.helpGetNode(node.right, name);
        }

        return null;
    }

    //Useful function that prints the tree
    printTree(){

        if(this.root != null){
            console.log(this.root.data.name);
        }
        if(this.root.left != null){
            this.printTreeA(this.root.left, i);
        }
        if(this.root.right != null){
            this.printTreeA(this.root.right, i);
        }
    }

    //Useful helper function that helps print the tree
    printTreeA(node){
        if(node.left != null){
            console.log(node.data.name);
            this.printTreeA(node.left);
        }
        if(node.right != null){
            console.log(node.data.name);
            this.printTreeA(node.right);
        }
        if(node != null){
            //console.log(node.data.name);
            this.size++;
            console.log(i);
        }
    }

    //Helper goLeft function that helps when going through tree recursively.
    goLeft(current){
        
        let node = current;
        while(node != null){
            this.#traversingList.push(node);
            node = node.left;
        }
        
    }

    //If there is a next for the traversingList which is helpful when getting information from binary tree in order
    hasNext(){
        return this.#traversingList.length > 0;
    }

    //Checks if there is a next in the traversing list and if so, to continue on going through the binary tree
    next(){
        if(!this.hasNext()){
            console.log("ERROR");
        }

        let currNode = this.#traversingList.pop();

        if(currNode.right != null){
            this.goLeft(currNode.right);
        }
        
        return currNode;
    }

}

//Is used to filter the courses
function filterCourses(){
    const filter = document.getElementById("filter");

    filter.oninput = function(e){
        //Gets the filtered value from the filter
        let filterValue = document.getElementById("filter").value;
        console.log(filterValue);

        //creates an empty list and then runs function for filter in binary tree
        let list = [];
        console.log(list.length);
        list = tree.filterForSubject(filterValue);
        console.log(list.length);

        updateCards(list);
    }
}

//Is used to search up courses
function searchCourses(){

    var searchComponent = document.getElementById("searchPart");

    searchComponent.oninput = function(e){
        //Gets searched value from search bar
        let searchValue = document.getElementById("searchPart").value;

        //Creates an empty list and then runs the serach function in binary tree
        let list = [];
        list = tree.searchForNodeName(searchValue);
        
        //updates cards afterwards
        updateCards(list);
    }
}

//Is used to update the cards after search/filter
function updateCards(list){

    //Grabs all the necessary templates from the document.
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML="";
    const nextCardSection = document.querySelector(".card-section");
    let a = nextCardSection.cloneNode(true);
    const templateCard = document.querySelector(".card");

    let i = 0;

    for(let j = 0; j < list.length;j++){
        let node = list[j];
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, node.data.name, node.data.subject, node.data.fullCourseName, node.data.description);
        a.appendChild(nextCard);
        
        //Only have 3 inside of each card container to look nice
        if(i == 2){
            cardContainer.appendChild(a);
            a = nextCardSection.cloneNode(true);
            i=0;
        }
        else{
            i++;
        }
    }

    //If there are any left, add it to the last containter.
    if(i > 0){
        cardContainer.appendChild(a);
        a = nextCardSection.cloneNode(true);
    }
}

//Updates the favorites cards. Makes sure they are good. 

function updateFavorite(){
    //Grabs all the necessary templates from the document.
    const cardContainer = document.getElementById("favorite");
    const nextCardSection = document.querySelector(".card-section");
    const templateCard = document.querySelector(".card");
    let a = nextCardSection.cloneNode(true);
    
    cardContainer.innerHTML = "";
    a.innerHTML = "";

    let numberOfCards = 0;

    for(let i = 0; i < favCourses.length; i++){
        let node = tree.getNode(favCourses[i]);
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, node.data.name, node.data.subject, node.data.fullCourseName, node.data.description);
        a.appendChild(nextCard);

         //Only have 3 cards inside of each card container to look nice
        if(numberOfCards == 2){;
            cardContainer.appendChild(a);
            a = nextCardSection.cloneNode(true);
            //Resets the a html after clone due to overlap.
            a.innerHTML = "";

            numberOfCards=0;
        }
        else{
            numberOfCards++;
        }
    }

    if(numberOfCards > 0){
        cardContainer.appendChild(a);
        //nextCardSection.removeChild();
        a = nextCardSection.cloneNode(true);
    }
}

//Adds to the favorite list
function addToFavorite(){
    //Gets the button from the document
    const heart = document.getElementById("heartButton");

    heart.onclick = function(e){
            //Checks if hear is pressed and if so, it will update according
            var a = document.querySelector(".popup");
            var name = a.querySelector("p").querySelector("h2").innerHTML;

    if(heart.style.color == "red"){
        heart.style.color = "white";
        let index = favCourses.indexOf(name);
        favCourses.splice(index, 1); // To remove from favorite list
        console.log(favCourses.length);
    }
    else{
        heart.style.color = "red";
        favCourses.push(name); //To add to favorite list
        console.log(favCourses.length);
    }    

    //updates the favorites after clicked. 
    updateFavorite();
        
    };
}

let x;
//Collects all the information and puts it into the binary tree for storage. 
function gettingInfo(){

    tree = new BinaryTree();
    for(let i = 0; i < courses.length;i++){
        for(let j = 0; j < courses[i].length;j++){
            let data = new CourseData(courses[i][j], subjects[i], courseName[i][j], courseDes[i][j]);
            tree.insertNode(data);
        }
    }
    console.log(tree.getSize());
    showCards();
    popUp();
    closeButton();
    addToFavorite();
    filterCourses();
    searchCourses();

}

// This function adds cards the page to display the data in the array
function showCards() {
    //console.log(tree.getSize());
    const cardContainer = document.getElementById("card-container");
    //const copyCardSection = document.getElementById("card-section");
    const nextCardSection = document.querySelector(".card-section");
    //cardContainer.innerHTML = "";
    let a = nextCardSection.cloneNode(true);
    const templateCard = document.querySelector(".card");
    

    console.log("I AM DOING A SHOW CARD");

    let i = 0;

    while(tree.hasNext()){
        let node = tree.next();
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, node.data.name, node.data.subject, node.data.fullCourseName, node.data.description);
        a.appendChild(nextCard);
        
        if(i == 2){
            //a = nextCardSection.cloneNode(true);
            cardContainer.appendChild(a);
            //nextCardSection.removeChild();
            a = nextCardSection.cloneNode(true);

            //nextCardSection = cardContainer.firstChild.cloneNode(true);
            i=0;
        }
        else{
            i++;
        }
    }

    if(i > 0){
        cardContainer.appendChild(a);
        //nextCardSection.removeChild();
        a = nextCardSection.cloneNode(true);
    }
}

function closeButton(){
    var closeBtn = document.getElementById("closebtn");

    closeBtn.onclick = function(e){
        console.log("HIHIHIHI");
        var a = document.querySelector(".popup");
        a.style.display = "none";
        const heart = document.getElementById("heartButton");
        heart.style.color = "white";
    }



}

//Shows the pop up icon and updates each of the cards
function popUp(){
    var listItems = document.querySelectorAll(".card");
    console.log(listItems.length); 
    
    listItems.forEach(function(item) {
        item.onclick = function(e) {
           var a = document.querySelector(".popup");
           a.style.display ="flex";
           a.style.justifyContent =  "center";

           var textBox = document.getElementById("TEXTFORPOPUP");
           textBox.innerHTML = item.innerHTML;
           textBox.style = "background: linear-gradient(90deg, rgba(110,210,247,0.5804446778711485) 0%, rgba(84,203,252,0.24711134453781514) 100%);"

           var text = textBox.querySelector(".card-content");
           if(a.querySelector("p").querySelector("h3").innerHTML == "Art" ){
                text.style.color = "black";
           }
           else{
                text.style.color="yellow";
           }
            text.style.fontWeight = "900";

           var boxForContent = document.querySelector(".popup-content");
           console.log(a.querySelector("p").querySelector("h3").innerHTML);
           boxForContent.style.backgroundImage = "url('ImageFiles/ImagesForCards/" + a.querySelector("p").querySelector("h3").innerHTML + ".jpg')";
           boxForContent.style.backgroundRepeat = "no-repeat";
           boxForContent.style.backgroundSize = "cover";



           const cardDescriptor = a.querySelector("p").querySelector("p");
           cardDescriptor.style.display = "block";
           var name = a.querySelector("p").querySelector("h2").innerHTML;
           var subject = a.querySelector("p").querySelector("h4").innerHTML;
           const heart = document.getElementById("heartButton");
           console.log(name);
           if(favCourses.length != 0){
                console.log(favCourses[0]);
           }

           if(favCourses.indexOf(name) > -1){
                console.log("HELLO");
                heart.style.color ="red";
           }
           else{
                heart.style.color ="white";
           }
           
        }
    });

}

//Closes the popup when clicked
// function closeButton(){
//     var a = document.querySelector(".popup");
//     a.style.display = "none";
//     const heart = document.getElementById("heartButton");
//     heart.style.color = "white";
// }

//Creates each of the cards and adds the content.
async function editCardContent(card, courseTitle, subject, nameTitle, description) {
    console.log("HIHIIHIHI");
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    const cardSecondHeader = card.querySelector("h3");
    const cardName = card.querySelector("h4");
    const cardDescriptor = card.querySelector("p");
    cardDescriptor.style.display = "none";
    cardHeader.textContent = courseTitle;
    cardSecondHeader.textContent = subject;
    cardName.textContent = nameTitle;
    //console.log(courseTitle.replace(/\s/g, ""));
    readData = await read();//.then(function(value) {readData= value;});
    console.log(readData);
    cardDescriptor.textContent = readData;
    

}

//Onload, get the information for the binary tree.
document.addEventListener("DOMContentLoaded", gettingInfo);
