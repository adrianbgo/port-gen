import React from "react";
import styles from "./index.module.css";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Employer from "../Employer";

interface ITimeline {
  employers: ResumeSchema["work"];
  volunteer: ResumeSchema["volunteer"];
}

const Timeline: React.FC<ITimeline> = ({ employers, volunteer }) => {
  if (volunteer) {
    volunteer.forEach((v) => {
      delete Object.assign(v, { name: v["organization"] })["organization"];
    });
  }
  /* c8 ignore next */
  const employerList = (employers || [])
    .concat(volunteer || [])
    .sort((a, b) => {
      if (a && a.startDate && b && b.startDate) {
        const aDate = new Date(a.startDate);
        const bDate = new Date(b.startDate);
        return bDate.getTime() - aDate.getTime();
      }
      return 0;
    });
  return (
    <div data-testid="timeline-component" className={styles.timelineComponent}>
      <div data-testid="employer-list" className={styles.employerList}>
        {employerList.length &&
          employerList.map((employer) => (
            <Employer data={employer} key={employer.name} />
          ))}
      </div>
    </div>
  );
};

export default Timeline;
