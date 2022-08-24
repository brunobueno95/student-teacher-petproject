function sendQuestions() {
   //model.inputTeacher.answers.push(answerA,answerB,answerC)
   //updateview()
    model.data.examCreate.push(new inputT(model.inputTeacher.question,
                                         model.inputTeacher.answerA,   
                                         model.inputTeacher.answerB,
                                         model.inputTeacher.answerC,
                                         model.inputTeacher.correct ) )
    updateView()
}

function SendExam(){
    model.data.examReady = true;


}