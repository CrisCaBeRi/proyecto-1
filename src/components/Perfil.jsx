import "./Perfil.scss";
import freddie from "./assets/freddie.jpg";
import jhon from "./assets/jhon.jpg";
import brian from "./assets/brian.jpg";
import roger from "./assets/roger.jpg";
import x from "./assets/x.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";

export default function Perfil({
  image,
  name,
  rol,
  description,
  born,
  death,
  country,
  igUrl,
  fbUrl,
  xUrl,
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
      <img className="image-star" src={imageSinger} alt="" />
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
        <p>{description}</p>

        <div className="buttons-group">
          <button
            onClick={() => {
              console.log(igUrl);
              window.open(igUrl, "_blank");
            }}
          >
            <picture>
              <img src={ig} alt="Instagram" />
            </picture>
          </button>
          <button onClick={() => window.open(fbUrl, "_blank")}>
            <picture>
              <img src={fb} alt="Facebook" />
            </picture>
          </button>
          <button onClick={() => window.open(xUrl, "_blank")}>
            <picture>
              <img src={x} alt="X" />
            </picture>
          </button>
        </div>

      </span>
    </article>
  );
}
