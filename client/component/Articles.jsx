import React from "react";

export default function Articles() {
  return (
    <div id="articles">
      <h2 className="skill-title">Articles</h2>
      <blockquote
        className="embedly-card"
        //data-card-image="https://i.pinimg.com/originals/d9/d0/87/d9d0873e686b9cdf2fe92c28a6641a39.jpg"
      >
        <h4>
          <a href="https://alan-alban.medium.com/deploying-your-express-js-apps-to-aws-in-7-steps-883d51365406">
            Deploying Your Express.JS Apps to AWS in 7 steps
          </a>
        </h4>
        <p>
          This article is intended for people who, like me, intend to to build
          and deploy their own websites in AWS. I&apos; ve gathered knowledge
          from several sources and this is a summary of everything I picked up
          along the way. AWS offers a 12 month free subscription.
        </p>
      </blockquote>

      <blockquote
        className="embedly-card"
        // data-card-image="https://image.slidesharecdn.com/allaboutgrandstack-180322093905/95/all-about-grand-stack-graphql-react-apollo-and-neo4j-mark-needham-greecejs-23-7-638.jpg?cb=1521711567"
      >
        <h4>
          <a href="https://alan-alban.medium.com/the-grand-dilemma-e608bca16bbf">
            The GRAND dilemma
          </a>
        </h4>
        <p>a guide to setting up the GRAND stack with Typescript.</p>
      </blockquote>
    </div>
  );
}
