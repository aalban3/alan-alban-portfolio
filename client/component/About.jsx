import React from "react";
import LinkButton from "./LinkButton";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-description">
          <section>
            <p>Hello, I&apos;m Alan.</p>
            <p>
              I&apos;m a software engineer based in Brooklyn, NY. Coding has
              been a passion of mine ever since I was introduced to Pascal as a
              young boy in Ecuador. After many years in other areas of the
              software industry, I decided to pursue my passion for Software
              Development and enrolled in a full-time immersive program at
              FullStack Academy.
            </p>
            <p>
              In addition to my bootcamp experience, I have three years of
              experience working in an agile developer team, building and
              deploying applications. I also have about four years of experience
              as a Sales Engineer working in the fields of Automation, Cloud and
              SAAS. I&apos;m looking to leverage my industry experience, my
              engineering background and my love for coding to solve problems in
              a new way now, as a full-stack software developer.
            </p>
          </section>
          <LinkButton
            source="https://drive.google.com/file/d/1LzvQpRysHXOlLvtjsKYMqk_Kg-myghU6/view"
            label="My Resume"
          />
        </div>
        <img
          className="about-image"
          src="https://aa-portfolio-static.s3.us-east-1.amazonaws.com/aa_pro_shot.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCFFGZUgIMr6lxLVjYYSo5LAVKVOgy38O8FCGiaodrwhQIgEkhuZet4xSim3%2BPP6Yum0SXYkg8F9pd9YuvtQ8gf8yUqlgMIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgwwOTkxNjYxNzcxMDkiDBeHhMTMSVIWkLDLzSrqAuvi9QW9kJXXRU9vG84sxBDfIbc01Bw9uWEyDc25%2BrIcRpMTDH0tDncGRIM%2FeKBu33kJuXoM3vsRPA3n1THOXbvXXGY3QpucjGXAtnoGrygkizYUM1prToiQZ%2BpHk7qyf3an64Wwx0uKfmdJuoKzr7cliYEshdDw49%2Bgj%2BJMK8itT9W%2BxO1bdjKdb2Za3eSZ7dhLvFEqf9qBJfmq6tfitAtlGeE3Hd2d4odRlDG7C0LTV8N18MTC3RQhGO%2Fo68X8AzUC74aUI5qOGVGQ9jmgMSqF6cC%2B06LDpeVBUKnei%2Bhlt%2BwwLFE8SlNC5kT6n7fJe%2FUMohRFHv1xGp5ngvTKo39WYemO9zSgYCUfF4hB6tvr2GQ3JAGFaaUEIC9vscYBT7K5JjyZtQXSMt4G%2B0ojYX25e%2Bv10rnTLA5tkINk5dV9M%2BTr%2BkNiWaT6YjBWn%2FiAGAnJAII5ZUy%2FXxI6Oma%2BDPrCkVEgZoAwpt2eMIjDm4wGOrMCYvfZuV3JbZbg9B%2F2Jh%2FSD3VoG2sLcW2ct6dvtCALGOlBwQGVicz99hW93jq1pplzdoTz45Zl8iSCBPqpDUYMuIMSA5rw7Z9Pw%2F2NBechKeKm5cOBkfqBJzJLm8niG2WfBEDKcHf61jFTFR2phHRNViPzNy%2FiWxJP2k4KcHFGaU3GtnVHthfj1a4E7nans5JGJsf4bv%2F5wXQDBzNfUqwG9SfhbV0YzHaCXtkpLXycxJ8aTx8qokJyJZ1JiXdC26A1FAkihYBIfg85WdMUgEFy0vxLjJAeMbkNsMP4n0wmyyuGP8t%2BhZtAywHIymez%2B0YER87DjKsndt1PpEt%2BQhoI7r91i1JmrScewRmNmiDyNTMIp%2BOYaS02EJbh%2FEMKTA1B4JVeEOhVyhPgUQbIHK16xiYHgA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211106T203623Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAROFWDY5K23XN3JTD%2F20211106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f23a420c0643eb3c6032081126d27e53ffe81265f915c3f10ad5e9f56b6f20f"
        />
      </div>
    </div>
  );
}
