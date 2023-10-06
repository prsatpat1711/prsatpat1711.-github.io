import React from "react";
import { ArrowBarDown } from "react-bootstrap-icons";

export default function Background() {
  const projects = [
    {
      id: 1,
      projectName: "My portfolio",
      description: "It is this webapp itself!",
      link: "https://github.com/prsatpat1711/prsatpat1711.-github.io",
    },
    {
      id: 2,
      projectName: "PratChat",
      description:
        "It is a fullstack chat webapp, currently under construction!",
      link: "https://github.com/prsatpat1711/prsatpat1711.github.io",
    },
    {
      id: 3,
      projectName: "Gamerino",
      description:
        "It is a webapp of game descriptions, currently under construction!",
      link: "https://github.com/prsatpat1711/gamerino",
    },
  ];

  return (
    <div className="text-bg-dark p-3 text-center">
      <h1 className="d-block">Checkout my projects here</h1>
      <ArrowBarDown size={50} />
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">Index</th>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            return (
              <tr className="table-dark">
                <th scope="row">{project.id}</th>
                <td>{project.projectName}</td>
                <td>{project.description}</td>
                <td>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.projectName}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
