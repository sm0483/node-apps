const express=require('express');
const app=express();
const router=express.Router();
const notAllow=require('../middleware/not-allow');
const {
    getTask,
    getTaskById,
    editTask,
    deleteTask,
    createTask
}=require('../controller/controller');
router.route('/:id').get(getTaskById).patch(editTask).delete(deleteTask).all(notAllow);
router.route('/').get(getTask).post(createTask).all(notAllow);
module.exports=router;

