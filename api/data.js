import express from "express"
import cors from "cors"
import sql from "mysql2"


const app = express() 

app.use (cors({
    origin:"http://localhost:3000"
}))
 app.use(express.json())

 const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",    
    database: "pink_kart"
 });

    db.connect((err)=> {
        if (err) {
            console.error("error connecting to database",err)
            return
        } console.log("connect to database")

    })

    app.get("/", (req, res)=> {
        res.json("hello this is backend")
    })

    // -----------------------------

    app.post("/registration_data", (req, res)=> {
        
        const q = "INSERT INTO registration_data (`name`, `mobNumber`,`email`,`password`, `retypePassword`) VALUES (?) "

        const values = [
            req.body.name,
            req.body.mobNumber,
            req.body.email,
            req.body.password,
            req.body.retypePassword
        ]

        db.query(q,[values], (err, data)=> {
            if (err) return res.json(err);
            return res.json("data hase been posted successfully")
        })
    
    })

// -----------------------


  app.get("/registration_data", (req,res)=> {

    const q = "SELECT * FROM registration_data";

    db.query( q, (err, data) => {
        if(err) return res.json(err) ;
        return res.json(data)
    
    })
  })
    








const data = [{
    id: "1",
    category: "dress",
    name: "Collar Stretch Pant Suit",
    Price: "50 $",
    img : "https://www.powersutra.co/cdn/shop/files/19-07-2023Renata00272_700x.jpg?v=1690646140",
    
},
{
    id: "2",
    category: "dress",
    name: "Pant Suit For Work",
    Price: "30 $",
    img : "https://www.powersutra.co/cdn/shop/files/11-5-2023anasthasia07159_700x.jpg?v=1684325629",
},
{
    id: "3",
    category: "dress",
    Price: "53 $",
    name: "Collar Stretch Pant Suit",
    img : "https://www.powersutra.co/cdn/shop/files/PowerSutra0997final0_700x.jpg?v=1683882257",
},
{
    id: "4",
    Price: "54 $",
    category: "dress",
    name: "Stretch Pant Suit",
    img : "https://www.powersutra.co/cdn/shop/files/PowerSutra0512finalww_700x.jpg?v=1683871761",
},
{
    id: "5",
    category: "dress",
    Price: "45 $",
    name: "Poly Viscose Pant Suit",
    img : "https://www.powersutra.co/cdn/shop/products/POWERSUTRACREATIVE23801copy_700x.jpg?v=1683802447",
},
{
    id: "6",
    category: "jewels",
    Price: "218 $",
    name: "Gold Plated Antique Light Green",
    img : "https://dukaan.b-cdn.net/900x900/webp/upload_file_service/asg/03e47e1a-b75e-4f9c-9467-0a7598b782a8/11014447_1.jpg",
},
{
    id: "7",
    category: "jewels",
    Price: "175 $",
    name: "Silver-Plated White AD-Studded Jewellery Set",
    img : "https://dukaan.b-cdn.net/900x900/webp/upload_file_service/asg/de22a97c-efe2-4678-9a43-b148974f4dc9/2481e669-b909-4229-a5ba-bded4493b6f51647664780130KARATCARTSilver-PlatedWhiteAD-StuddedJewellerySet1.jpg",
},
{
    id: "8",
    category: "ringPlatinum",
    Price: "$3,305",
    name: "Luna Diamond Eternity Ring In Platinum (2 Ct. Tw.)",
    img : "https://ion.bluenile.com/sets/Jewelry-bn/201909/NOP/Images/LS_gallery_0.jpg",
},
{
    id: "9",
    category: "ringPlatinum",
    Price: "$3,965",
    name: "Princess Cut Eternity Ring In Platinum (4 Ct. Tw.)",
    img : "https://ion.bluenile.com/sets/Jewelry-bn/195039/NOP/Images/LS_gallery_0.jpg",
},
{
    id: "10",
    category: "ringPlatinum",
    Price: "$4,655",
    name: "French Pavé Diamond Eternity Ring In Platinum (2 Ct. Tw.)",
    img : "https://ion.bluenile.com/sets/Jewelry-bn/194554/NOP/Images/LS_gallery_0.jpg",
},
{
    id: "11",
    category: "ringPlatinum",
    Price: "$5,155",
    name: "Scalloped Pavé Diamond Ring In Platinum (1/2 Ct. Tw.)",
    img : "Petite Twist Diamond Eternity Ring In Platinum (1/5 Ct. Tw.)",
},
{
    id: "12",
    category: "ringPlatinum",
    Price: "$4,500",
    name: "Gold Plated Antique Light Green",
    img : "https://ion.bluenile.com/sets/Jewelry-bn/194552/NOP/Images/LS_gallery_0.jpg",
},
{
    id: "13",
    category: "jewels",
    Price: "175 $",
    name: "Silver-Plated White AD-Studded Jewellery Set",
    img : "https://dukaan.b-cdn.net/900x900/webp/upload_file_service/asg/de22a97c-efe2-4678-9a43-b148974f4dc9/2481e669-b909-4229-a5ba-bded4493b6f51647664780130KARATCARTSilver-PlatedWhiteAD-StuddedJewellerySet1.jpg",
},
{
    id: "13",
    category: "jewels",
    Price: "175 $",
    name: "Silver-Plated White AD-Studded Jewellery Set",
    img : "https://dukaan.b-cdn.net/900x900/webp/upload_file_service/asg/de22a97c-efe2-4678-9a43-b148974f4dc9/2481e669-b909-4229-a5ba-bded4493b6f51647664780130KARATCARTSilver-PlatedWhiteAD-StuddedJewellerySet1.jpg",
},
{
    id: "13",
    category: "jewels",
    Price: "175 $",
    name: "Silver-Plated White AD-Studded Jewellery Set",
    img : "https://dukaan.b-cdn.net/900x900/webp/upload_file_service/asg/de22a97c-efe2-4678-9a43-b148974f4dc9/2481e669-b909-4229-a5ba-bded4493b6f51647664780130KARATCARTSilver-PlatedWhiteAD-StuddedJewellerySet1.jpg",
},
]


app.get("/data",(req,res)=>{
    res.send(data)
})



const port = 3005
app.listen(port,()=>{
    console.log(`your are listening ${port}`);
})