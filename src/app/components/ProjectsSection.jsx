"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Two Good Website",
    description: "A shopping website",
    image: "/images/projects/two-good-website.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Password Generator",
    description: "A website to Generate Passwords",
    image: "/images/projects/password-generator.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "A Sushi Website",
    description: "Restaurent website to buy sushi",
    image: "/images/projects/japanese-food-website.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Dru Kit",
    description: "We Website to play drums",
    image: "/images/projects/drum-kit.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Dice Game Website",
    description: "A website to roll dices",
    image: "/images/projects/dice-game.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Startup Website",
    description: "A basic DAO Website",
    image: "/images/projects/dao-website.png",
    tag: ["All", "Web"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
