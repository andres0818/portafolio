import { filtrado, perfil, portada } from "./img/libreria";

export const pages = [
  {
    name: "Triple AAA",
    description:
      "Se trata de una plataforma web que permite a los usuarios intercambiar libros usados o ya leídos con otros usuarios. Además, brinda la posibilidad de ofrecer servicios técnicos, como reparaciones, impresiones de libros o restauración, a través de una interfaz intuitiva. La plataforma cuenta con un sistema de inicio de sesión que permite a los usuarios acceder a su cuenta utilizando su correo electrónico o su cuenta de Google, lo que garantiza un alto nivel de seguridad y privacidad de los datos del usuario.",
    fotos: {
      uno: portada,
      dos: filtrado,
      tres: perfil,
    },
    ulr: "https://makaia-libreria.web.app/",
  },
];
