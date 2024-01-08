import Product from "../models/productModel.js";
import User from "../models/userModel.js";
export const getAllProducts= async (req,res) =>{
    try{
        const products = await Product.findAll({ 
        
    });
        if(products){
              return res.status(200).send(products);

        }
        else{res.status(404).json({message:'Product not found'})}

    }catch(err){
        res.status(500).json({error: err.message})
    }
        
}
export const getProductById = async (req, res) => {
    const { ProductId } = req.params;
  console.log("get front of id")
    try {
      const OneProduct = await Product.findByPk(ProductId, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      console.log("get front of include")
      if (!OneProduct) {
        return res.status(404).json({ message: "product not found" });
      }
  
      const formattedProduct = OneProduct.toJSON();
      if (OneProduct.User) {
        formattedProduct.creatorName = OneProduct.User.username;
      }
     
      res.status(200).json({ Product: formattedProduct });
       console.log("fetch data")
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  };


export const deleteProduct = async (req,res) =>{
    const {ProductId}= req.params;
    try{
        const DeleteProduct = await Product.destroy({where:{id:ProductId}});
        if(!DeleteProduct){
            return res.status(404).json({ message: "product not deleted" });
        }
        res.status(200).json({message:"product deleted successfully"});
    }catch(err){
        console.log(err);
    }

}



//add


export const addProduct = async (req, res) => {
  
   
    const { title,description,price,category,userId} = req.body; 
    try {
    
        const createdProduct= await Product.create({ title,description,price,category,userId} );
        console.log(createdProduct);
        res.status(200).json({ message: 'product created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

   
// Update
export const updateProduct = async (req, res) => {
    const {ProductId } = req.params;
 

    try {
        if (req.body) {
            const updateProduct = await Product.update({ ...req.body}, { where: { id: ProductId } });
            return res.status(200).json({ message: 'product updated successfully!', Product: updateProduct });
        }
        res.status(400).json({ message: 'Something went wrong' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
