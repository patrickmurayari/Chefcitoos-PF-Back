const server = require('express');
const router = server.Router();

const newAssessments = require('../controllers/createAssessments');
const verifyAssessment = require('../controllers/verifyAssessment');
const getComments = require('../controllers/getComments')
const getCommentsByCreations = require('../controllers/getCommentsByCreation')
const deleteComments = require('../controllers/deleteComments')

router.post('/', async (req, res) => {
    try {
        const id= 'wedwedwwwwwwwwwwwwwwww';
        const { creation_id, user_id, content, vote, img } = req.body;
        console.log({ creation_id, user_id, content, vote, img })
        const createAssessments = await newAssessments({ creation_id, user_id, content, vote, img })
        res.status(200).send(createAssessments);
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message });
    }
})

// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedCreation = await deleteCreation(id)
//         res.status(200).send(deletedCreation);
//     } catch (error) {
//         res.status(400).send({ error: error.message })
//     }
// })

router.get('/comments/:id', async (req, res) => {
    try {
        const id = req.params;
        const comments = await getComments(id)
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/validateAssessment', async (req, res) => {
    try {
        const { creation_id, user_id } = req.body;
        const isCreated = await verifyAssessment({creation_id, user_id});
        res.status(200).send(isCreated);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params;
        const isCreated = await getCommentsByCreations(id);
        res.status(200).send(isCreated);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params;
        console.log(id);
        const commentsDelete = await deleteComments(id);
        res.status(200).send(commentsDelete);
    } catch (error) {
        console.log('error1', error);
        res.status(400).send({ error: error.message });
    }
})




module.exports = router;