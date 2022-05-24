const textAreaIn=document.querySelector('.task-class');
const submitBtn=document.querySelector('.submit-btn');
const formIn=document.querySelector('.task-manager');
const footer=document.querySelector('.main-container-footer');

const cleanPage=()=>{ //--->clean all html under footer tag
    footer.innerHTML="";
}


const cleanTextArea=()=>{ //--->clean text area in search bar
    textAreaIn.value="";

}


const underlineTask=(id)=>{ //--> strike down the removed task
    const taskContainer=document.querySelector(`#text${id}`);
    taskContainer.classList.add('underline');

}

const removeData=async(id)=>{ //-->to remove data from db
    try{
        console.log(id);
        let rmFromDb=await axios.delete(`http://localhost:3000/api1/tasks/${id}`);
        console.log(rmFromDb);
        underlineTask(id);
    }
    catch(err){
        console.log(err);
    }

}

const editTask =(id)=>{
    //save data to local storage and operate on next page
    localStorage.clear();
    localStorage.setItem("_id",id);

}


const createBtn=(id)=>{ //-->create btn for all creted output
    //addeventlistner on edit button
    let btnEdit=document.querySelector(`#edit${id}`);
    btnEdit.addEventListener('click',()=>{
        console.log('edit button'); //remvoe data
        editTask(id);

    })

    //addeven on remove button

    let btnRemove=document.querySelector(`#remove${id}`);
    btnRemove.addEventListener('click',()=>{
        console.log('remove button');
        removeData(id);
    })


}


const loadDatatoPage=(dataSet)=>{
    cleanPage();
    for(let data of dataSet ){
    div=document.createElement('div');
    div.classList.add('task-list');
    let id=data._id;

    div.innerHTML=`  
    <h2 id="text${id}">${data.name}</h2>
    <a href="file:///home/user/Desktop/node/task-manager/views/task.html">
    <button class="to-edit" id="edit${id}"><i class="fa-solid fa-pen-to-square"></i></button>
    </a>
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

const createTask= async(data)=>{ //--->create a task on db
    try{
        let savedTask=await axios.post('http://localhost:3000/api1/tasks',{
            "name":`${data}`
        });
        console.log(savedTask);
        cleanTextArea();
        //cleanpage();
        loadData();
    }
    catch(err){
        console.log(err);
    }
}

const getTask=()=>{
    formIn.addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log(textAreaIn.value);
        createTask(textAreaIn.value);
        cleanPage();
        loadData();


         
    })

}

getTask();
loadData();


