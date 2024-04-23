import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";
import Timeline from "../../(molecules)/Timeline";
import styles from "./index.module.css";

const Work = (data: ResumeSchema) => {
  return data.work && data.work.length ? (
    <div data-testid="work-component" className={styles.workComponent}>
      <Timeline employers={data.work} />
    </div>
  ) : null;
};

export default Work;
