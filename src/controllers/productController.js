import Product from "../models/productController.js"


export const createProduct = async () =>{
    try {
        const {name, description, price, stock, catagory} = req.body();
        const newProduct = new Product({name, description, price, stock, catagory});
        await newProduct.save();
    } catch (error) {
        console.error(500).json({message:"Server error"});
    }
};

//Get all products

export const getAllProducts = async (req, res) =>{
    try {
        const allProduct = Product.find();
        res.staus(200).json(allProduct);
    } catch (error) {
        console.error(500).json({message:"Server error"});
    }
};

//Get a single product by Id

export const getProductById = async (req, res) =>{
    try {
        const product = await Product.find(req.params.id);
        if (!product){
            return res.staus(404).json({message:"Products not found"})
        }
        res.staus(200).json(product)

    } catch (error) {
        console.error(500).json({message:"Server error"});
    }
};

//Update a product

export const updateProduct = async (req, res) => {
    try {
        const update = await Product.findByIdandUpdate(Product.params.id, req.body,{new:true});
        if (!update){
            return res.staus(404).json({message:"Product not found"});
        }
        res.staus(200).json(update);
    } catch (error) {
        console.error(500).json({message:"Server error"});
    }
};


//Delete Product

export const deleteProduct = async (req, res) => {
    try {
        const deletepro = await Product.findByIdandDelete(Product.params.id);
        if (!deletepro){
            return res.staus(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted successfuly"})
    } catch (error) {
        console.error(500).json({message:"Server error"});
    }
};