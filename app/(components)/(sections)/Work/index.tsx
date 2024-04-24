import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";
import Timeline from "../../(molecules)/Timeline";
import styles from "./index.module.css";

const Work = (data: ResumeSchema, includeVolunteer: boolean = false) => {
  return data.work && data.work.length ? (
    <div data-testid="work-component" className={styles.workComponent}>
      <Timeline
        employers={
          includeVolunteer && data.volunteer && data.volunteer.length
            ? data.work.concat(data.volunteer)
            : data.work
        }
      />
    </div>
  ) : null;
};

export default Work;
