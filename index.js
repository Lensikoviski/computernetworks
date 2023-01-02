const express = require("express")
const app = express()
const zip = require("express-easy-zip")
const path = require("path")

app.use(zip())

const absolute = [
    {path:"./AbsoluteLoader/Absolute.c",name:"Absolute.c"},
    {path:"./AbsoluteLoader/abssrc.txt",name:"abssrc.txt"}
]

const onepass = [
    {path:"./OnePassAssembler/input.txt",name:"input.txt"},
    {path:"./OnePassAssembler/OnePass.c",name:"OnePass.c"},
    {path:"./OnePassAssembler/optab.txt",name:"optab.txt"},
    {path:"./OnePassAssembler/output.txt",name:"output.txt"},
    {path:"./OnePassAssembler/result.txt",name:"result.txt"},
    {path:"./OnePassAssembler/symtab.txt",name:"symtab.txt"},

]

const pass1oftwo = [
    {path:"./Pass1ofTwopassAssembler/input.txt",name:"input.txt"},
    {path:"./Pass1ofTwopassAssembler/optab.txt",name:"optab.txt"},
    {path:"./Pass1ofTwopassAssembler/out.txt",name:"out.txt"},
    {path:"./Pass1ofTwopassAssembler/Pass1.c",name:"Pass1.c"},
    {path:"./Pass1ofTwopassAssembler/symtab.txt",name:"symtab.txt"}
]

const pass2oftwo = [
    {path:"./Pass2ofTwopassAssembler/input.txt",name:"input.txt"},
    {path:"./Pass2ofTwopassAssembler/length.txt",name:"length.txt"},
    {path:"./Pass2ofTwopassAssembler/optab.txt",name:"optab.txt"},
    {path:"./Pass2ofTwopassAssembler/Pass2.c",name:"Pass2.c"},
    {path:"./Pass2ofTwopassAssembler/symbol.txt",name:"symbol.txt"},
]

const relocation = [
    {path:"./RelocationLoader/Relocation.c",name:"Relocation.c"},
    {path:"./RelocationLoader/rlin.txt",name:"rlin.txt"},
    {path:"./RelocationLoader/rlout.txt",name:"rlout.txt"},
]

app.get("/",(req,res)=>{
    res.render("hello")
})

app.get("/absolute",(req,res)=>{
    res.zip({files:absolute,filename:"absolute.zip"})
})

app.get("/onepass",(req,res)=>{
    res.zip({files:onepass,filename:"OnePass Assembler.zip"})
})

app.get("/pass1twopass",(req,res)=>{
    res.zip({files:pass1oftwo,filename:"PassOne of TwoPass Assembler.zip"})
})

app.get("/pass2twopass",(req,res)=>{
    res.zip({files:pass2oftwo,filename:"PassTwo of TwoPass Assembler.zip"})
})

app.get("/relocation",(req,res)=>{
    res.zip({files:relocation,filename:"Relocation.zip"})
})

app.get("/add",(req,res)=>{
   res.zip({files:[{path:"./add.txt",name:"add.txt"}],filename:"MASM add.zip"})
})

app.get("/biggest",(req,res)=>{
    res.zip({files:[{path:"./bigg.txt",name:"bigg.txt"}],filename:"MASM biggest.zip"})
 })
 

 app.get("/bubble",(req,res)=>{
    res.zip({files:[{path:"./bub.txt",name:"bub.txt"}],filename:"MASM Bubble sort.zip"})
 })
 
 app.get("/fact",(req,res)=>{
    res.zip({files:[{path:"./fact.txt",name:"fact.txt"}],filename:"MASM Factorial.zip"})
 })
 

app.use(express.static('./public'))

app.set('views', path.join(__dirname, 'views'));    
app.set('view engine','hbs')      

app.listen(3000 || process.env.PORT)