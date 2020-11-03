import router from '../config/router'
import * as UserController from '../controller/UserController'

router.post('/create',UserController.create_user)
router.get('/read/:id',UserController.read_user)
router.post('/update',UserController.update_user)
router.get('/delete/:id',UserController.delete_user)

module.exports = router;

