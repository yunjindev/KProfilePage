import { Categories } from "../Components/Categories/Categories.jsx"
import { Header } from "../Components/Header/Header.jsx"
import { LogoSearch } from '../Components/LogoSearch/LogoSearch.jsx'

export function TopBar() {
    return (
        <>
            <Header />
            <LogoSearch />
            <Categories />
            
        </>
    )
}