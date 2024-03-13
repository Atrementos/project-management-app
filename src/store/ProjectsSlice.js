import { createSlice } from '@reduxjs/toolkit'

function loadStateFromLocalStorage() {
    try {
        const state = localStorage.getItem('projects');
        if(state === null) {
            return {projects: []};
        }
        return JSON.parse(state);
    }
    catch (err) {
        return {projects: []};
    }
}

const initialState = loadStateFromLocalStorage();

const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialState,
    reducers: {
        addProject(state, action) {
            state.projects.push(action.payload);
        },
        deleteProject(state, action) {
            state.projects = state.projects.filter((project) => project.id !== action.payload);
        },
        addProjectTask(state, action) {
            const { projectId, task } = action.payload;
            const project = state.projects.find((project) => project.id === projectId);
            project.tasks.push(task);
        },
        removeProjectTask(state, action) {
            const { projectId, taskIndex } = action.payload;
            const project = state.projects.find((project) => project.id === projectId);
            project.tasks = project.tasks.filter((task, ind) => ind !== taskIndex);
        }
    }
})

export const projectsActions = projectsSlice.actions;

export default projectsSlice;