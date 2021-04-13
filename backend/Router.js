const bcrypt= require('bcrypt');

class Router{
          constructor(app,db){
               this.login(app,db);
               this.logout(app,db);
               this.isLoggedIn(app,db);
          }
          login(app,db){
               app.post('/login',(req,res)=>{
                    let username=req.body.username;
                    let password= req.body.password; 
                    username=username.toLowerCase();
                    if(username.length > 15 || password.length >25){
                         res.json({
                              success: false,
                              msg: 'An Error Occured Check length of Username and Password'
                         })
                         return;
                    }
                    let cols=[username];
                    db.query('SELECT * from mylogin WHERE uname = ? LIMIT 1', cols,(err,data,fields)=>{
                         if(err){
                              res.json({
                              success: false,
                              msg: 'An Error Occured,Please Try again'
                              });
                         return;
                         }
                         if(data && data.length ===1){
                              bcrypt.compare(password,data[0].pword,(bcryptErr,verified)=>{
			
                                   if(verified){
                                        req.session.userID=data[0].id;
                                        res.json({
                                             success: true,
                                             username: data[0].uname
                                        })
                                        return;
                                   }
                                   else{
                                        res.json({
                                             success: false,
                                             msg: 'Invalid Password'
                                        });
                                   }
                              });
                         }
                         else{
                              res.json({
                                   success: false,
				      msg: 'User Not Found, Please Enter Valid username'
			      });
                         }
                    });
               });
          }
          logout(app,db){
               app.post('/logout',(req,res)=>{
                    if(req.session.userID){
                         req.session.destroy();
                         res.json({
                              success: true
                         })
                         return true;
                    }
                    else{
                         res.json({
                              success: false
                         })
                         return false;
                    }
               });
          }
          isLoggedIn(app,db){
               app.post('/isLoggedIn',(req,res)=>{
                    if(req.session.userID){
                         let cols=[req.session.userID];
                         db.query('SELECT * from mylogin WHERE id = ? LIMIT 1',cols,(err,data,fields)=>{
                              if(data && data.length===1){
                                   res.json({
                                        success: true,
                                        username: data[0].uname
                                   });
                                   return true;
                              }
                              else{
                                   res.json({
                                        success: false
                                   })
                              }
                              if(err){
                                   console.log(err)
                              }
                         });
                    }
                    else{
                         res.json({
                              success: false
                         })
                    }
               });
          }
}
module.exports = Router;
