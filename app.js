require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
require('mongoose-type-url');
const findOrCreate = require('mongoose-findorcreate');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/vendorsDB",{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});
mongoose.set("useCreateIndex",true);

const detailSchema=new mongoose.Schema({
  key:String,
  vendorName:String,
  contactNo:Number,
  itemPrice:String,
  priceUnit:String,
  locationState:String,
  locationCity:String,
  locationArea:String,
  itemCategory:String,
  itemName:String,
  latitude:String,
  longitude:String
});//schema

const userSchema=new mongoose.Schema({
  username:String,
  password:String,
  googleId:String,
  userPosts:[detailSchema],
  wishPost:Array
});

userSchema.plugin(findOrCreate);

const User=mongoose.model("User",userSchema);
const Register=mongoose.model("Register",detailSchema);//model


//signin and login interface

app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
});
app.get("/", function(req, res) {
  
      Register.find({},function(err,post){
        res.render("fruits", {posts:post});
      });
    
 });
app.get("/veggies", function(req, res) {
   
      Register.find({},function(err,post){
      res.render("veggies",{posts:post});
      });
     
});
app.get("/registration", function(req, res) {
  
res.render("registration");

});
app.get("/counter", function(req, res) {
    
  const userId=app.get('data');
      User.find({_id:userId},function(err,post){
        res.render("counter",{posts:post});
      });
    
});
app.get("/wishlist", function(req, res) {
    
        const userId=app.get('data')
          User.find({_id:userId},function(err,post){

      res.render("wishlist",{posts:post});
        });
      
});
app.get("/location", function(req, res) {
    
    Register.find({},function(err,post){
        res.render("location",{posts:post});
    });
});

//post routes
app.post("/veggies",function(req,res){
  const userId=app.get('data');// to hold id of user
  const itemId=req.body.wishlist;
  Register.find({key:req.body.wishlist},function(err,wishPost){
  User.findOneAndUpdate({_id:userId},{$addToSet:{wishPost}},{upsert:true},function(err){
    });
});
res.redirect("veggies");
});
app.post("/fruits",function(req,res){
  const userId=app.get('data');// to hold id of user
  const itemId=req.body.wishlist;
  Register.find({key:req.body.wishlist},function(err,wishPost){
  User.findOneAndUpdate({_id:userId},{$addToSet:{wishPost}},{upsert:true},function(err){
    });
});
res.redirect("fruits");
});

app.post("/wishadd",function(req,res){
const userId=app.get('data');
const itemId=req.body.wishlist;
Register.find({key:req.body.wishlist},function(err,wishPost){
User.findOneAndUpdate({_id:userId},{$addToSet:{wishPost}},{upsert:true},function(err){

  });
});
res.redirect("location");
});
app.post("/searchwish",function(req,res){
  const userId=app.get('data');
  const itemId=req.body.wishlist;
  Register.find({key:req.body.wishlist},function(err,wishPost){
  User.findOneAndUpdate({_id:userId},{$addToSet:{wishPost}},{upsert:true},function(err){

    });
  });
  res.redirect("fruits")
})

app.post("/details",function(req,res){
  const itemKey=req.body.details;

  Register.find({key:req.body.details},function(err,post){
    res.render("details", {posts:post});
  });
});
app.post("/detailwish",function(req,res){
  const userId=app.get('data');
  const itemId=req.body.wishlist;
  Register.find({key:req.body.wishlist},function(err,wishPost){
  User.findOneAndUpdate({_id:userId},{$addToSet:{wishPost}},{upsert:true},function(err){
    });
});
res.redirect("/wishlist");
});
app.post("/search",function(req,res){
  Register.find({$or:[
    {itemName:{$regex:req.body.search,$options:'$i'}}
  ]},function(err,found){
    if(!err){

      res.render("search",{posts:found})
    }
  })

});

