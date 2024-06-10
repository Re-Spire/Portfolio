let form = document.querySelector("form");

form.addEventListener("submit", function (event) 
{
  event.preventDefault();
  fieldEmptyAddComment();
});

// ajout de l'html apres les autres
function displayNewComment(firstName, lastName, messages) 
{
  let getComment = document.getElementById("comment-list");
  let createDiv = document.createElement("div");
  let contentHtml = `<div class="flex-1 py-10 border-t border-gray-200">
  <h3 class="font-medium text-gray-900">${firstName + " " + lastName}</h3>
  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
      <p>${messages}</p>
  </div>
</div>`;

  createDiv.innerHTML = contentHtml;
  getComment.appendChild(createDiv);
}

// mesage d'erreur champ vide

function fieldEmptyAddComment() 
{
  let messages = document.getElementById("message").value;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;

  if (firstName == "" || lastName == "" || messages == "") {
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    displayNewComment(firstName, lastName, messages);
    form.reset();
  }
}