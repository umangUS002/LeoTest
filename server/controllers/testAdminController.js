import Team from "../models/Team.js"

export const getAllTeams = async (req,res)=>{

  const teams = await Team.find().sort({score:-1})

  return res.json(teams)

}

export const getDashboardStats = async (req,res)=>{

  const total = await Team.countDocuments()

  const completed = await Team.countDocuments({completed:true})

  const waiting = total - completed

  res.json({
    totalTeams:total,
    completed,
    waiting
  })

}