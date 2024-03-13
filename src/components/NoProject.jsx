import { Link } from 'react-router-dom'

export default function NoProject() {
    return (
        <div className="w-2/3 text-center mt-48">
            <img src="logo.png" alt="Project Manager Logo" className="h-24 w-24 object-contain mb-8 mx-auto" />
            <h1 className="mb-8 font-bold text-3xl">No Project Selected</h1>
            <p className="mb-8 ">Select a project or get started with a new one</p>
            <Link className="bg-stone-700 px-5 py-3 rounded-lg text-slate-300 hover:bg-stone-600 hover:text-slate-100 text-lg" to={'new'}>Create new project</Link>
        </div>
    )
}