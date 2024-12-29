import cien_años_de_soledad from "../assets/books/cien_años_de_soledad.jpg";
import el_amor_en_los_tiempos_del_cólera from "../assets/books/el_amor_en_los_tiempos_del_cólera.jpg";
import GO_1984 from "../assets/books/1984.jpg";
import brave_new_world from "../assets/books/brave_new_world.jpg";
import el_alquimista from "../assets/books/el_alquimista.jpg";
import los_nombres_de_feliza from "../assets/books/los_nombres_de_feliza.jpg";
import to_kill_a_mockingbird from "../assets/books/to_kill_a_mockingbird.jpg";
import moby_dick from "../assets/books/moby_dick.jpg";
import the_great_gatsby from "../assets/books/the_great_gatsby.jpg";
import the_hobbit from "../assets/books/the_hobbit.jpg";
import frankenstein from "../assets/books/frankenstein.jpg";
import dracula from "../assets/books/dracula.jpg";
import los_juegos_del_hambre from "../assets/books/los_juegos_del_hambre.jpg";
import the_maze_runner from "../assets/books/the_maze_runner.jpg";
import en_llamas from "../assets/books/en_llamas.jpg";
import enders_game from "../assets/books/enders_game.jpg";
import las_cronicas_de_narnia from "../assets/books/las_cronicas_de_narnia.jpg";
import el_señor_de_los_anillos from "../assets/books/el_señor_de_los_anillos.jpg";
import game_of_thrones from "../assets/books/game_of_thrones.jpg";
import el_nombre_del_viento from "../assets/books/el_nombre_del_viento.jpg";


