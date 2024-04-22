"use client";

import React, { ReactElement } from "react";
import styles from "./index.module.css";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { FaEnvelope } from "react-icons/fa";
import { FiCode, FiGithub, FiPhone, FiTwitter } from "react-icons/fi";
import { SlSocialSoundcloud } from "react-icons/sl";

const lazyIcons: { [key: string]: ReactElement } = {
  Twitter: <FiTwitter />,
  Github: <FiGithub />,
  SoundCloud: <SlSocialSoundcloud />,
};

const Basics: React.FC<ResumeSchema> = (data) => {
  return data.basics ? (
    <div className={styles.basics} data-testid="basics-component">
      {data.basics.image && data.basics.image.length ? (
        <img src={data.basics.image} alt={data.basics.name} />
      ) : (
        <FiCode className={styles.logo} data-testid="logo" />
      )}
      {data.basics.name && data.basics.name.length && (
        <h1 className={styles.name}>
          {data.basics.name} {data.basics.label && `{${data.basics.label}}`}
        </h1>
      )}
      <div className={styles.socials}>
        {data.basics.email && data.basics.email.length && (
          <a href={`mailto:${data.basics.email}`} data-testid="email">
            <FaEnvelope className={styles.icon} />
          </a>
        )}
        {data.basics.phone && data.basics.phone.length && (
          <a href={`tel:+${data.basics.phone}`} data-testid="phone">
            <FiPhone className={styles.icon} />
          </a>
        )}
        {data.basics.profiles &&
          data.basics.profiles.length &&
          data.basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={`${profile.url && profile.url.length && profile.url}`}
              className={styles.icon}
              data-testid="social"
            >
              {profile.network &&
                profile.network.length &&
                lazyIcons[profile.network]}
            </a>
          ))}
      </div>
      {data.basics.summary && data.basics.summary.length && (
        <p className={styles.summary} data-testid="summary">
          {data.basics.summary}
        </p>
      )}
    </div>
  ) : null;
};

export default Basics;
