import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon, InlineIcon } from "@iconify/react";
import mediumIcon from "@iconify-icons/logos/medium";

export default function Articles() {
  return (
    <div id="articles">
      <h2 className="skill-title">Articles</h2>
      <div className="card">
        <img
          className="card-img-top"
          src="https://drive.google.com/uc?export=view&id=18CVRd-X7x-3s0dJmpYkJR2i9TmJ6oFt5"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">The GRAND dilemma</h5>
          <p className="card-text">
            a guide to setting up the GRAND stack with Typescript.
          </p>
        </div>

        <div className="card-body footer">
          <a
            href="https://alan-alban.medium.com/the-grand-dilemma-e608bca16bbf"
            className="card-link"
          >
            Read Article
          </a>
          <Icon icon={mediumIcon} />
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://drive.google.com/uc?export=view&id=1dYu7HB-woeHrLAcFi8ihp1GmfAym4N4g"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            Deploying Your Express.JS Apps to AWS in 7 steps
          </h5>
          <p className="card-text">
            This article is intended for people who, like me, intend to to build
            and deploy their own websites in AWS. I’ve gathered knowledge from
            several sources and this is a summary of everything I picked up
            along the way.
          </p>
        </div>

        <div className="card-body footer">
          <a
            href="https://alan-alban.medium.com/deploying-your-express-js-apps-to-aws-in-7-steps-883d51365406"
            className="card-link"
          >
            Read Article
          </a>
          <Icon icon={mediumIcon} />
        </div>
      </div>
    </div>
  );
}
