import React from "react";
import LinkButton from "./LinkButton";

export default function Projects() {
  return (
    <div className="projects">
      <div id="los-santos">
        <img src="https://drive.google.com/uc?export=view&id=1iIg4_y0iWPgwupFmnIIcjmsHuJ_mufdL" />
        <div className="project-description">
          <div className="description-text">
            <h2>Grace Hopper Motors</h2>
            <section>
              <p>
                A full-stack e-commerce application. The app allows you to buy
                vehicles on both visitor and user mode. You can sign in, add
                vehicles to your cart, and come back later to checkout if you
                like.
              </p>
              <p>
                I worked in a team of four. I implement Login/Signup, the
                checkout process, including updating the database and
                summarizing the user&apos;s items. I also implemented an
                inventory admin feature that allows you to add or remove items
                from inventory.
              </p>
              <p className="tech-used">
                <span>Technologies used:</span> React JS, Redux, Express,
                PostgreSQL, Sequelize
              </p>
            </section>
          </div>
          <div className="description-links">
            <LinkButton
              source="https://github.com/aalban3/graceshopper"
              label="Github"
            />
            <LinkButton
              source="http://gh-motors.herokuapp.com/"
              label="Website"
            />
          </div>
        </div>
      </div>
      <div id="jade">
        <div className="project-description">
          <div className="description-text">
            <h2>Jade Finance</h2>
            <section>
              <p>
                A personal financial application that lets you connect with
                friends and keep each other accountable. Jade uses the Plaid API
                to pull bank account information and summarizes it in your
                account.
              </p>
              <p>
                I worked in a team of four. I implement Login/Signup, Tab
                navigation component, the account stack. Plaid integration,
                including the GraphQL back-end. I also implemented edit and
                delete budgets.
              </p>
              <p className="tech-used">
                <span>Technologies used:</span> React Native, GraphQL, Apollo,
                Victory JS, Express, PostgreSQL, Sequelize
              </p>
            </section>
          </div>
          <div className="description-links">
            <LinkButton
              source="https://github.com/FSA-Team-Mercury/jade"
              label="Github"
            />
            <LinkButton
              source="https://www.youtube.com/watch?v=M4-Rp0c6zBU&list=PLx0iOsdUOUmnPA9l9RyeENObqv4SJi-_S&index=3&t=9s"
              label="Demo"
            />
          </div>
        </div>
        <img src="https://drive.google.com/uc?export=view&id=1qpp9PGn7bdDzckFkBExXlkWtocDYCyN0" />
      </div>
      <div id="neo-graph">
        <img src="https://drive.google.com/uc?export=view&id=1CjiBGDdGIjDgJSHf53M5YYjArZRDD9Dx" />
        <div className="project-description">
          <div className="description-text">
            <h2>Social Grapher</h2>
            <section>
              <p>
                A social network graph prototype application that uses the
                GRANDstack. This applications allows users to add tweets, which
                can be visualized in a graph data sctructure.
              </p>
              <p>
                Most tutorials are written in pure JS, but I decided to
                experiemt with Typescript for this project.{" "}
              </p>
              <p className="tech-used">
                <span>Technologies used:</span> GraphQL, React JS, Apollo, Neo4J
                Database, Typescript.
              </p>
            </section>
          </div>
          <div className="description-links">
            <LinkButton
              source="https://github.com/aalban3/social-network-graph"
              label="Github"
            />
            <LinkButton
              source="https://www.youtube.com/watch?v=leRvagxmJus"
              label="Video Demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
