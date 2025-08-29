import express from 'express'
import { getChatMessage, sendMessage, sseController } from '../controllers/messageController.js';
import { protect } from '../middlewares/auth.js';
import { upload } from '../configs/multer.js';


const messageRouter = express.Router();

messageRouter.get('/:userId', sseController)
messageRouter.post('/send', upload.single('image'), protect, sendMessage)
messageRouter.get('/get', protect, getChatMessage)

export default messageRouter