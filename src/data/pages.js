import { filtrado, perfil, portada } from "./img/libreria";
import { dark, filter, light } from "./img/libreria/todo";

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
  {
    name: "TODO",
    description:
      "Se trata de una aplicación web que permite la gestión de tareas, con la posibilidad de agregar o eliminar tareas, tanto pendientes como completadas, a través de una interfaz intuitiva y fácil de usar. La aplicación ofrece un sistema de filtrado que permite al usuario visualizar todas las tareas, las tareas pendientes o las tareas completadas, lo que facilita la gestión y el seguimiento del progreso. Además, la aplicación cuenta con un diseño adaptable y moderno que incluye un tema claro y un tema oscuro, lo que permite una experiencia de usuario personalizada según las preferencias del usuario.",
    fotos: {
      uno: dark,
      dos: light,
      tres: filter,
    },
    ulr: "https://andres0818.github.io/todo-sprint-2/",
  },
];
