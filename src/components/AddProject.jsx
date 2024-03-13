import { v4 } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { projectsActions } from '../store/ProjectsSlice';

import LabeledInput from "./LabeledInput";

export default function AddProject() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function submitSaveProject(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const project = {
            id: v4(),
            title: data.get('title'),
            description: data.get('description'),
            dueDate: data.get('dueDate'),
            tasks: []
        };
        dispatch(projectsActions.addProject(project));
        navigate(-1);
    }

    return (
        <div className="w-2/3 mt-16 px-12">
            <form onSubmit={submitSaveProject}>
                <span className="flex flex-row justify-end w-full">
                    <Link className="px-8 py-2 font-semibold" to={'..'}>Cancel</Link>
                    <button className="px-8 py-2 bg-gray-800 text-slate-100 rounded-lg font-semibold hover:bg-gray-700 hover:text-slate-50" type='submit'>Save</button>
                </span>
                <LabeledInput InputTag={"input"} label="Title" type="text" name="title" required></LabeledInput>
                <LabeledInput InputTag={"textarea"} label="Description" type="text" rows="3" name="description" required></LabeledInput>
                <LabeledInput InputTag={"input"} label="Due date" type="date" name="dueDate" required></LabeledInput>
            </form>
        </div>
    );
}