app.post("/counterupdate",function(req,res){
  const userId=app.get('data');
  const postkey=req.body.postkey;
  const newPrice=req.body.newvalue;
  Register.updateOne({key:postkey},{$set:{itemPrice:newPrice}},{upsert:true},function(err){

  });
  User.updateOne(
    {_id:userId, "userPosts.key":postkey},
    {$set:{"userPosts.$.itemPrice":newPrice}},{upsert:true},function(err){

    });
    User.updateOne(
      {"wishPost.key":postkey},
      {$set:{"wishPost.$.itemPrice":newPrice}},{upsert:true},function(err){

      });
  res.redirect("counter");
})
app.post("/counterdelete",function(req,res){
    const userId=app.get('data');
  const postKey=req.body.deletepost;
  Register.findOneAndRemove({key:postKey},function(err){

  });
  User.updateOne({},{$pull:{wishPost:{key:postKey}}},function(err){

    });
  User.findOneAndUpdate({_id:userId},{$pull:{userPosts:{key:postKey}}},function(err,found){

  });
    res.redirect("/counter");
});

app.post("/setlocation",function(req,res){
  const postkey=req.body.key;
  const lat=req.body.lat;
  const lon=req.body.lon;
Register.updateOne({key:req.body.key},{$set:{latitude:lat,longitude:lon}},function(err,success){
});
User.updateOne(
  {"wishPost.key":JSON.stringify(postkey)},
  {$set:{"wishPost.$.latitude":JSON.stringify(lat),"wishPost.$.longitude":JSON.stringify(lon)}},{},function(err){

  });
res.redirect("counter");
});

app.post("/wishlistremove",function(req,res){
  const userId=app.get('data');
const postKey=req.body.removewish;
User.findOneAndUpdate({_id:userId},{$pull:{wishPost:{key:postKey}}},function(err,found){
});
res.redirect("wishlist")
});

app.post("/registration",function(req,res){
const vendorFullName=req.body.vendorName; //holds item name
const contactNo=req.body.contactNo;
const itemPrice=req.body.itemPrice;
const priceUnit=req.body.unitName;
const stateName=req.body.stateName;
const cityName=req.body.cityName;
const areaName=req.body.areaName;
const itemCategory=req.body.itemCategory;
const itemName=req.body.itemName;
const keyNumber=Math.random();

const register=new Register({
  key:keyNumber,
  vendorName:vendorFullName,
  contactNo:contactNo,
  itemPrice:itemPrice,
  priceUnit:priceUnit,
  locationState:stateName,
  locationCity:cityName,
  locationArea:areaName,
  itemCategory:itemCategory,
  itemName:itemName,
});
register.save();
const userId=app.get('data');
User.findOne({_id:userId},function(err,foundUser){
foundUser.userPosts.push(register);
foundUser.save();
});
res.redirect("/registration");
});

app.post("/locationFilter",function(req,res){
  const stateName=req.body.stateName;
  const cityName=req.body.cityName;
  const areaName=req.body.areaName;
  const itemType=req.body.itemType;
if(stateName!="" && cityName!="" && areaName!="" &&itemType!=""){//for all
   var filterParameter={$and:[{locationState:stateName},{locationCity:cityName},
   {$and:[{locationArea:areaName},{itemCategory:itemType}]}
 ]
}
}else if(stateName!="" && cityName=="" && areaName=="" &&itemType!=""){//for state and item
   var filterParameter={$and:[{locationState:stateName},{itemCategory:itemType}
 ]}
}
else if(stateName!="" && cityName=="" && areaName=="" &&itemType==""){//for state
   var filterParameter={$and:[{locationState:stateName}]}
}
else if(stateName!="" && cityName!="" && areaName=="" &&itemType==""){//for city state
   var filterParameter={$and:[{locationState:stateName},{locationCity:cityName}]}
}
else if(stateName!="" && cityName!="" && areaName=="" &&itemType!=""){//for city state item
   var filterParameter={$and:[{locationState:stateName},
     {$and:[{locationCity:cityName},{itemCategory:itemType}]}
   ]}
}
else if(stateName!="" && cityName!="" && areaName!="" &&itemType==""){//for city state area
   var filterParameter={$and:[{locationState:stateName},
     {$and:[{locationCity:cityName},{locationArea:areaName}]}
   ]}
}else{
  var filterParameter={}
}
  Register.find((filterParameter),function(err,post){
  res.render("location",{posts:post});
});
});

let port=process.env.PORT;
if(port==null || port==""){
  port = 4000;
}

app.listen(port, function() {
  console.log("Server started on port " + port);
});
