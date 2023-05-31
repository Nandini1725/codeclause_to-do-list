const input = document.getElementById("input")
const column = document.querySelector(".column")
const btn = document.querySelector(".btn")

btn.addEventListener('click', () => {
    
    if(input.value.trim() !==0){
        let newB = document.createElement('div')
        newB.classList.add('task');
        newB.innerHTML=`
        <p>${input.value}</p>
        <div class="icons">
            <i class="fa-solid fa-pen-to-square"></i>/
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        column.appendChild(newB);
        input.value = '';
    }
    else{
        alert("enter the task")
    }
    
})

column.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove()
    }
})

column.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})