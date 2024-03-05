const questions =[
    {
        'que':'Which is the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'React',
        'correct':'a'
    },
    {
        'que':'What is Year was javaScript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'que':'What does CSS stands for?',
        'a':'Hpyertext markup language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'none of the above',
        'correct':'b'
    },

]
let index =0;
let total = questions.length;
let right = 0,wrong =0;
const queBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.options');
const loadQuestion =()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
   // console.log(data);
    queBox.innerText =`${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText =data.a;
    optionInput[1].nextElementSibling.innerText =data.b;
    optionInput[2].nextElementSibling.innerText =data.c;
    optionInput[3].nextElementSibling.innerText =data.d;

}
const submitQuiz = ()=>{
    const data = questions[index]
    const ans = getAnswer();
    if(ans ===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer =input.value;
            }
        }
    )
    return answer;
}
const reset = ()=>{
    optionInput.forEach(
        (input)=>{
            input.checked =false;
        }
    )
}
const restartQuiz = () => {
    index = 0;
    right = 0;
    wrong = 0;
    loadQuestion();
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <div style="text-align:center">
            <h3>Thanks for playing the Quiz.</h3>
            <h2> ${right}/${total}</h2>
           
        </div>
    `;
}

//initial call
loadQuestion();