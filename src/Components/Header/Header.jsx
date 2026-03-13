
import './header.css'
export function Header() {
    const headerList = ["Kpop - Who Wore it Better?", "Kpop Polls", "Kpop Quizzes", "Kpop Facts", "Kpop Discographies", "Suggestions"]

    return (
        <div className="header">
            {headerList.map((item) => {
                return <a href="#">{item}</a>
            })}
        </div>
    )
}