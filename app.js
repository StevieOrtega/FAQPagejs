const plusArray = document.getElementsByClassName("faq-query")
const faqs = document.getElementsByClassName('faq-answer')

Array.from(faqs).forEach((faq, index) => {
    faq.classList.add(index + 1, "hidden")
    
     
})

function openFaqs(num){
if(faqs[num].classList[2] == "hidden"){
    faqs[num].classList.remove('hidden')
}
else{
    faqs[num].classList.add('hidden')
}
}



Array.from(plusArray).forEach((plusBtn, index) =>{
    plusBtn.classList.add(index,)
    plusBtn.addEventListener('click', function(e){
    let queryNum = e.target.classList[1]

    openFaqs(queryNum)
})
})
