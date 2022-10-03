// const MemberReadServicebyid= async (Request,DataModel) => {
//     let id= Request.params.id;
//     let Query={_id:id};
//     DataModel.find(Query,(err,data)=>{
//         if(err){
//             return  {status: "fail", data: data}
//         }
//         else{
//             return  {status: "success", data: data}
//         }
//     })
// }
// module.exports=MemberReadServicebyid