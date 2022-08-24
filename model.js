function inputT(question,answerA,answerB,answerC,correct){
    this.question = question,
    this.answerA = answerA,
    this.answerB = answerB,
    this.answerC= answerC,
    this.correct = correct 

}

function studentExam(stExam,points){
    this.stExam = stExam,
    this.points = points

}

const model = {
    //app
    app :{
        currentPage: "Main", //'teacher', ''

    },
   

    //inputs
    inputTeacher : new inputT('','','','',''),

    

  

    //data
    data:{ 
        examReady : false ,
        examCreate : [
   

        ],
    },
   
    exame : new studentExam([],0)
  

  
}