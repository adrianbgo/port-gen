import Link from "next/link";
import Basics from "./(components)/(sections)/Basics";
import { readFileSync } from "fs";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Work from "./(components)/(sections)/Work";

export default function Home() {
  let resume: ResumeSchema = JSON.parse(readFileSync("resume.json", "utf-8"));

  return (
    <div>
      <Basics basics={resume.basics} />
      <Work work={resume.work} volunteer={resume.volunteer} />
    </div>
  );
}
