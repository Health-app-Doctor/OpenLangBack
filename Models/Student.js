const sql = require("./../DB/db");
//user object constructor
var Student =function(student){
    
    this.users_id=student.users_id
}
//create user function
Student.AddStudent = function (newStudent,result){
    sql.query("INSERT INTO students set ?",newStudent,function(err,res){
        if(err){
            console.log("error :",err);
            result(err,null);
        }else{
                 console.log(res.insertId);
                result(null, res.insertId);
        }
    });
};
 Student.findOneByuserID = function (userID, result) {
    sql.query("Select * from students where users_id = ? ", userID, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res);
                result(null, res);
          
            }
        });   
};
Student.getAllStudents = function (result) {
    sql.query("Select u.username,u.fullname,u.email,u.image,u.address,u.tel,u.isVerified From users u INNER JOIN students s ON (u.id = s.users_id);"
    , function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(err,null);
            }
            else{
              console.log('users : ', res);  

             result(null, res);
            }
        });   
};
// Token.delete = function (userId, result) {
//     sql.query("DELETE from tokens WHERE userId = ?", [userId], function (err, res) {             
//             if(err) {
//                 console.log("error: ", err);
//                 result(err, null);
//             }
//             else{
//                 result(null, res);
          
//             }
//         });   
// };
module.exports= Student;