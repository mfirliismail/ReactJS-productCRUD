const { Product } = require('../models')

module.exports = {
    createProduct: async(req, res) => {
        try {
            let data = req.body
            const createProduct = await Product.create(data)
            if(!createProduct){
                return res.status(403).json({
                    status: "failed",
                    message: "Forbidden, cannot create produk"
                })
            }

            return res.status(200).json({
                status: "success",
                message: "success create produk"
            })
            
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: "internal server error"
            })
        }
    },
    getAllProducts: async(req, res) => {
        try {
          const findAllProducts = await Product.findAll()
          return res.status(200).json({
              status: "success",
              data: findAllProducts
          })
            
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: "internal server error"
            })
        }
    },
    getProductById: async(req, res) => {
        try {
            let { id } = req.params
            const findOneProduct = await Product.findOne({
                where: {
                    id
                }
            })

            if(!findOneProduct){
                return res.status(404).json({
                    status: 'failed',
                    message: "cannot find product"
                })
            }
            return res.status(200).json({
                status: "success",
                data: findOneProduct
            })
              
          } catch (error) {
              console.log(error)
              return res.status(500).json({
                  status: "failed",
                  message: "internal server error"
              })
          }
    },

    updateProduct: async(req, res) => {
        try {
            let { id } = req.params
            let data = req.body

            const findOneProduct = await Product.update(data, {
                where: {
                    id
                }
            })

            if(!findOneProduct[0]){
                return res.status(404).json({
                    status: 'failed',
                    message: "cannot find product"
                })
            }

            return res.status(200).json({
                status: "success update"
            })
              
          } catch (error) {
              console.log(error)
              return res.status(500).json({
                  status: "failed",
                  message: "internal server error"
              })
          }
    },

    deleteProduct: async(req, res) => {
        try {
            let { id } = req.params
            const findOneProduct = await Product.destroy({
                where: {
                    id
                }
            })

            if(!findOneProduct){
                return res.status(400).json({
                    status: "cannot update product"
                })
            }
            
            return res.status(200).json({
                status: "success delete",
                data: findOneProduct
            })
              
          } catch (error) {
              return res.status(500).json({
                  status: "failed",
                  message: "internal server error"
              })
          }
    }
}