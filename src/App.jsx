import React from "react";
import Perfil from "./components/Perfil/Perfil";
import { Contador } from "./components/Contador/Contador";

export const App = () => {
  const integrantesQueen = [
    {
      image: "freddie",
      name: "Freddie Mercury",
      rol: "Cantante",
      description:
        "Freddie Mercury, nacido el 5 de septiembre de 1946 en Zanzíbar (actualmente Tanzania), fue un icónico cantante y compositor británico. Conocido por su poderosa voz y su presencia escénica única, Freddie se convirtió en el corazón y alma de Queen. Su inigualable talento musical y carisma cautivaron a audiencias de todo el mundo. A lo largo de su carrera, dejó un legado eterno con clásicos como 'Bohemian Rhapsody' y 'We Are the Champions'. Trágicamente, nos dejó el 24 de noviembre de 1991, pero su influencia perdura y su música sigue siendo amada por generaciones.",
      born: "1946-09-05",
      death: "1991-11-24",
      country: "Zanzíbar (actualmente Tanzania)",
      igUrl: "https://www.instagram.com/freddiemercury/",
      xUrl: "https://twitter.com/freddie_mercury",
      fbUrl: "https://www.facebook.com/freddiemercury",
    },
    {
      image: "brian",
      name: "Brian May",
      rol: "Guitarrista",
      description:
        "Brian May, nacido el 19 de julio de 1947 en Hampton, Londres, es un destacado guitarrista y compositor británico. Además de ser un miembro fundamental de Queen, Brian también es conocido por su destreza en la guitarra y su habilidad para crear composiciones únicas. Su contribución a la música incluye éxitos como 'We Will Rock You' y 'I Want It All'. Brian sigue siendo una figura respetada en la industria musical y continúa su legado como uno de los mejores guitarristas de todos los tiempos.",
      born: "1947-07-19",
      country: "Hampton, Londres, Reino Unido",
      igUrl: "https://www.instagram.com/brianmayforreal/",
      xUrl: "https://twitter.com/DrBrianMay",
      fbUrl: "https://www.facebook.com/BrianMayCom",
    },
    {
      image: "roger",
      name: "Roger Taylor",
      rol: "Baterista",
      description:
        "Roger Taylor, nacido el 26 de julio de 1949 en King's Lynn, Norfolk, es un talentoso baterista y vocalista británico. Junto con su destacada habilidad en la batería, Roger contribuyó significativamente como vocalista y compositor en Queen. Su energía en el escenario y su habilidad para crear melodías pegajosas le valieron el reconocimiento de la audiencia. Con éxitos como 'Radio Ga Ga' y 'A Kind of Magic', Roger ha dejado una marca indeleble en la historia de la música.",
      born: "1949-07-26",
      country: "King's Lynn, Norfolk, Reino Unido",
      igUrl: "https://www.instagram.com/rogertaylorofficial/",
      xUrl: "https://twitter.com/OfficialRMT",
      fbUrl: "https://www.facebook.com/RogerTaylor",
    },
    {
      image: "john",
      name: "John Deacon",
      rol: "Bajista",
      description:
        "John Deacon, nacido el 19 de agosto de 1951 en Leicester, Leicestershire, es un talentoso bajista y compositor británico. Como el miembro menos visible de Queen, John desempeñó un papel esencial en la creación de la distintiva base rítmica del grupo. Sus contribuciones incluyen éxitos como 'Another One Bites the Dust' y 'Under Pressure'. Aunque se retiró de la música activa, su impacto en la historia de Queen perdura.",
      born: "1951-08-19",
      country: "Leicester, Leicestershire, Reino Unido",
      igUrl: "https://www.facebook.com/groups/453604908587158",
      xUrl: "https://twitter.com/JohnDeacon_",
      fbUrl: "https://www.instagram.com/johndeacon_/",
    },
  ];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4.5rem",
          fontFamily: "Franklin Gothic Medium",
          color: "gold",
        }}
      >
        Miembros de Queen
      </h1>
      {integrantesQueen.map((integrante) => {
        return (
          <Perfil
            image={integrante.image}
            name={integrante.name}
            rol={integrante.rol}
            description={integrante.description}
            born={integrante.born}
            death={integrante.death}
            country={integrante.country}
            igUrl={integrante.igUrl}
            fbUrl={integrante.fbUrl}
            xUrl={integrante.xUrl}
          />
        );
      })}
      <Contador></Contador>
    </>
  );
};
