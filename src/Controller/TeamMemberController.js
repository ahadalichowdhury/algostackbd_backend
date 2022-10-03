const DataModel = require("../model/TeamMember");

const MemberCreateService = require("../../src/services/MemberCreateServices");
const MemberReadService = require("../../src/services/MemberReadServices");
const MemberUpdateService = require("../../src/services/MemberUpdateServices");
const MemberDeleteService = require("../../src/services/MemberDeleteServices");
// const MemberReadServicebyid = require("../../src/services/MemberReadServicebyid")

exports.MemberCreateService = async (req, res) => {
  let Result = await MemberCreateService(req, DataModel);
  res.status(200).json(Result);
};
exports.MemberReadService = async (req, res) => {
  let Result = await MemberReadService(req, DataModel);
  res.status(200).json(Result);
};

// exports.MemberReadServicebyid=async (req, res) => {
//     let Result=await MemberReadServicebyid(req,DataModel)
//     res.status(200).json(Result)
// }
exports.MemberReadServicebyid = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  DataModel.find(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

exports.MemberUpdateService = async (req, res) => {
  let Result = await MemberUpdateService(req, DataModel);
  res.status(200).json(Result);
  console.log(Result);
};

exports.MemberDeleteService = async (req, res) => {
  let Result = await MemberDeleteService(req, DataModel);
  res.status(200).json(Result);
};
