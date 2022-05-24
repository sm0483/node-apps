const id=localStorage.getItem("_id");
const taskId=document.querySelector('.task-id-class');
const nameArea=document.querySelector('.edit-task');
const formDom=document.querySelector('.main-form');
const editBtn=document.querySelector('.edit-btn');
const completeDom=document.querySelector('.completed');

let presentStatus=undefined;
let presentTask=undefined;

const loadDatatoPage=(data)=>{
    //console.log(data);
    taskId.value=id;
    nameArea.value=data.name;
    completeDom.checked=data.completed;
    presentTask=data.name;
    presentStatus=data.completed;
}

const getData=async ()=>{
    try{
        data=await axios.get(`http://localhost:3000/api1/tasks/${id}`);
        loadDatatoPage(data.data[0])
    }
    catch(err){
        console.log(err);

    }
}


const updateTask=async(id,taskName,status)=>{
    try{
        updatedData=await axios.patch(`http://localhost:3000/api1/tasks/${id}`,{
            name:`${taskName}`,
            completed:`${status}`
        })
        console.log(updatedData);
    }
    catch(err){
        console.log(err);
    }

    
}

const getTask =()=>{
    formDom.addEventListener('submit',(event)=>{
        event.preventDefault();
        const changedTask=nameArea.value;
        const changedStatus=completeDom.checked;

        if(changedStatus!==presentStatus || changedTask!==presentTask){
            updateTask(id,changedTask,changedStatus);
        }


    })
   
    
}


getData();
getTask();

