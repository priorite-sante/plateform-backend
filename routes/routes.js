const usersLogin = require("./users/login");


const adminLogin = require("./admin/login");

const adminCreateUser = require("./admin/create")

const adminFindUser = require("./admin/find_user");

const adminChart = require("./admin/chart/user_stats");


module.exports =[usersLogin, adminLogin, adminCreateUser, adminFindUser, adminChart];