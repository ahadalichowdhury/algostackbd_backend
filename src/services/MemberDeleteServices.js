const MemberDeleteService= async (Request,DataModel) => {
    const {id}= Request.params;
    try {
        let data = await DataModel.findByIdAndDelete(id)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports=MemberDeleteService