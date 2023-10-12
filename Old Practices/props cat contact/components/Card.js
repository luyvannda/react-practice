import Contact from "./Contact";
import whiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"

export default function card() {
  return (
    <div className="card">
      <Contact
        img={whiskerson}
        alt="a cat name Whiskerson"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />

      <Contact
        img={fluffykins}
        alt="a cat name Fluffykins"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />

      <Contact
        img={felix}
        alt="a cat name Felix"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />

      <Contact
        img={pumpkin}
        alt="a cat name Pumpkin"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />

    </div>
  )
}