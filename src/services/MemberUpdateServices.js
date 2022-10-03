const MemberUpdateService = async (Request, DataModel) => {
  const { id } = Request.params;
  try {
    let data = await DataModel.findByIdAndUpdate(id, {
      Name: Request?.body?.Name,
      email: Request?.body?.email,
      Position: Request?.body?.Position,
      image: Request?.body?.image,
      facebook: Request?.body?.facebook,
      linkedin: Request?.body?.linkedin,
      ProfessionDetails: Request?.body?.ProfessionDetails,
      PersonalDetails: Request?.body?.PersonalDetails,
    });
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
module.exports = MemberUpdateService;
