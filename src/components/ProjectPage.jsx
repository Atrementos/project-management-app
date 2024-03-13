import NoProject from "./NoProject"
import AddProject from "./AddProject"
import ProjectInfo from "./ProjectInfo"

export default function ProjectPage({ isAdding, currentProject, projects, onAddProject, onDeleteProject, onAddTask, onSaveButton, titleRef, descriptionRef, dueDateRef }) {
    let content = <EmptyProject onAddProject={onAddProject} />
    if (isAdding) {
        content = <AddProject onSaveButton={onSaveButton} titleRef={titleRef} descriptionRef={descriptionRef} dueDateRef={dueDateRef} />;
    }
    if (currentProject !== null) {
        content = <ProjectInfo project={projects[currentProject]} projectIndex={currentProject} onDeleteProject={() => onDeleteProject(currentProject)} onAddTask={onAddTask} />;
    }

    return content;
}