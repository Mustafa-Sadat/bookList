const list=document.querySelector("#content ul");

list.addEventListener("click",(btn)=>{
    if(btn.target.className="delete"){
        let li=btn.target.parentElement;
        list.removeChild(li);
    }
})


const addform=document.forms['add'];

addform.addEventListener("submit",(add)=>{
    add.preventDefault();

    let val=addform.querySelector('input[type="text"]').value;
    
    const li=document.createElement("li");
    const bookName=document.createElement("span");
    bookName.textContent=val;
    bookName.className="name";
    const del=document.createElement("span");
    del.textContent="delete"
    del.className="delete";

    li.appendChild(bookName);
    li.appendChild(del);

    list.appendChild(li);
})



const hideBox=document.querySelector("#hide");
hideBox.addEventListener("change",()=>{

    if(hideBox.checked){
        list.style.display="none";
    }
    else{
        list.style.display="block";
    }

})


const search=document.forms["search-book"].querySelector("input");
search.addEventListener("keyup",(e)=>{

    const index=e.target.value.toLowerCase();
    const books=list.getElementsByTagName("li");
    Array.from(books).forEach((b)=>{
        const title=b.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(index) !=-1){
            b.style.display="block";
        }
        else{
           b.style.display="none";
        }
    });
    
})