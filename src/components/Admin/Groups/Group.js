import axios from "axios";
import React, { useEffect } from "react";
import GroupCourses from "./GroupCourses";
import GroupUsers from "./GroupUsers";
import config from "../../../config";
import useStore from "../../Store/store";
import { createSearchParams, useSearchParams } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GroupCard from "./GroupCard";
import "./tabs.css";

let IdToken, Authorization, TENANT_ID, headers;

const currentUser = config.UserPool.getCurrentUser();
if (currentUser) {
  currentUser.getSession((err, session) => {
    if (err) {
      console.log("error please try login again");
    } else {
      if (session.isValid()) {
        console.log("token is valid");
        IdToken = session.idToken.jwtToken;
        Authorization = session.accessToken.jwtToken;
        TENANT_ID = "azharengineering2020";
        headers = {
          authorization: JSON.stringify({ Authorization, IdToken, TENANT_ID }),
        };
      }
    }
  });
} else {
  console.log("Please login ");
}

export default function Group() {
  const { groups } = useStore((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const groupId = searchParams.get("id");
  const group = groups.find((g) => g.GroupName === groupId);

  return (
    <>
      <GroupCard group={group} />

      <div className="col-lg-12">
        <div className="tabs mt-5">
          {/* <h4 className="tabs-title mb-30">Tab 3</h4> */}
          <div className="single-tabs tabs-three">
            <ul className="nav nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="active"
                  id="tab-three-one-tab"
                  data-bs-toggle="tab"
                  href="#tab-three-one"
                  role="tab"
                  aria-controls="tab-three-one"
                  aria-selected="true"
                >
                  {/* <i className="lni lni-vector"></i>  */}
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="tab-two-three-tab"
                  data-bs-toggle="tab"
                  href="#tab-three-two"
                  role="tab"
                  aria-controls="tab-three-two"
                  aria-selected="false"
                >
                  {/* <i className="lni lni-pizza"></i> */}
                  Users
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tab-three-one"
                role="tabpanel"
                aria-labelledby="tab-three-one-tab"
              >
                <div className="tab-text">
                  <GroupCourses group={group} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three-two"
                role="tabpanel"
                aria-labelledby="tab-three-two-tab"
              >
                <div className="tab-text">
                  <GroupUsers group={group} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
