//This scripts helps manage the courses and keeps track of that information.

function gettingInfo(){
    
}

window.onload = gettingInfo();

//This class here helps store and hold onto Course Data.
class CourseData {
    constructor(courseName, courseSubject, courseDescription){
        this.name = courseName;
        this.subject = courseSubject;
        this.description = courseDescription;
    }
}

//This Node is needed to make the binary tree
class Node{
    constructor(CourseData){
        this.data = CourseData;
        this.left = null;
        this.right = null;
    }
}

//This is the binary tree which keeps track of all the data
class BinaryTree {

    //Constructor helps build the binary tree to store data
    constructor(){
        this.root = null;
    }

    //Used for inserting the Node for the data being entered
    insertNode(CourseData){
        if(this.root == null){
            this.root = new Node(CourseData);
        }
        else{
            const node = this.root;
            this.searchForNode(node, CourseData);
        }
    }

    //Helper function for insert node to look for node recursively
    searchForNode(node, CourseData){
        if(CourseData.name < node.data.name){
            if(node.left == null){
                node.left = new Node(CourseData);
            }
            else{
                this.searchForNode(node.left, CourseData);
            }
        }
        else if(CourseData.name > node.data.name){
            if(node.right == null){
                node.right = new Node(CourseData);
            }
            else{
                this.searchForNode(node.right, CourseData);
            }
        }
        else{
            //Should not run but good for debuging
            console.log("We already have this course");
        }
    }

    //A filter that filters for subject
    filterForSubject(inputSubject){
        listOfCourses = [];

        if(this.root.data.subject == subject){
            listOfCourses.push(root);
        }
        if(this.root.left != null){
            this.filterForSubjectNodes(listOfCourses, root.left, inputSubject);
        }
        if(this.root.right != null){
            this.filterForSubjectNodes(listOfCourses, root.right, inputSubject);
        }

        return listOfCourses;
    }

    //A helper function that filters for subject
    filterForSubjectNodes(list, node, subject){
        if(node.left.subject == subject){
            list.push(node.left);
        }
        if(node.right.subject == subject){
            list.push(node.left);
        }

        if(node.left != null){
            this.filterForSubjectNodes(listOfCourses, node.left, inputSubject);
        }
        if(node.right != null){
            this.filterForSubjectNodes(listOfCourses, node.right, inputSubject);
        }
    }


}

function filterCourses(){
    c = document.getElementById("searchPart").value;
    console.log(c);
    list = [];
    list = filterForSubject(value);
}

function findCourse(){

}

function addCourseToFav(){

}

function removeCourseFromFav(){

}

