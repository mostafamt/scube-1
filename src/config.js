import { CognitoUserPool } from "amazon-cognito-identity-js";

const config = {
  UserPool: new CognitoUserPool({
    UserPoolId: "eu-west-1_yeNM7X2En",
    ClientId: "17p7elrq7tqcqc494ghg4iei0i",
  }),
  apiURL: "http://localhost:3002/api/cognito",
  // apiURL:"https://apis.eduedges.com/api/dbm/cognito",
};

export default config;
