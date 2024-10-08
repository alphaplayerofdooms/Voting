const express=require('express');
const router=express.Router();
const {createPoll,
    getPolls,
    getPoll,
    updatePoll,
    stopVoting,
    deletePoll}=require('../controllers/poll');

router.get('/getpolls',getPolls);
router.get('/pollbyId',getPoll);    
router.post('/createpoll',createPoll);
router.put('/updatepoll',updatePoll);
router.delete('/deletepoll',deletePoll);
router.put('/stopvoting',stopVoting);

module.exports=router;