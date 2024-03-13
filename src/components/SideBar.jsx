import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SideBar() {
    const projects = useSelector((state) => state.projects.projects);

    return (
        <aside className="h-full w-1/4 bg-neutral-800 px-8 py-16 rounded-tr-2xl mt-8">
            <h2 className="uppercase text-slate-50 text-2xl font-semibold mb-8">Your Projects</h2>
            <Link to={'new'} className="bg-zinc-600 px-6 py-2 rounded-md text-slate-100 hover:bg-zinc-500 hover:text-slate-50"><strong>&#43;</strong> Add Project</Link>
            <div className="h-full overflow-y-auto">
                {projects.length > 0 &&
                    <ol className="mt-6">
                        {projects.map((project) => {
                            return <Link key={project.id} to={`${project.id}`} className="mt-2 text-lg block text-neutral-200 hover:bg-neutral-600 pl-2">
                                {project.title}
                            </Link>
                        })}
                    </ol>}
            </div>
        </aside>
    );
}