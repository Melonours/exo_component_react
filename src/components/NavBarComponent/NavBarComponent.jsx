import NavListComponent from "../NavListComponent/NavListComponent"
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent"
import "./NavBarComponent.scss"

function NavBarComponent() {
  return (
    <nav>
      <NavListComponent/>
      <SearchBarComponent/>
    </nav>
  )
}

export default NavBarComponent
