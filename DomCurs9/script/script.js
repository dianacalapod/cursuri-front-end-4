var commentsList = document.getElementById ('comments-list');
console.log(commentsList); //null

window.addEventListener("load",onHtmlLoaded );

function onHtmlLoaded() {
 var commentsList = document.getElementById ('comments-list');
console.log(commentsList); // the element...
  
  console.log ("comments items",
               document.getElementsByClassName("comment-item"));
  
  console.log("comments items by tag", document.getElementsByTagName("section"));
  
  var commentItems = document.getElementsByTagName("section");
  console.log("first comment item", commentItems[0]);
  console.log("second comment item", commentItems[1]);
  
  console.log("first paragraph inside section", document.querySelector("selection.comment-item > p"));
  console.log("all paragraphs inside section", document.querySelectorAll("selection.comment-item > p"));
          
    
}

