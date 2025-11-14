"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mern Ecommerce Website with admin panel",
    description:
      "A full stack ecommerce website built using React, Redux, Node.js, Express, MongoDB, and Tailwind CSS",
    image: "/images/projects/e-com.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jeffranjan/E-Com-Laptop-Store.git",
    previewUrl: "https://e-com-laptop-store-front-end.onrender.com",
  },
  {
    id: 2,
    title: "Two Good Website",
    description: "Shop your favourite products",
    image: "/images/projects/two-good-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jeffranjan/Two-Good",
    previewUrl: "https://jeffranjan.github.io/Two-Good/",
  },
  {
    id: 3,
    title: "Mini Docs App",
    description: "Storing Docs and Notes",
    image: "/images/projects/mini-docs.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Jeffranjan/Password- ",
    previewUrl: "https://mini-docs-liart.vercel.app",
  },
  {
    id: 4,
    title: "React Route Website",
    description: "react-router-dom with Github API",
    image: "/images/projects/react-router.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Jeffranjan/React-Router-Project",
    previewUrl: "https://react-router-project-green.vercel.app",
  },
  {
    id: 5,
    title: "A Sushi Website",
    description: "Restaurent website to buy sushi",
    image: "/images/projects/japanese-food-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jeffranjan/japnesefood",
    previewUrl: "https://jeffranjan.github.io/japnesefood/",
  },
  {
    id: 6,
    title: "React Password Generator",
    description: "For Password Generation",
    image: "/images/projects/password-generator.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Jeffranjan/Mini-Docs",
    previewUrl: "https://password-generator-zeta-inky.vercel.app",
  },
  {
    id: 7,
    title: "Drum Kit",
    description: "Play Drums with your keyboard",
    image: "/images/projects/drum-kit.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jeffranjan/DrumSet",
    previewUrl: "https://jeffranjan.github.io/DrumSet/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section>
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

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.3,
              delay: index * 0.4,
            }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
