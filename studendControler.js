function CheckAnswers(){
    for(i=0; i<model.data.examCreate.length; i++){
        if(model.data.examCreate[i].correct == model.exame.stExam[i]) {
            model.exame.points += 1
            console.log(model.exame.points)
        }
    }
}


function showResult(){
    
    updateViewStudentResult()
}