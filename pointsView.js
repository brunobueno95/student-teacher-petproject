function updateViewStudentResult(){
    document.getElementById('app').innerHTML =`
    <h1>${model.exame.points} of ${model.data.examCreate.length}</h1>
    `

}