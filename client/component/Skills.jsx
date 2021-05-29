import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import reduxIcon from "@iconify-icons/logos/redux";
import graphqlIcon from "@iconify-icons/logos/graphql";
import reactIcon from "@iconify-icons/logos/react";
import postgresqlIcon from "@iconify-icons/logos/postgresql";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import html5 from "@iconify-icons/logos/html-5";
import javascriptIcon from "@iconify-icons/logos/javascript";
import apollostackIcon from "@iconify-icons/logos/apollostack";
import awsIcon from "@iconify-icons/logos/aws";
import pythonIcon from "@iconify-icons/logos/python";

const Skills = () => {
  return (
    <div className="skills">
      <h2> Skills & Technologies</h2>
      <div id="tech-icons">
        <section>
          <Icon icon={javascriptIcon} width="80" />
          <header>Javascript</header>
        </section>
        <section>
          <Icon icon={html5} width="50" />
          <header>HTML5</header>
        </section>
        <section>
          <Icon icon={reactIcon} width="80" />
          <header>React/React Native</header>
        </section>
        <section>
          <Icon icon={nodejsIcon} width="65" />
          <header>Node/Express</header>
        </section>
        <section>
          <Icon icon={reduxIcon} width="80" />
          <header>Redux</header>
        </section>
        <section>
          <Icon icon={postgresqlIcon} width="80" />
          <header>PostgreSQL/Sequelize</header>
        </section>
        <section>
          <Icon icon={graphqlIcon} width="80" />
          <header>GraphQL</header>
        </section>
        <section>
          <Icon icon={apollostackIcon} width="80" />
          <header>Apollo</header>
        </section>
        <section>
          <Icon icon={awsIcon} width="90" />
          <header>AWS</header>
        </section>
        <section>
          <Icon icon={pythonIcon} width="80" />
          <header>Python</header>
        </section>
      </div>
    </div>
  );
};

export default Skills;
