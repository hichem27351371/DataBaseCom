const express =require ('express');
const router=express.Router()
const SCategorie=require("../models/scategorie")

router.get("/",async(req,res)=>{
    try{
        const scat=await SCategorie.find().populate("categorieID").exec()
        res.status(200).json(scat);
    }
    catch (error) {
    res.status(404).json({ message: error.message });
    }  
    
});

router.post("/",async(req,res)=>{
    const{nomscategorie,imagescat,categorieID}=req.body
    //const cat1=new Categorie({nomcategorie:nomcategorie,imagecategorie:imagecategorie})--------------autre methode//
    const cat1=new SCategorie(req.body)
    try{
await cat1.save();
res.status(200).json(cat1)
    }
catch(error){
    res.status(404).json({message:error.message});

}

});
router.get("/:scategorieId",async(req,res)=>{
try {

const scat=await SCategorie.findById(req.params.scategorieId);
res.status(200).json(cat);
}catch(error){
    res.status(400).json({message:error.message});

}

});

    router.put('/:scategorieId', async (req, res)=> {
        const { nomscategorie, imagescat} = req.body;
        const id = req.params.scategorieId;
        try {
        const cat1 = {
        nomscategorie:nomscategorie,imagescat:imagescat, _id:id };
        console.log(cat1)
        await SCategorie.findByIdAndUpdate(id, cat1);
        res.json(cat1);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });

        router.delete('/:scategorieId', async (req, res)=> {
            const id = req.params.scategorieId;
            await SCategorie.findByIdAndDelete(id);
            res.json({message:"categorie deleted successfully"});
        });



router.delete('/:scategorieId', async (req, res)=> {
});
module.exports = router;