function addNewSkill() {
    event.preventDefault();
    let newSkill = document.createElement('input')
    newSkill.type = 'text';
    newSkill.classList.add('form-control')
    newSkill.classList.add('skillInput')
    newSkill.setAttribute('placeholder', 'Enter your skill')

    let lineBreak = document.createElement('br')

    let allSkills = document.querySelector('#allskills')
    let addMBtn = document.querySelector('#skillbtn')

    allSkills.insertBefore(newSkill, addMBtn)
    allSkills.insertBefore(lineBreak, addMBtn);

}


function addnewEdu() {
    // Create a new div element for the education fields
    var newEducationDiv = document.createElement("div");
    newEducationDiv.classList.add("education", "form-group");

    // Create labels and input elements for course, college, and year
    var courseLabel = document.createElement("label");
    courseLabel.setAttribute("for", "course");
    courseLabel.textContent = "Course/Class";

    var courseInput = document.createElement("input");
    courseInput.setAttribute("type", "text");
    courseInput.setAttribute("name", "course");
    courseInput.setAttribute('id', 'course')

    var collegeLabel = document.createElement("label");
    collegeLabel.setAttribute("for", "college");
    collegeLabel.textContent = "College";

    var collegeInput = document.createElement("input");
    collegeInput.setAttribute("type", "text");
    collegeInput.setAttribute("name", "college");
    collegeInput.setAttribute('id', 'collage')

    var yearLabel = document.createElement("label");
    yearLabel.style.marginLeft = "60px";
    yearLabel.setAttribute("for", "year");
    yearLabel.textContent = "Year";

    var yearInput = document.createElement("input");
    yearInput.setAttribute("type", "number");
    yearInput.setAttribute("name", "year");
    yearInput.setAttribute('id', 'year')

    // Append labels and input elements to the newEducationDiv
    newEducationDiv.appendChild(courseLabel);
    newEducationDiv.appendChild(courseInput);
    newEducationDiv.appendChild(collegeLabel);
    newEducationDiv.appendChild(collegeInput);
    newEducationDiv.appendChild(document.createElement("br"));
    newEducationDiv.appendChild(document.createElement("br"));
    newEducationDiv.appendChild(yearLabel);
    newEducationDiv.appendChild(yearInput);
    newEducationDiv.appendChild(document.createElement("br"));
    newEducationDiv.appendChild(document.createElement("br"));

    // Append the newEducationDiv to the educationContainer
    var educationContainer = document.getElementById("educationContainer");
    educationContainer.appendChild(newEducationDiv);
}



function addnewWe() {
    // Create a new div element for the work experience fields
    var newWeDiv = document.createElement("div");
    newWeDiv.classList.add("weform", "form-group");

    // Create labels and input elements for industry, job role, and month/year
    var industryLabel = document.createElement("label");
    industryLabel.setAttribute("for", "industry");
    industryLabel.textContent = "Industry Name";

    var industryInput = document.createElement("input");
    industryInput.setAttribute("type", "text");
    industryInput.setAttribute("name", "industry");
    industryInput.setAttribute('id', 'industry')
    industryInput.classList.add("form-control");

    var jobRoleLabel = document.createElement("label");
    jobRoleLabel.setAttribute("for", "jobrole");
    jobRoleLabel.textContent = "Job Role";

    var jobRoleInput = document.createElement("input");
    jobRoleInput.setAttribute("type", "text");
    jobRoleInput.setAttribute("name", "jobrole");
    jobRoleInput.setAttribute('id', 'jobrole')
    jobRoleInput.classList.add("form-control");

    var monthYearLabel = document.createElement("label");
    monthYearLabel.setAttribute("for", "year");
    monthYearLabel.textContent = "Month/Year";

    var monthYearInput = document.createElement("input");
    monthYearInput.setAttribute("type", "text");
    monthYearInput.setAttribute("name", "year");
    monthYearInput.setAttribute('id', 'year')
    monthYearInput.classList.add("form-control");

    // Append labels and input elements to the newWeDiv
    newWeDiv.appendChild(industryLabel);
    newWeDiv.appendChild(industryInput);
    newWeDiv.appendChild(jobRoleLabel);
    newWeDiv.appendChild(jobRoleInput);
    newWeDiv.appendChild(monthYearLabel);
    newWeDiv.appendChild(monthYearInput);

    // Append the newWeDiv to the workExperienceContainer
    var workExperienceContainer = document.getElementById("workExperienceContainer");
    workExperienceContainer.appendChild(newWeDiv);
}



function addnewLBtn() {
    let newLBtn = document.createElement('input');
    let lineBreak = document.createElement('br')

    newLBtn.classList.add('lang');
    newLBtn.classList.add('form-control');



    let addBtn = document.getElementById('lanBtn');
    let allLan = document.querySelector('.langForm');


    allLan.insertBefore(newLBtn, addBtn);
    allLan.insertBefore(lineBreak, addBtn);




}


// Generating CV

// let allDetails = document.querySelector('.alldetails');
function generateCV() {

    // personal info

    document.getElementById('nameT').innerHTML = document.getElementById('name').value

    document.getElementById('contactT').innerHTML = document.getElementById('contact').value

    document.getElementById('emailT').innerHTML = document.getElementById('email').value

    document.getElementById('addressT').innerHTML = document.getElementById('address').value

    document.getElementById('fblinkT').innerHTML = document.getElementById('fblink').value


    // skills


    let allSkills = document.querySelectorAll('.skillInput');

    let str = ''

    for (let skill of allSkills) {
        str = str + `<li> ${skill.value} </li>`;
    }
    document.getElementById('allskillsT').innerHTML = str;


    // about me

    document.getElementById('aboutmeT').innerHTML = document.getElementById('aboutme').value


    // Education 

    let course = document.querySelectorAll('#course');
    let collage = document.querySelectorAll('#collage');
    let year = document.querySelectorAll('#year');

    let strcourse = '';
    let strcollage = '';
    let stryear = '';

    for (let i = 0; i < course.length; i++) {
        strcourse += `<label>${course[i].value} </label>`;
        strcollage += `<label>${collage[i].value} </label>`;
        stryear += `<label>${year[i].value} </label>`;
    }
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('educationfields');
    // separate this letter while designing
    document.querySelector('.ecr').innerHTML = strcourse;
    document.querySelector('.ecg').innerHTML = strcollage;
    document.querySelector('.ey').innerHTML = stryear;



    // Trainings and Work Experiance

    let industry = document.querySelectorAll('#industry');
    let jobRole = document.querySelectorAll('#jobrole');
    let yearMonth = document.querySelectorAll('#year');

    let strind = '';
    let strjob = '';
    let strym = '';

    for (i = 0; i < industry.length; i++) {
        strind += `<label>${industry[i].value} </label>`
        strjob += `<label>${jobRole[i].value} </label>`;
        strym += `<label>${yearMonth[i].value} </label>`;
    }

    document.querySelector('.TWfields').innerHTML = strind + strjob + strym;


    // projects

    document.getElementById('projectT').innerHTML = document.getElementById('projects').value

    // hobbies

    document.querySelector('.hobbiesT').innerHTML = document.getElementById('hobbies').value

    // languages

    let languages = document.querySelectorAll('.lang')
    let strlan = '';
    for (let allLan of languages) {
        strlan = strlan + `<label>${allLan.value}</label><br>`
    }

   let lanobj = document.querySelector('.langT');
   lanobj.innerHTML = strlan

   document.querySelector('.alldetails').style.display = 'none';
   document.querySelector('.containerT').style.display = 'flex';
}

