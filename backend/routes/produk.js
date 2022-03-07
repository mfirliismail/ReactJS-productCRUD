const app = require('express')
const router = app.Router()
const productController = require('../controller/produkController')

router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/product/:id', productController.getProductById)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

module.exports = router