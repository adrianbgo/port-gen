import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";
import Timeline from "../../(molecules)/Timeline";
import styles from "./index.module.css";

const Work = (data: ResumeSchema, includeVolunteer: boolean = false) => {
  return (data.work && data.work.length) ||
    /* c8 ignore start */
    (data.volunteer && data.volunteer.length) ? (
    <div data-testid="work-component" className={styles.workComponent}>
      <Timeline
        /* c8 ignore end */
        employers={data.work && data.work.length ? data.work : undefined}
        volunteer={
          data.volunteer && data.volunteer.length ? data.volunteer : undefined
        }
      />
    </div>
  ) : null;
};

export default Work;
