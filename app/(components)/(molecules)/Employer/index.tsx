import "@/app/(utils)/date.extension";
import React from "react";
import styles from "./index.module.css";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { convertDate } from "@/app/(utils)";

interface IEmployer {
  data: {
    name?: string;
    location?: string;
    description?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: Array<string>;
  };
}

const Employer: React.FC<IEmployer> = ({ data }) => {
  return (
    <div data-testid="employer-component" className={styles.employerComponent}>
      <div className={styles.employerName}>{data.name}</div>
      <div className={styles.centerContent}>
        <time
          className={styles.employerDates}
        >{`${data.startDate && convertDate(data.startDate, "mmm yyyy")} - ${data.endDate && convertDate(data.endDate, "mmm yyyy")}`}</time>
        <div className={styles.employerLocation}>{data.location}</div>
      </div>
      <div className={styles.employerRight}>
        <div className={styles.employerPosition}>{data.position}</div>
        <ul>
          {data.highlights &&
            data.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Employer;
