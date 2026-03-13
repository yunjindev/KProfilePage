import "./infosection.css"
import { Cards } from "../Components/Cards/Cards";
import { Sidebar } from "../Components/SideBar/Sidebar";

export function InfoSection() {
    return (
        <div className="infocontainer">
            <Cards />
            <Sidebar />
        </div>
    )
 }