const { CLIENT_ID, CLIENT_SECRET } = require("../config/env");
const { getGithubUserData } = require("../functions/functions");

//handleLogin controller
//Function that redirects to an existent github project oauth
exports.handleLogin = (request, response) => {
  console.log("\n[Blog Api][Get][/login]");
  try {
    let url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

    response.redirect(url);
  } catch (error) {
    console.log(`[Blog Api][Get][/login][Error]: ${error}`);

    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Get][/login][Done]");
};

//getAllPosts controller
//Function that gets all posts documents from db
exports.handleCallback = async (request, response) => {
  console.log("\n[Blog Api][Get][/callback][Request]", request.body);

  try {
    const code = request.query;

    if (!code) {
      return response.send({
        success: "false",
        messasge: "Error: no code",
      });
    }

    userData = await getGithubUserData(code, CLIENT_ID, CLIENT_SECRET);

    console.log("\n[Blog Api][Get][/callback][Response]", userData);
    response.status(200).json({ userData });
  } catch (error) {
    console.log(`[Blog Api][Get][/callback][Error]: ${error}`);
    response.status(500).json({
      error,
    });
  }

  console.log("[Blog Api][Get][/callback][Done]");
};
