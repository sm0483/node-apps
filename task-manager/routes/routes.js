const express=require('express');
const app=express();
const router=express.Router();
const {
    getTask,
    getTaskById,
    editTask,
    deleteTask,
    createTask
}=require('../controller/controller');
router.route('/:id').get(getTaskById).patch(editTask).delete(deleteTask);
router.route('/').get(getTask).post(createTask);
module.exports=router;

