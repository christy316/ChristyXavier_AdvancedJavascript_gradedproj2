function preventBack(){
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload=function(){null};
var resumeList;

var br = document.createElement("br");

var x = 0;

function loadData(resumeList, x) {
  var modal_tab = document.getElementById("modal");
  modal_tab.style.visibility = "hidden";

  var search_tab = document.getElementById("search_tab");

  var search = document.createElement("input");

  var search_tab = document.getElementById("next-button");
  var nextButton = document.createElement("button");
  nextButton.id = "buttonId";
  nextButton.innerText = "Next";
  search_tab.appendChild(nextButton);

  var previousButton = document.getElementById("previous-button");
  var prevButton = document.createElement("button");
  prevButton.id = "PrevbuttonId";
  prevButton.innerText = "Prev";
  prevButton.style.visibility = "hidden";
  previousButton.appendChild(prevButton);

  var header = document.createElement("h1");
  header.innerText = resumeList[x]["basics"]["name"];
  header.id = "nameTag";

  var resumeHeaderTag = document.getElementById("resume-header-id");
  resumeHeaderTag.append(header);

  var appliedFor = document.createElement("h4");
  appliedFor.innerText =
    "Applied For: " + resumeList[x]["basics"]["AppliedFor"];
  appliedFor.id = "appliedForTag";

  var resumeNavTag = document.getElementById("resume-header");
  resumeNavTag.append(appliedFor);

  var personalInfoTag = document.getElementById("personal-info");
  var phoneNode = document.createTextNode(resumeList[x]["basics"]["phone"]);

  var emailNode = document.createTextNode(resumeList[x]["basics"]["email"]);
  personalInfoTag.append(phoneNode, br, emailNode);

  var techinalSkillTag = document.getElementById("technical-skill");
  var arry = resumeList[x]["skills"]["keywords"];

  for (var j = 0; j < arry.length; j++) {
    techinalSkillTag.append(
      document.createTextNode(arry[j]),
      document.createElement("br")
    );
  }

  var hobbiesTag = document.getElementById("hobbies");
  var hobbies = resumeList[x]["interests"]["hobbies"];
  for (var j = 0; j < arry.length; j++) {
    hobbiesTag.append(
      document.createTextNode(hobbies[j]),
      document.createElement("br")
    );
  }

  var resumeContentTag = document.getElementById("resume-main-content");
  var companyInfoObj = resumeList[x]["work"];

  var previousCompany = document.createElement("p");
  previousCompany.id = "previousCompanyTag";

  for (let content in companyInfoObj) {
    previousCompany.innerHTML +=
      "<b>" + content + ":</b> " + companyInfoObj[content] + "<br/><br/>";
  }

  resumeContentTag.appendChild(previousCompany);

  var resumeContentTag = document.getElementById("project-Content");

  var projectTag = document.createElement("p");
  projectTag.id = "projectTag";
  projectTag.innerHTML =
    "<b>" +
    resumeList[x]["projects"]["name"] +
    "</b> : " +
    resumeList[x]["projects"]["description"];

  resumeContentTag.appendChild(projectTag);

  var ugTag = document.getElementById("ug");

  var educationArry = resumeList[x]["education"]["UG"];

  ugTag.innerHTML =
    "<b>UG </b>: " +
    educationArry["institute"] +
    ", " +
    educationArry["course"] +
    ", " +
    educationArry["Start Date"] +
    ", " +
    educationArry["End Date"] +
    ", " +
    educationArry["cgpa"];

  var puTag = document.getElementById("pu");

  var PuObj = resumeList[x]["education"]["Senior Secondary"];

  puTag.innerHTML = "<b>PU </b>: " + PuObj["institute"] + ", " + PuObj["cgpa"];

  var highSchoolTag = document.getElementById("highSchool");

  var highSchoolObj = resumeList[x]["education"]["Senior Secondary"];

  highSchoolTag.innerHTML =
    "<b>High School </b>: " +
    highSchoolObj["institute"] +
    ", " +
    highSchoolObj["cgpa"];

  var internListTag = document.getElementById("internship-content");

  var internShipObj = resumeList[x]["Internship"];

  for (let intern in internShipObj) {
    var liTag = document.createElement("li");
    liTag.innerHTML = "<b>" + intern + "</b> : " + internShipObj[intern];
    internListTag.appendChild(liTag);
  }

  var internListTag = document.getElementById("achievement-content");

  var achievementsList = document.createElement("li");
  achievementsList.id = "achievementlist";
  achievementsList.innerHTML = resumeList[x]["achievements"]["Summary"];

  internListTag.appendChild(achievementsList);
}
function display(displayList, i) {
  let nameTage = document.getElementById("nameTag");
  nameTage.innerHTML = displayList[i]["basics"]["name"];

  let appliedForTag = document.getElementById("appliedForTag");
  appliedForTag.innerHTML =
    "Applied For: " + displayList[i]["basics"]["AppliedFor"];

  let personalInfo = document.getElementById("personal-info");
  personalInfo.innerHTML = "";
  var phoneNode = document.createTextNode(displayList[i]["basics"]["phone"]);

  var emailNode = document.createTextNode(displayList[i]["basics"]["email"]);
  personalInfo.append(phoneNode, br, emailNode);

  var techinalSkillTag = document.getElementById("technical-skill");
  techinalSkillTag.innerText = "";
  var arry = displayList[i]["skills"]["keywords"];

  for (var j = 0; j < arry.length; j++) {
    techinalSkillTag.append(
      document.createTextNode(arry[j]),
      document.createElement("br")
    );
  }

  var hobbiesTag = document.getElementById("hobbies");
  hobbiesTag.innerText = "";
  var hobbies = displayList[i]["interests"]["hobbies"];
  for (var j = 0; j < arry.length; j++) {
    hobbiesTag.append(
      document.createTextNode(hobbies[j]),
      document.createElement("br")
    );
  }

  var companyInfoObj = displayList[i]["work"];
  let previousCompany = document.getElementById("previousCompanyTag");
  previousCompany.innerHTML = "";
  for (let content in companyInfoObj) {
    previousCompany.innerHTML +=
      "<b>" + content + ":</b> " + companyInfoObj[content] + "<br/><br/>";
  }
  let projectTag = document.getElementById("projectTag");
  projectTag.innerHTML =
    "<b>" +
    displayList[i]["projects"]["name"] +
    "</b> : " +
    displayList[i]["projects"]["description"];

  var ugTag = document.getElementById("ug");

  var educationArry = displayList[i]["education"]["UG"];

  ugTag.innerHTML =
    "<b>UG </b>: " +
    educationArry["institute"] +
    ", " +
    educationArry["course"] +
    ", " +
    educationArry["Start Date"] +
    ", " +
    educationArry["End Date"] +
    ", " +
    educationArry["cgpa"];

  var puTag = document.getElementById("pu");

  var PuObj = displayList[i]["education"]["Senior Secondary"];

  puTag.innerHTML = "<b>PU </b>: " + PuObj["institute"] + ", " + PuObj["cgpa"];

  var highSchoolTag = document.getElementById("highSchool");

  var highSchoolObj = displayList[i]["education"]["Senior Secondary"];

  highSchoolTag.innerHTML =
    "<b>High School </b>: " +
    highSchoolObj["institute"] +
    ", " +
    highSchoolObj["cgpa"];

  var internListTag = document.getElementById("internship-content");
  internListTag.innerHTML = "";
  var internShipObj = displayList[i]["Internship"];

  for (let intern in internShipObj) {
    var liTag = document.createElement("li");
    liTag.innerHTML = "<b>" + intern + "</b> : " + internShipObj[intern];
    internListTag.appendChild(liTag);
  }

  var internListTag = document.getElementById("achievement-content");
  internListTag.innerHTML = "";

  var achievementsList = document.createElement("li");
  achievementsList.id = "achievementlist";
  achievementsList.innerHTML = displayList[i]["achievements"]["Summary"];

  internListTag.appendChild(achievementsList);
}

function resumeLoop(resumeList, x) {
  if (x > 0 && x < resumeList.length - 1) {
    document.getElementById("previous-button").style.visibility = "visible";
    document.getElementById("PrevbuttonId").style.visibility = "visible";
    document.getElementById("next-button").style.visibility = "visible";
  } else if (x < 1) {
    document.getElementById("previous-button").style.visibility = "hidden";
    document.getElementById("PrevbuttonId").style.visibility = "hidden";
    document.getElementById("next-button").style.visibility = "visible";
  } else if (x >= resumeList.length - 1) {
    document.getElementById("previous-button").style.visibility = "visible";
    document.getElementById("PrevbuttonId").style.visibility = "visible";
    document.getElementById("next-button").style.visibility = "hidden";
  }
  display(resumeList, x);
}

function filterfn() {
  let inputTag = document.getElementById("search-input").value;
  resumeList = JSON.parse(window.localStorage.getItem("resume"));
  if (inputTag == "") {

    var resumeInfo = document.getElementById("resume-content");
    resumeInfo.style.opacity = 1;
    document.getElementById("previous-button").style.visibility = "hidden";
    document.getElementById("PrevbuttonId").style.visibility = "hidden";
    document.getElementById("next-button").style.visibility = "visible";
    var modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    display(resumeList, 0);
  } else {
    resumeList = resumeList.filter(function (element) {
      if (
        element.basics.AppliedFor.toUpperCase().startsWith(
          inputTag.toUpperCase()
        )
      ) {
        return element;
      }
    });

    if (resumeList.length === 0) {
      var modal = document.getElementById("modal");
      modal.style.visibility = "visible";
      var resumeInfo = document.getElementById("resume-content");
      resumeInfo.style.opacity = 0;
      document.getElementById("previous-button").style.visibility = "hidden";
      document.getElementById("PrevbuttonId").style.visibility = "hidden";
      document.getElementById("next-button").style.visibility = "hidden";
    } else {
        
      x = 0;
      var resumeInfo = document.getElementById("resume-content");
      resumeInfo.style.opacity = 1;
      var modal = document.getElementById("modal");
      modal.style.visibility = "hidden";
      document.getElementById("previous-button").style.visibility = "hidden";
      document.getElementById("PrevbuttonId").style.visibility = "hidden";
      if (resumeList.length === 1) {
        document.getElementById("next-button").style.visibility = "hidden";
      }
      display(resumeList, x);
    }
  }
}
document.getElementById("next-button").addEventListener("click", function () {
  resumeLoop(resumeList, ++x);
});
document
  .getElementById("previous-button")
  .addEventListener("click", function () {
    resumeLoop(resumeList, --x);
  });
fetch("http://localhost:8000/resume/")
  .then((response) => response.json())
  .then(response => store(response)    
  );

  function store(json){
    window.localStorage.setItem("resume", JSON.stringify(json));  
  }
resumeList = JSON.parse(window.localStorage.getItem("resume"));

console.log("c" +resumeList)
if(resumeList==null){
  location.reload();
}
loadData(resumeList, 0);


