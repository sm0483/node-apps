// script
const textAreaIn=document.querySelector('.task-class');
const submitBtn=document.querySelector('.submit-btn');
const formIn=document.querySelector('.task-manager');
const footer=document.querySelector('.main-container-footer');

const cleanPage=()=>{
    footer.innerHTML="";
}

const removeData=async(id)=>{ //-->to remove data from db
    try{
        console.log(id);
        let rmFromDb=await axios.delete(`http://localhost:3000/api1/tasks/${id}`);
        cleanPage();
        loadData();
    }
    catch(err){
        console.log(err);
    }

}
const createBtn=(id)=>{ //-->create btn for all creted output
    //addeventlistner on edit button
    let btnEdit=document.querySelector(`#edit${id}`);
    btnEdit.addEventListener('click',()=>{
        console.log('edit button'); //remvoe data
        appendData(id);
    })

    //addeven on remove button

    let btnRemove=document.querySelector(`#remove${id}`);
    btnRemove.addEventListener('click',()=>{
        console.log('remove button');
        removeData(id);
    })


}


const loadDatatoPage=(dataSet)=>{
    for(let data of dataSet ){
    div=document.createElement('div');
    div.classList.add('task-list');
    let id=data._id;

    div.innerHTML=`  
    <h2>${data.name}</h2>
    <button class="to-edit" id="edit${id}"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="to-remove" id="remove${id}"><i class="fa-solid fa-trash"></i></button>
    `;
    footer.appendChild(div);
    createBtn(id);
}

}


const loadData=async ()=>{
    try{
        let result=await axios.get('http://localhost:3000/api1/tasks/');
        console.log(result.data);
        loadDatatoPage(result.data) //--->get all data to html
    }
    catch(err){
        console.log(err);
    }
}


const getTask=()=>{
    formIn.addEventListener('submit',(event)=>{
        event.preventDefault();
        loadData();
         
    })

}

getTask();
loadData();