export const products = [
{
	id: 1,
	ISBN: 9789585118010,
	title: "Cien años de soledad",
	description: "En esa novela “muy larga y muy compleja”, García Márquez recrea el ambiente de su infancia en Aracataca.",
	images: [cien_años_de_soledad],
	language: "Español",
	format: "Libro Impreso",
	publisher: "Penguin Random House",
	price: 65000,
	author: "Gabriel García Márquez",
	gender: "Literatura y Ficción, Colombiana",
	pages: 512,
	publicationDate: 2024,
	stars: 5,
	discount: "20",
	status: "Active"
  },
  {
	id: 2,
	ISBN: 9789876543210,
	title: "El amor en los tiempos del cólera",
	description: "Una historia de amor épica entre Florentino Ariza y Fermina Daza, ambientada en un Caribe nostálgico.",
	images: [el_amor_en_los_tiempos_del_cólera],
	language: "Español",
	format: "Libro Impreso",
	publisher: "Random House Mondadori",
	price: 58000,
	author: "Gabriel García Márquez",
	gender: "Literatura y Ficción, Romance",
	pages: 450,
	publicationDate: 2023,
	stars: 4,
	discount: "15",
	status: "Active"
  },
  {
	id: 3,
	ISBN: 9781234567890,
	title: "1984",
	description: "Una distopía clásica de George Orwell que describe una sociedad totalitaria y controlada por el Gran Hermano.",
	images: [GO_1984],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Secker & Warburg",
	price: 75000,
	author: "George Orwell",
	gender: "Ciencia Ficción, Distopía",
	pages: 328,
	publicationDate: 2022,
	stars: 5,
	discount: "",
	status: "Active"
  },
  {
	id: 4,
	ISBN: 9780420284905,
	title: "Brave New World",
	description: "Un futuro donde la humanidad ha sido manipulada para alcanzar la estabilidad social a través de la tecnología.",
	images: [brave_new_world],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Chatto & Windus",
	price: 70000,
	author: "Aldous Huxley",
	gender: "Ciencia Ficción, Distopía",
	pages: 288,
	publicationDate: 2022,
	stars: 2,
	discount: "12",
	status: "Active"
  },
  {
	id: 5,
	ISBN: 9780140281997,
	title: "El Alquimista",
	description: "La famosa novela de Paulo Coelho sobre un joven pastor que busca su destino y su leyenda personal.",
	images: [el_alquimista],
	language: "Español",
	format: "Libro Impreso",
	publisher: "HarperCollins",
	price: 45000,
	author: "Paulo Coelho",
	gender: "Ficción, Filosofía",
	pages: 208,
	publicationDate: 2021,
	stars: 4,
	discount: "",
	status: "Active"
  },
  {
	id: 6,
    ISBN: 9786287659919,
	title: "Los Nombres De Feliza",
	description: "El 8 de enero de 1982, la escultora colombiana Feliza Bursztyn murió en un restaurante de París. Tenía cuarenta y ocho años. En el momento de su muerte repentina la acompañaban su marido y cuatro amigos.",
	images: [los_nombres_de_feliza],
	language: "Español",
    format: "Libro Impreso",
	publisher: "Alfaguara",
    price: 69000,
    author: "Juan Gabriel Vasquez",
	gender: "Literatura y Ficción, Colombiana",
	pages: 279,
	publicationDate: 2003,
    stars: 4,
	discount: "",
	status: "Active"
  },
  {
	id: 7,
	ISBN: 9780451524935,
	title: "To Kill a Mockingbird",
	description: "La famosa obra de Harper Lee que aborda el racismo, la justicia y la moralidad en el sur de Estados Unidos.",
	images: [to_kill_a_mockingbird],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "J.B. Lippincott & Co.",
	price: 60000,
	author: "Harper Lee",
	gender: "Ficción, Drama Social",
	pages: 324,
	publicationDate: 2021,
	stars: 5,
	discount: "8",
	status: "Active"
  },
  {
	id: 8,
	ISBN: 9781451673319,
	title: "Moby-Dick",
	description: "La historia del capitán Ahab y su obsesiva persecución de la ballena blanca, Moby Dick.",
	images: [moby_dick],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Harper & Brothers",
	price: 80000,
	author: "Herman Melville",
	gender: "Ficción, Aventura",
	pages: 600,
	publicationDate: 2023,
	stars: 5,
	discount: "",
	status: "Active"
  },
  {
	id: 9,
	ISBN: 9780553380163,
	title: "The Great Gatsby",
	description: "La novela de F. Scott Fitzgerald sobre el sueño americano, la decadencia y el amor perdido.",
	images: [the_great_gatsby],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Charles Scribner's Sons",
	price: 65000,
	author: "F. Scott Fitzgerald",
	gender: "Ficción, Clásico",
	pages: 180,
	publicationDate: 2021,
	stars: 4,
	discount: "20",
	status: "Active"
  },
  {
	id: 10,
	ISBN: 9780452295293,
	title: "The Hobbit",
	description: "La historia de Bilbo Baggins y su aventura para recuperar un tesoro custodiado por un dragón.",
	images: [the_hobbit],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Houghton Mifflin Harcourt",
	price: 55000,
	author: "J.R.R. Tolkien",
	gender: "Fantasía, Aventura",
	pages: 310,
	publicationDate: 2022,
	stars: 5,
	discount: "",
	status: "Active"
  },
  {
	id: 11,
	ISBN: 9781848551920,
	title: "Frankenstein",
	description: "La clásica novela de Mary Shelley sobre el poder de la ciencia y la creación de vida.",
	images: [frankenstein],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Macmillan Publishers",
	price: 40000,
	author: "Mary Shelley",
	gender: "Fantasía, Ciencia Ficción",
	pages: 280,
	publicationDate: 2023,
	stars: 4,
	discount: "30",
	status: "Active"
  },
  {
	id: 12,
	ISBN: 9781619611787,
	title: "Dracula",
	description: "La novela gótica de Bram Stoker sobre el Conde Drácula y su sed de sangre.",
	images: [dracula],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Archibald Constable & Co.",
	price: 52000,
	author: "Bram Stoker",
	gender: "Terror, Gótico",
	pages: 400,
	publicationDate: 2022,
	stars: 2,
	discount: "20",
	status: "Active"
  },
  {
	id: 13,
	ISBN: 9780061122415,
	title: "Los Juegos del hambre",
	description: "En una sociedad distópica, Katniss Everdeen lucha por sobrevivir en los Juegos del Hambre.",
	images: [los_juegos_del_hambre],
	language: "Español",
	format: "Libro Impreso",
	publisher: "Scholastic Press",
	price: 65000,
	author: "Suzanne Collins",
	gender: "Ciencia Ficción, Acción",
	pages: 450,
	publicationDate: 2023,
	stars: 5,
	discount: "20",
	status: "Active"
  },
  {
	id: 14,
	ISBN: 9780553588493,
	title: "The Maze Runner",
	description: "Thomas debe sobrevivir en un laberinto sin memoria de su pasado, enfrentando desafíos mortales.",
	images: [the_maze_runner],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Delacorte Press",
	price: 50000,
	author: "James Dashner",
	gender: "Ciencia Ficción, Aventura",
	pages: 360,
	publicationDate: 2022,
	stars: 4,
	discount: "18",
	status: "Active"
  },
  {
	id: 15,
	ISBN: 9780439023528,
	title: "En llamas",
	description: "La secuela de los Juegos del Hambre, donde Katniss debe enfrentar una nueva amenaza.",
	images: [en_llamas],
	language: "Español",
	format: "Libro Impreso",
	publisher: "Scholastic Press",
	price: 70000,
	author: "Suzanne Collins",
	gender: "Ciencia Ficción, Acción",
	pages: 390,
	publicationDate: 2023,
	stars: 5,
	discount: "15",
	status: "Active"
  },
  {
	id: 16,
	ISBN: 9780451468084,
	title: "Ender's Game",
	description: "La historia de Ender Wiggin, un joven brillante que es entrenado para liderar una guerra interplanetaria.",
	images: [enders_game],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Orson Scott Card",
	price: 60000,
	author: "Orson Scott Card",
	gender: "Ciencia Ficción, Acción",
	pages: 350,
	publicationDate: 2023,
	stars: 2,
	discount: "20",
	status: "Active"
  },
  {
	id: 17,
	ISBN: 9780136020890,
	title: "Las crónicas de Narnia",
	description: "Una serie de libros donde niños viajan a un mundo mágico llamado Narnia.",
	images: [las_cronicas_de_narnia],
	language: "Español",
	format: "Libro Impreso",
	publisher: "HarperCollins",
	price: 80000,
	author: "C.S. Lewis",
	gender: "Fantasía, Aventura",
	pages: 720,
	publicationDate: 2023,
	stars: 5,
	discount: "",
	status: "Active"
  },
  {
	id: 18,
	ISBN: 9780072950335,
	title: "El señor de los anillos",
	description: "Una épica historia de fantasía donde un hobbit, Frodo, debe destruir un anillo maldito.",
	images: [el_señor_de_los_anillos],
	language: "Español",
	format: "Libro Impreso",
	publisher: "George Allen & Unwin",
	price: 90000,
	author: "J.R.R. Tolkien",
	gender: "Fantasía, Aventura",
	pages: 1178,
	publicationDate: 2023,
	stars: 5,
	discount: "30",
	status: "Active"
  },
  {
	id: 19,
	ISBN: 9780439064873,
	title: "A Game of Thrones",
	description: "La primera novela de la saga de fantasía que inspiró la exitosa serie de televisión.",
	images: [game_of_thrones],
	language: "Inglés",
	format: "Libro Impreso",
	publisher: "Bantam Books",
	price: 95000,
	author: "George R.R. Martin",
	gender: "Fantasía, Drama",
	pages: 835,
	publicationDate: 2024,
	stars: 5,
	discount: "22",
	status: "Active"
  },
  {
	id: 20,
	ISBN: 9780739360385,
	title: "El nombre del viento",
	description: "La historia de Kvothe, un joven que se convierte en una leyenda en un mundo mágico y peligroso.",
	images: [el_nombre_del_viento],
	language: "Español",
	format: "Libro Impreso",
	publisher: "DAW Books",
	price: 67000,
	author: "Patrick Rothfuss",
	gender: "Fantasía, Aventura",
	pages: 662,
	publicationDate: 2023,
	stars: 3,
	discount: "",
	status: "Active"
}
]