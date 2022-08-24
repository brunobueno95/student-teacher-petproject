function updateViewTeacher() {
    let html = ''
    html = `
   <button onclick="studentPage()">Go to Student Page</button><button onclick="updateViewMain()">Go back to Main</button>
   <hr>
   Questions - <input type="text" oninput="model.inputTeacher.question = this.value"><br>
   Answer A - <input type ="text" oninput="model.inputTeacher.answerA = this.value">
   correct <input  type="radio"  name="correct" value="A" onchange="model.inputTeacher.correct  = this.value"><br>
   
   Answer B - <input type ="text" oninput="model.inputTeacher.answerB = this.value">
   correct <input type=radio name="correct" value="B" onchange="model.inputTeacher.correct = this.value"><br>
   
   Answer C - <input type ="text" oninput="model.inputTeacher.answerC = this.value">
   correct <input type=radio name="correct" value="C" onchange="model.inputTeacher.correct = this.value"><br>
   
   <button onclick="sendQuestions()">Send Questions</button>`
    for (i = 0; i < model.data.examCreate.length; i++ ){
        html += `
    <div>
        <div>${model.data.examCreate[i].question}</div>
        ${model.data.examCreate[i].answerA}<input type=radio name="answer${[i]}"><br>
        ${model.data.examCreate[i].answerB}<input type=radio name="answer${[i]}"><br>
        ${model.data.examCreate[i].answerC}<input type=radio name="answer${[i]}"><br>
    
     </div>
    `}
   
   html += `<button onclick="SendExam()">Send Exam</button>
   `
   document.getElementById('app').innerHTML = html
}




















// function createTeachersPage() {
//     let html = '';
//     // for(i = 0; i < model.data.examCreate.length; i++ ){
//     //     html += `
//     // <div>
//     //     <div>${model.data.examCreate[i].question}</div>
//     //     ${model.data.examCreate[i].answerA}<input type=radio name="answer"><br>
//     //     ${model.data.examCreate[i].answerB}<input type=radio name="answer"><br>
//     //     ${model.data.examCreate[i].answerC}<input type=radio name="answer"><br>
    
//     // </div>
//     ` 
//     return html;
//     }
    

// }


