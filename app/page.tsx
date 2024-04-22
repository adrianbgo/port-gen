import Link from "next/link";
import Basics from "./(components)/Basics";
import { readFileSync } from "fs";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";

export default function Home() {
  let resume: ResumeSchema = JSON.parse(readFileSync("resume.json", "utf-8"));

  return (
    <div>
      <Basics basics={resume.basics} />
    </div>
  );
}
