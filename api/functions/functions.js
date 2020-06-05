const axios = require("axios");

/**
 * @function getAccessToken
 * @description get token from github's string
 * @param  { string stringGithubResponse }
 * @return  { string accessToken }
 */
const getAccessToken = (stringGithubResponse) => {
  console.log(
    `[Blog Api][Function][getAccessToken][Param]:`,
    stringGithubResponse
  );
  try {
    const arrayGithubResponse = stringGithubResponse.split("&");
    accessToken = arrayGithubResponse[0].split("=")[1];

    console.log(`[Blog Api][Function][getAccessToken][Return]:`, accessToken);
    console.log("[Blog Api][Function][getAccessToken][Done]");

    return accessToken;
  } catch (error) {
    console.log(`[Blog Api][Function][getAccessToken][Error]`, error);
    console.log("[Blog Api][Function][getAccessToken][Done]");

    return error;
  }
};

/**
 * @function filterUserData
 * @description filter data from github response
 * @param  { object userData }
 * @return  { object user }
 */
const filterUserData = (userData) => {
  console.log(`[Blog Api][Function][filterUserData][Param]:`, userData);

  try {
    const { id, login, name, email, avatar_url } = userData;

    const user = {
      githubID: id,
      nickname: login,
      name,
      email,
      image: avatar_url,
    };

    console.log(`[Blog Api][Function][filterUserData][Return]:`, user);
    console.log("[Blog Api][Function][filterUserData][Done]");

    return user;
  } catch (error) {
    console.log(`[Blog Api][Function][filterUserData][Error]`, error);
    console.log("[Blog Api][Function][filterUserData][Done]");

    return error;
  }
};

/**
 * @function getGithubUserData
 * @description makes http requests from github api
 * @param  { object code }
 * @param  { string client_id }
 * @param  { string client_secret }
 * @return  { object userData }
 */
exports.getGithubUserData = async (code, client_id, client_secret) => {
  console.log(
    `[Blog Api][Function][getGithubUserData][Params]:`,
    code,
    client_id,
    client_secret
  );

  try {
    const githubCredentials = {
      client_id,
      client_secret,
      code: code.code,
    };

    const githubResponse = await axios.post(
      `https://github.com/login/oauth/access_token`,
      githubCredentials
    );

    const accessToken = getAccessToken(githubResponse.data);

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: "token " + accessToken,
      },
    });

    userData = filterUserData(userResponse.data);

    console.log(`[Blog Api][Function][getGithubUserData][Return]:`, userData);
    console.log("[Blog Api][Function][getGithubUserData][Done]");

    return userData;
  } catch (error) {
    console.log(`[Blog Api][Function][getGithubUserData][Error]`, error);
    console.log("[Blog Api][Function][getGithubUserData][Done]");

    return error;
  }
};
