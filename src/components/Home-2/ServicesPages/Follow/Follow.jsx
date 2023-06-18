import React from "react";
import Footer from "../../../Footer-1/Footer";
import Menu from "../../../Menu/Menu";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";

import styles from "./follow.module.scss";

const Follow = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div className={`${styles.follow}`}>
        <div className="container">
          <h1>
            Follow <span>ups</span> & Academic <span>Advising</span>
          </h1>
          <ul>
            <li>
              <Filter1Icon />
              Efficacy
            </li>
            <li>
              <Filter2Icon />
              Efficiency
            </li>
            <li>
              <Filter3Icon />
              Engagement
            </li>
          </ul>
          <div>
            <h2>Educational Needs</h2>
            <ul>
              <li>
                <h4>Measuring:</h4>
                <ul>
                  <li>Efficacy</li>
                  <li>Efficiency</li>
                  <li>Engagement</li>
                </ul>
              </li>
              <li>
                <h4>To identify:</h4>
                <ul>
                  <li>Weak or at risk (vulnerable)</li>
                  <li>Normal</li>
                  <li>High achievers</li>
                </ul>
              </li>
            </ul>
            <p>
              Hence, give learners academic advising on how to improve
              performance (Machine Learning)
            </p>
            <p>
              Give teachers Lesson authoring guidelines and advices ( Big Data
              Analytics )
            </p>
          </div>
          <div className={styles["learner-needs"]}>
            <h2>Learner Need</h2>
            <div>
              <div>
                <div>
                  <h3>Efficacy</h3>
                  <ul>
                    <li>Higher outcomes: new scores against previous scores</li>
                    <li>Improving the status of at risk students</li>
                    <li>Number of joiners over time</li>
                  </ul>
                </div>
                <img src="/assets/chart-1.png" alt="chart" />
              </div>
              <div>
                <div>
                  <h3>Efficiency</h3>
                  <ul>
                    <li>Time spent for lesson study</li>
                    <li>Learning hours vs. improved outcomes</li>
                  </ul>
                </div>
                <img src="/assets/chart-2.png" alt="chart" />
              </div>
              <div>
                <div>
                  <h3>Engagement</h3>
                  <ul>
                    <li>Access rates</li>
                    <li>Access rates over time</li>
                    <li>
                      Time spent in doing activities (games) and number of
                      activities
                    </li>
                  </ul>
                </div>
                <img src="/assets/chart-3.png" alt="chart" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Follow;
