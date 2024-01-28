import React from "react";
import { Icon } from "@iconify/react";
import reduxIcon from "@iconify-icons/logos/redux";
import graphqlIcon from "@iconify-icons/logos/graphql";
import reactIcon from "@iconify-icons/logos/react";
import postgresqlIcon from "@iconify-icons/logos/postgresql";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import javascriptIcon from "@iconify-icons/logos/javascript";
import azure from "@iconify-icons/logos/azure-icon";
import awsIcon from "@iconify-icons/logos/aws";
import pythonIcon from "@iconify-icons/logos/python";
import cSharp from "@iconify-icons/logos/c-sharp";
import java from "@iconify-icons/logos/java";

const Skills = () => {
  return (
    <div className="skills">
      <h1> SKILLS & TECHNOLOGIES</h1>
      <div id="tech-icons">
        <section>
          <Icon icon={javascriptIcon} width="80" />
          <header>Javascript</header>
        </section>
        <section>
          <Icon icon={cSharp} width="80" />
          <header>C# .NET Core</header>
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
          <header>PostgreSQL</header>
        </section>
        <section>
          <Icon icon={graphqlIcon} width="80" />
          <header>GraphQL</header>
        </section>
        <section>
          <Icon icon={awsIcon} width="90" />
          <header>AWS</header>
        </section>
        <section>
          <Icon icon={azure} width="90" />
          <header>Azure</header>
        </section>
        <section>
          <Icon icon={pythonIcon} width="80" />
          <header>Python</header>
        </section>
        <section>
          <Icon icon={java} width="80" />
          <header>Java w/ Spring Boot</header>
        </section>
      </div>
    </div>
  );
};

export default Skills;
