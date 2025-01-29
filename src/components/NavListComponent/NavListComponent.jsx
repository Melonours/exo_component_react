import "./NavListComponent.scss"

function NavListComponent() {
  return (
    <ul className="nav_ul">
        <li className="nav_li"><span href="" onClick={()=> {console.log("Accueil");
        }}>Link 1</span></li>
        <li className="nav_li"><span href="" onMouseOver={()=> {console.log("Galerie");
        }}>Link 2</span></li>
        <li className="nav_li"><span href="" onDoubleClick={()=> {console.log("Contact");
        }}>Link 3</span></li>
    </ul>
  )
}

export default NavListComponent
