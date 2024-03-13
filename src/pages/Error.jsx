import SideBar from "../components/SideBar";

export default function ErrorPage() {
    return (<div className="h-screen flex gap-8 overflow-hidden">
        <SideBar />
        <div className="text-center mt-40 mx-auto">
            <h1 className="mb-8 font-bold text-3xl">An error occured.</h1>
            <p className="text-lg mt-8">No page was found.</p>
        </div>
    </div>);
}