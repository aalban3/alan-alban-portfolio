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
        <img src="https://aa-portfolio-static.s3.us-east-1.amazonaws.com/Lhqk5VO1PyLc_4436_2880.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCFFGZUgIMr6lxLVjYYSo5LAVKVOgy38O8FCGiaodrwhQIgEkhuZet4xSim3%2BPP6Yum0SXYkg8F9pd9YuvtQ8gf8yUqlgMIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgwwOTkxNjYxNzcxMDkiDBeHhMTMSVIWkLDLzSrqAuvi9QW9kJXXRU9vG84sxBDfIbc01Bw9uWEyDc25%2BrIcRpMTDH0tDncGRIM%2FeKBu33kJuXoM3vsRPA3n1THOXbvXXGY3QpucjGXAtnoGrygkizYUM1prToiQZ%2BpHk7qyf3an64Wwx0uKfmdJuoKzr7cliYEshdDw49%2Bgj%2BJMK8itT9W%2BxO1bdjKdb2Za3eSZ7dhLvFEqf9qBJfmq6tfitAtlGeE3Hd2d4odRlDG7C0LTV8N18MTC3RQhGO%2Fo68X8AzUC74aUI5qOGVGQ9jmgMSqF6cC%2B06LDpeVBUKnei%2Bhlt%2BwwLFE8SlNC5kT6n7fJe%2FUMohRFHv1xGp5ngvTKo39WYemO9zSgYCUfF4hB6tvr2GQ3JAGFaaUEIC9vscYBT7K5JjyZtQXSMt4G%2B0ojYX25e%2Bv10rnTLA5tkINk5dV9M%2BTr%2BkNiWaT6YjBWn%2FiAGAnJAII5ZUy%2FXxI6Oma%2BDPrCkVEgZoAwpt2eMIjDm4wGOrMCYvfZuV3JbZbg9B%2F2Jh%2FSD3VoG2sLcW2ct6dvtCALGOlBwQGVicz99hW93jq1pplzdoTz45Zl8iSCBPqpDUYMuIMSA5rw7Z9Pw%2F2NBechKeKm5cOBkfqBJzJLm8niG2WfBEDKcHf61jFTFR2phHRNViPzNy%2FiWxJP2k4KcHFGaU3GtnVHthfj1a4E7nans5JGJsf4bv%2F5wXQDBzNfUqwG9SfhbV0YzHaCXtkpLXycxJ8aTx8qokJyJZ1JiXdC26A1FAkihYBIfg85WdMUgEFy0vxLjJAeMbkNsMP4n0wmyyuGP8t%2BhZtAywHIymez%2B0YER87DjKsndt1PpEt%2BQhoI7r91i1JmrScewRmNmiDyNTMIp%2BOYaS02EJbh%2FEMKTA1B4JVeEOhVyhPgUQbIHK16xiYHgA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211106T202544Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAROFWDY5K23XN3JTD%2F20211106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55ab4d88e428cd8235f8d15570be62a761a7cf4f6c50c8948f9cf1944b60b962" />
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
