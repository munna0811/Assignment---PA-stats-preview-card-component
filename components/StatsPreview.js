import React from "react";
import imgDe from "../images/image-header-desktop.jpg";
import imgMo from "../images/image-header-mobile.jpg";

const StatsPreview = () => {
  const data = [
    {
      label: "10k+",
      name: "Companies",
    },
    { label: "314", name: "Templates" },
    { label: "12M+", name: "Queries" },
  ];
  return (
    <div className="container">
      <div className="matter">
        <h1 className="heading">
          Get <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span> that
          help your business grow.
        </h1>
        <p className="para">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats-numbers">
          {data.map((e) => (
            <div className="stats">
              <h1 className="label">{e.label}</h1>
              <p className="name">{e.name}</p>
            </div>
          ))}
        </div>
      </div>

      <picture className="picture">
        <source media="(max-width:1440px)" srcSet={imgDe} className="image" />
        <source media="(max-width:375px)" srcSet={imgMo} className="image" />
        <img src={imgDe} alt="background" className="image" />
      </picture>
    </div>
  );
};

export default StatsPreview;
