const router = require('express').Router();

// Router yang tidak memerlukan access_token
const registerRouter = require('./registerRouter');
const loginRouter = require('./loginRouter');
const customerLoginRouter = require('./customerLoginRouter');
const customerRegisterRouter = require('./customerRegisterRouter');
const landingPageRouter = require('./landingPageRouter');


const customerSongsRouter = require('./customerSongsRouter');
const customerBookmarkRouter =  require('./customerBookmarkRouter');
const userRouter = require('./userRouter');
const songsRouter = require('./songsRouter');
const artistRouter = require('./artistRouter');
const logRouter = require('./logRouter');
const customerUserRouter = require('./customerUserRouter');


const authenticationMiddleware = require('../middlewares/authentication-middleware');
const errorHandlerMiddleware = require('../middlewares/errorHandler-middleware');
const isCustomer = require('../middlewares/isCostumer-middleware');

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/landing-page-assets', landingPageRouter);
router.use('/customer/login', customerLoginRouter);
router.use('/customer/register', customerRegisterRouter);

router.use('/songs', authenticationMiddleware, songsRouter);
router.use('/users', authenticationMiddleware, userRouter);
router.use('/artist', authenticationMiddleware, artistRouter);
router.use('/logs', authenticationMiddleware, logRouter);
router.use('/customer/songs', isCustomer, customerSongsRouter);
router.use('/customer/bookmark', isCustomer, customerBookmarkRouter);
router.use('/customer/users', isCustomer, customerUserRouter);

router.use(errorHandlerMiddleware);

module.exports = router;