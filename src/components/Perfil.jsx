import "./Perfil.scss";
import freddie from "./assets/freddie.jpg";
import jhon from "./assets/jhon.jpg";
import brian from "./assets/brian.jpg";
import roger from "./assets/roger.jpg";

export default function Perfil({
  image,
  name,
  rol,
  description,
  born,
  death,
  country,
}) {
  let imageSinger;
  switch (image) {
    case "freddie":
      imageSinger = freddie;
      break;
    case "john":
      imageSinger = jhon;
      break;
    case "brian":
      imageSinger = brian;
      break;
    case "roger":
      imageSinger = roger;
      break;
    default:
      break;
  }

  return (
    <article className="profile-container">
      <img src={imageSinger} alt="" />
      <span>
        <h2>{name}</h2>
        <h3>{rol}</h3>
        <strong>Rol</strong>
        <hr />
        <h3>
          {born} {death ? `- ${death}` : ""}
        </h3>
        <strong>Nacimiento</strong>
        <hr />
        <h3>{country}</h3>
        <strong>Pais</strong>
        <hr />
        <strong>Historia</strong>
        <p>{description}</p>
      </span>
    </article>
  );
}
