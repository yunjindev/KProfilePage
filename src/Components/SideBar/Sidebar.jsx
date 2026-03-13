import "./sidebar.css"
export function Sidebar() {
    const specialsList = ["Kpop Polls", "Kpop Qyuzzes", "Kpop - Who wore it better", "Kpop Ships", "Kpop Facts", "Kpop Lists", "Kpop Discographies", "Kpop Albums Info", "Kpop Positions Explained", "Ultimate K-Pop Vocab Guide", "Ultimate J-Pop Vocab Guide", "Who is Who: Kpop Girl Groups", "Who is Who Kpop Boy Groups", "Groups Debut Dates", "Current Kpop Pre-Debut Groups", "March Kpop Comebacks", "March Kpop Birthdays", "Kpop Girl Group Lightsticks", "Kpop Boy Groups Lightsticks", "Suggestions"]
    return (
        <div className="sidebargrid">
            <div>
                <h1>Kpop Specials</h1>
            </div>
            <div className="sidebarContainer">
                {specialsList.map((items) => (
                    <a className="sidebaroptions" href="#" key={items}>{items}</a>
                ))}
            </div>
        </div>
    )
}