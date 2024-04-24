import React from "react";
import styles from "./index.module.css";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Employer from "../Employer";

interface ITimeline {
  employers: ResumeSchema["work"];
}

const Timeline: React.FC<ITimeline> = ({ employers }) => {
  return (
    <div data-testid="timeline-component" className={styles.timelineComponent}>
      <div data-testid="employer-list" className={styles.employerList}>
        {employers !== undefined &&
          employers.map((employer) => (
            <Employer data={employer} key={employer.name} />
          ))}
      </div>
    </div>
  );
};

export default Timeline;
