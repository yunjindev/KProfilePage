import { Categories } from "./Categories/Categories.jsx"
import { Header } from "./Header/Header.jsx"
import { LogoSearch } from './LogoSearch/LogoSearch.jsx'

export function TopBar() {
    return (
        <>
            <Header />
            <LogoSearch />
            <Categories />
        </>
    )
}