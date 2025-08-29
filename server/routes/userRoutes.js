import express from 'express'
import { acceptConnectionRequests, discoverUsers, followUser, getUserConnection, getUserData, getUserProfiles, sendConnectionRequest, unfollowUser, updateUserData } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';
import { upload } from '../configs/multer.js';
import { getUserRecentMessage } from '../controllers/messageController.js';

const userRouter = express.Router();

userRouter.get('/data', protect, getUserData)
userRouter.post('/update', upload.fields([{name: 'profile', maxCount: 1},{name: 'cover', maxCount: 1}]), protect, updateUserData)
userRouter.post('/discover', protect, discoverUsers)
userRouter.post('/follow', protect, followUser)
userRouter.post('/unfollow', protect, unfollowUser)
userRouter.post('/connect', protect, sendConnectionRequest)
userRouter.post('/accept', protect, acceptConnectionRequests)
userRouter.get('/connections', protect, getUserConnection)
userRouter.post('/profiles', protect, getUserProfiles)
userRouter.post('/recent-messages', protect, getUserRecentMessage)

userRouter.post('/profiles', getUserProfiles)
export default userRouter