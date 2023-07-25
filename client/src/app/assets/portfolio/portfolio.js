import NutriU from './Nutri-U/NutriUMain.png';
import Videogames from './Videogames/VideogamesMain.png';
import RifasMX from './RifasMX/RifasMxMain.png';
import Pixie from './Pixie/PixieMain.png';

import RifasMx2 from './RifasMX/RifasMx2.png';
import RifasMx3 from './RifasMX/RifasMx3.png';
import RifasMx4 from './RifasMX/RifasMx4.png';

import NutriU2 from './Nutri-U/NutriU2.png';
import NutriU3 from './Nutri-U/NutriU3.png';
import NutriU4 from './Nutri-U/NutriU4.png';
import NutriU5 from './Nutri-U/NutriU5.png';

import Pixie1 from './Pixie/Pixie1.png';
import Pixie2 from './Pixie/Pixie2.png';
import Pixie3 from './Pixie/Pixie3.png';

const portfolio = [
 {
  id: 1,
  name: 'Nutri-U Food App',
  src: NutriU,
  demo: 'https://nutriapp-beryl.vercel.app',
  code: 'https://github.com/facoogle/Nutri-APP',
  descriptionEng:
   'This is the first project that i´ve been worked on with a teamgroup under the SCRUM methodology. It was our final project that allowed us to graduate from Henry Bootcamp. I worked in all the components and features, but the most difficult task that I´ve done were the Payment Gateway (using Stripe) and the creation and implementation of the models in the data base (using PostgreSQL)',
  descriptionEsp:
   'Este es el primer proyecto que realice en conjunto con un grupo de trabajo utilizando la metodología SCRUM. Fue el proyecto final que mi grupo debió realizar para graduarnos del Henry Bootcamp. Si bien tuve participacion en todo el proyecto y aporté en la mayoria de componentes, mis tareas más importantes fueron la pasarela de pago (se realizo utilizando Stripe) y la creacion e implementacion de varios modelos en la base de datos (se realizó utilizando PostgreSQL).',
  images: [NutriU, NutriU2, NutriU3, NutriU4, NutriU5],
 },
 {
  id: 2,
  name: 'Videogames Proyect',
  src: Videogames,
  demo: 'https://mrjuegoskapos.vercel.app',
  code: 'https://github.com/Pedrocaloi/MRjuegoskapos',
  descriptionEng:
   'My first Full Stack project, I did it to pass the last module of Henry´s Bootcamp. Completely developed by me using pure React and CSS for the front end, Node.js; Express.js and PostgreSQL for the back end. Due to evaluative restrictions I couldn´t use more frameworks and libraries in the project. The application consisted of a game search engine by genre and video game name (Using an ApiREST), with its detail card and the possibility of adding video games through a creation panel. Once the game was loaded, it was saved in the database and displayed along with the games brought from the API in the main menu.',
  descriptionEsp:
   'Mi primer proyecto Full Stack, lo realice para aprobar el ultimo módulo del Bootcamp de Henry. Completamemnte desarrollado por mi utilizando React puro y CSS para el front, Node.js; Express.js y PostgreSQL para el back. Debido a restricciones evaluativas no pude utilizar mas frameworks y librerias en el proyecto. La aplicación constaba de un buscador de juegos por genero y nombre del videojuego (Utilizando una ApiREST), con su detail card y la posibilidad de añadir videojuegos a traves de un panel de creacion, dicho juego una vez cargado se guardaba en la base de datos y se mostraba junto con los juegos traidos desde la API en el menu principal.',
  images: [Videogames],
 },
 {
  id: 3,
  name: 'RifasMX',
  src: RifasMX,
  demo: 'https://rifas-mx.vercel.app',
  code: 'https://github.com/Pedrocaloi/RifasMX',
  descriptionEng:
   'Full Stack application that I developed as a freelancer for a company completely on my own, I did both the front (using MaterialUI, and React Vite) and the back (using Node.js and Express.js). The project consisted of allowing the admin user, from an admin panel, to create raffles with the prize he wishes to draw (selecting both the number of numbers he wishes to raffle as well as the price of each raffle). Then users with accounts previously created and confirmed by email, could access and buy the number of numbers they wanted from the raffle they want, and through the MercadoPago API buy said numbers. Unfortunately, due to problems with the client, the project could not be completed in its entirety.',
  descriptionEsp:
   'Aplicacion Full Stack que desarrollé como freelancer para una empresa completamente por mi cuenta, realice tanto el front (utilizando MaterialUI, y React Vite) como el back (utilizando Node.js y Express.js). El proyecto consistía en que el usuario admin, desde un panel admin, pueda crear rifas con el premio que el desee sortear (seleccionando tanto la cantidad de números que desea rifar como asi tambien el precio de cada rifa). Luego los usuarios con cuentas previamente creadadas y confirmadas por email, pudiesen acceder y comprar la cantidad de numeros que quisiesen de la rifa que quieran, y mediante la API de MercadoPago comprar dichos números. Lamentablemente por inconvenientes con el cliente el proyecto no pudo concretarse en su totalidad.',
  images: [RifasMX, RifasMx2, RifasMx3, RifasMx4],
 },
 {
  id: 4,
  name: 'Pixie',
  src: Pixie,
  demo: '',
  code: 'https://github.com/Pedrocaloi/Pixie',
  descriptionEng:
   'Full Stack application that I developed entirely on my own as a freelancer for a company, I was in charge of creating the Front end as well as the Back end. This application is undoubtedly one of the most demanding I have worked on, it consisted of an application that performed a WebScrapping (a bot that accesses another page and performs X action as if it were a person) to a page of the judiciary of the state of Sonora, Mexico. According to the name, file number and year that was entered in the form, the bot was in charge of looking for matches on the page of the judiciary. Both the year and the file number could be passed or not, if any of those parameters were not passed, the bot would begin to iterate by auto-completing the fields (if the file number was not passed, the bot would first do a search with file 0001, save the matches if there were any, and continue with the next iteration until file 9999. The same happened if the year was not administered). In addition to WebScrapping, searching for the legal record of the person, it also searched for that name in an internal database that contained all the parcels in Hermosillo with their characteristics (address, owner´s name, cadastral nomenclature, etc). If the given name had one or more parcels to its name, it displayed a map component with that parcel location marked as a polygon. Unfortunately, due to problems with the client, the project never came to fruition in its entirety, and due to the size of the application and the internal database, it was impossible for me to deploy the project on my own.',
  descriptionEsp:
   'Aplicacion Full Stack que desarrollé completamente por mi cuenta como freelancer para una empresa, me encargué de la creación del Front end como del Back end. Esta aplicación es sin duda una de las mas exigentes en las que he trabajado, consistia en una aplicacion que realizaba un WebScrapping (un bot que accede a otra página y realiza X acción como si fuese una persona) a una página del poder judicial del estado de Sonora, Mexico. Segun el nombre, número de expediente y año que se introducia en el formulario, el bot se encargaba de buscar las coincidencias en la página del poder judicial. Podía pasarse o no tanto el año como el número de expediente, en caso que no se le pasaran alguno de esos parametros, el bot por su cuenta empezaba a iterar autocompletando los campos (si no se le pasaba numero de expediente, el bot hacia primero una búsqueda con el expediente 0001, guardaba las coincidencias si es que hubiese, y seguía con la siguiente iteración hasta el expediente 9999. Igual pasaba si no se le administraba el año). Ademas del WebScrapping buscando los antecedentes judiciales de la persona, tambien buscaba dicho nombre en una base de datos interna que contenía todas las parcelas de Hermosillo con sus caracteristicas (direccion, nombre del titular, nomenclatura catastral, etc). Si el nombre proporcionado contaba con una o mas parcelas a su nombre, mostraba un componente mapa con dicha ubicación de la parcela marcada como un polígono. Lamentablemente debido a inconvenientes con el cliente, el proyecto nunca llegó a concretarse en su totalidad, y debido al tamaño de la aplicacion y de la base de datos interna, me fué imposible deployar dicho proyecto por mi cuenta.',
  images: [Pixie, Pixie1, Pixie2, Pixie3],
 },
];

export default portfolio;
