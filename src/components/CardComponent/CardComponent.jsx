import "./CardComponent.scss"

function CardComponent() {
  return (
    <div className="card_container">
      <div className="card_img">
        <img src="../../../public/img/la tartine.jpeg" alt="" />
      </div>
      <div className="card_text">
        <button>Quel est le titre</button>
        <h1>Mon premier artcle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut error asperiores repellat recusandae repellendus odio modi minima numquam, debitis eaque dignissimos quam sed expedita deleniti dolore dolor est cum.
        Perferendis aliquam, ipsam provident sed tenetur earum in error reiciendis eius nemo maiores ipsa quasi veniam sequi voluptatum vel optio praesentium nesciunt dolorum fugiat iste porro hic? Iusto, consectetur nulla.</p>
      </div>
    </div>
  )
}

export default CardComponent
