import { configureStore } from '@reduxjs/toolkit'

import projectsSlice from './ProjectsSlice.js'

const projectsStore = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
    }
});

projectsStore.subscribe(() => {
    localStorage.setItem('projects', JSON.stringify(projectsStore.getState().projects));
})

export default projectsStore;