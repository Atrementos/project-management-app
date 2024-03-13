import { useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { projectsActions } from '../store/ProjectsSlice';

export default function ProjectInfo() {
    const projects = useSelector((state) => state.projects.projects);
    const dispatch = useDispatch();
    const taskRef = useRef();

    const { projectId } = useParams();

    const project = projects.find((project) => project.id === projectId);

    function handleTaskSave() {
        if (taskRef.current.value) {
            dispatch(projectsActions.addProjectTask({ projectId: projectId, task: taskRef.current.value }));
            taskRef.current.value = '';
        }
        console.log(project.tasks);
    }

    function handleDeleteProject(projectId) {
        dispatch(projectsActions.deleteProject(projectId));
    }

    return (<div className="mt-32 w-2/3 px-8">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">{project.title}</h2>
        <Link to={'..'}><button className="bg-stone-200 hover:bg-red-200 px-5 py-1 text-lg float-right" onClick={() => { handleDeleteProject(projectId) }}>Delete</button></Link>
        <h3 className="text-md text-neutral-500 mb-5">{project.dueDate}</h3>
        <p className="text-lg text-neutral-700 mb-4">{project.description}</p>
        <hr className="mb-5 border-2 border-neutral-200" />
        <h2 className="text-3xl font-bold text-neutral-700 mb-4">Tasks</h2>
        <div className="mb-6">
            <input className="mr-4 border-blue-800 bg-neutral-200" type="text" ref={taskRef} />
            <button className="font-semibold px-2 py-2 hover:bg-stone-200" onClick={handleTaskSave}>Add task</button>
        </div>
        {project.tasks.length > 0 ?
            <ol>
                {project.tasks.map((task, taskIndex) => {
                    return <li key={taskIndex} className="whitespace-pre-wrap my-2">
                        <button className='mr-3' onClick={() => { dispatch(projectsActions.removeProjectTask({ projectId, taskIndex })) }}>&#10005;</button><span>{task}</span>
                    </li>
                })}
            </ol>
            : <p>This project does not have any tasks yet.</p>}
    </div>);
}