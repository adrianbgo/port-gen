import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import React from "react";

const Work = (data: ResumeSchema) => {
  return data.work && data.work.length ? (
    <div data-testid="work-component">Work</div>
  ) : null;
};

export default Work;
