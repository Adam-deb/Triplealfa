"use client";

import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
  const teamMembers = [
       {
      name: "Sanika Pradhan",
      role: "Chief Executive Officer",
      image: "/email-signatures/headshots/Sanika.png",
      description:
        "Sanika is a strategist specialising in data-driven transformation and public policy. With a background in economics, finance, and international public policy from UCL and the University of London, she brings a multidisciplinary approach to developing innovative, streamlined solutions that simplify complex processes and empower global investors."
    },
    {
      name: "Adam Debski",
      role: "Chief Technical Officer",
      image: "/email-signatures/headshots/Adam.png",
      description:
        "Adam brings a blend of technology leadership and strategic expertise to Triple Alfa. With experience leading product development and enhancing customer-focused solutions, he has a proven track record of driving innovation and collaboration. His background in financial analysis and technology equips him to deliver impactful solutions, redefining alternative investments with a forward-thinking approach."
    },
    {
      name: "Samar Rege",
      role: "Chief Commercial Officer",
      image: "/email-signatures/headshots/Samar.png",
      description:
        "Samar is an unregistered Barrister at the England and Wales Bar and a lawyer in India. With an LLM in Climate Change Litigation and International Investment Law, Samar brings experience and expertise in public law and commercial law to the organisation."
    },
    {
      name: "Poushali Majumder",
      role: "Overseas Investment Manager",
      image: "/email-signatures/headshots/Poushali.png",
      description:
        "Poushali brings a strong analytical mindset and a strategic approach to global investments. With a background in cyber security and expertise in risk assessment and compliance, she navigates complex markets to identify and optimise overseas investment opportunities while working closely with clients to achieve their investment goals."
    },
    {
      name: "Tilak Naik",
      role: "Client Services Director",
      image: "/email-signatures/headshots/Tilak.png",
      description:
        "Tilak Naik joins Triple Alfa as Client Services Director. Educated in the United Kingdom and with a distinguished career in wealth management, including at Motilal Oswal, he specialises in guiding HNW and UHNW clients, wealth firms, and family offices in India on whisky-asset investments and bespoke overseas investment services."
    }
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamCardContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            {/* Front - Image View */}
            <div className={styles.teamFront}>
              <div className={styles.teamPhoto}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.teamName}>{member.name}</div>
              <div className={styles.teamRole}>{member.role}</div>
            </div>

            {/* Back - Hover View */}
            <div className={styles.teamBack}>
              <div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamRole}>{member.role}</div>
                <p className={styles.teamDescription}>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}