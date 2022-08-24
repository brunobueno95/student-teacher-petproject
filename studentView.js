function updateViewStudent(){
   let html='';
    html = `
    <button onclick="updateViewMain()">Go back to Main</button>
    <h1>EXAM</h1>`

    if(model.data.examReady = true){
        
    for(i=0;i<model.data.examCreate.length;i++){
        html += `
    <div>
        <div>${model.data.examCreate[i].question}</div>
        ${model.data.examCreate[i].answerA}<input type=radio value="A" name="answer${[i]}" onchange="model.exame.stExam[${i}] = this.value"><br>
        ${model.data.examCreate[i].answerB}<input type=radio value="B" name="answer${[i]}" onchange="model.exame.stExam[${i}] = this.value"><br>
        ${model.data.examCreate[i].answerC}<input type=radio value="C" name="answer${[i]}" onchange="model.exame.stExam[${i}] = this.value"><br>
        <br>
        
    
    </div>
    ` }}

    
   html+= `<br>
   <button onclick="CheckAnswers()">Send your Exam</button>
   <button onclick="showResult()">Get result</button>
    `
    document.getElementById('app').innerHTML = html
}













// function showExam() {
//     if(model.data.examReady = true){
//         let html = '';
//     for(i=0;i<model.data.examCreate.length;i++){
//         html += `
//     <div>
//         <div>${model.data.examCreate[i].question}</div>
//         ${model.data.examCreate[i].answerA}<input type=radio name="answer"><br>
//         ${model.data.examCreate[i].answerB}<input type=radio name="answer"><br>
//         ${model.data.examCreate[i].answerC}<input type=radio name="answer"><br>
    
//     </div>
//     ` 
//     return html;
//     }
//     }
// }