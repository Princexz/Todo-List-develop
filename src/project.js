// eslint-disable-next-line import/no-cycle
import { getProjects, start } from './start';

class Project {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase();
    this.todos = [];
  }
}

const projectModule = (() => {
  function createProject(target) {
    const projects = getProjects();
    const targetValue = target.value.toLowerCase();
    const invalidName = projects.find((element) => element.name.toLowerCase() === targetValue);

    if (target.value !== '' && !invalidName) {
      const newProject = new Project(target.value);
      projects.push(newProject);
      localStorage.toDoProjects = JSON.stringify(projects);

      start();
    }
    target.value = '';
  }

  return { createProject };
})();

function removeProject(projects, project) {
  projects = projects.filter((element) => element.id !== project.id);
  localStorage.toDoProjects = JSON.stringify(projects);
}

export default projectModule;
export { Project, projectModule, removeProject };