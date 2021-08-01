export type Movie = {
	title: string;
	synopsis: string;
	year: number;
	rating: number;
	duration: number;
	director: string;
	actors: string[];
	genres: string[];
};

const movies = [
	{
		title: "The Shawshank Redemption",
		synopsis:
			"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		year: 1994,
		rating: 9.2,
		director: "Frank Darabont",
		duration: 142,
		genres: ["Crime", "Drama"],
		actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
	},
	{
		title: "The Godfather",
		synopsis:
			"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		year: 1972,
		rating: 9.2,
		director: "Francis Ford Coppola",
		duration: 175,
		genres: ["Crime", "Drama"],
		actors: ["Marlon Brando", "Al Pacino", "James Caan", "James Caan"],
	},
	{
		title: "The Godfather: Part II",
		synopsis:
			"The early life and career of Vito Corleone in 1920s New York is told from the perspective of his son, Michael.",
		year: 1974,
		rating: 9.2,
		director: "Francis Ford Coppola",
		duration: 152,
		genres: ["Crime", "Drama"],
		actors: ["Marlon Brando", "Al Pacino", "James Caan", "James Caan"],
	},
	{
		title: "The Dark Knight",
		synopsis:
			"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		year: 2008,
		rating: 9.2,
		director: "Christopher Nolan",
		duration: 152,
		genres: ["Action", "Thriller"],
		actors: [
			"Christian Bale",
			"Heath Ledger",
			"Maggie Gyllenhaal",
			"Aaron Eckhart",
		],
	},
	{
		title: "Pulp Fiction",
		synopsis: "The lives of two mob hit",
		year: 1994,
		rating: 9.2,
		director: "Quentin Tarantino",
		duration: 154,
		genres: ["Crime", "Drama"],
		actors: ["John Travolta", "Uma Thurman", "Juriel Lomax", "Uma Thurman"],
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		synopsis:
			"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		year: 2003,
		rating: 9.2,
		director: "Peter Jackson",
		duration: 178,
		genres: ["Action", "Adventure", "Fantasy"],
		actors: ["Elijah Wood", "Elijah Wood", "Elijah Wood", "Elijah Wood"],
	},
	{
		title: "Inception",
		synopsis:
			"A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		year: 2010,
		rating: 9.2,
		director: "Christopher Nolan",
		duration: 148,
		genres: ["Action", "Thriller"],
		actors: [
			"Leonardo DiCaprio",
			"Joseph Gordon-Levitt",
			"Ellen Page",
			"Leonardo DiCaprio",
		],
	},
	{
		title: "The Dark Knight Rises",
		synopsis:
			"Eight years after the Joker's reign of anarchy, the Dark Knight, with the help of the enigmatic Catwoman, is forced from his imposed exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla",
		year: 2012,
		rating: 9.2,
		director: "Christopher Nolan",
		duration: 152,
		genres: ["Action", "Thriller"],
		actors: [
			"Christian Bale",
			"Heath Ledger",
			"Maggie Gyllenhaal",
			"Aaron Eckhart",
		],
	},
	{
		title: "Dumb and Dumber",
		synopsis:
			"Dumb and Dumber is a family movie that tells the story of two friends, Yak and Dump, who live in a smallbershoot in the city of New York.",
		year: 2012,
		rating: 9.1,
		director: "John G. Avildsen",
		duration: 136,
		genres: ["Comedy", "Drama"],
		actors: ["Steve Martin", "Al Hames", "Nora Ephron", "John MSI"],
	},
	{
		title: "The Lord of the Rings: The Fellowship of the Ring",
		synopsis:
			"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		year: 2001,
		rating: 9.1,
		director: "Peter Jackson",
		duration: 178,
		genres: ["Action", "Adventure", "Fantasy"],
		actors: ["Elijah Wood", "Elijah Wood", "Elijah Wood", "Elijah Wood"],
	},
	{
		title: "Star Wars: Episode V - The Empire Strikes Back",
		synopsis:
			"The Empire Strikes Back, is the second of the original Star Wars trilogy.",
		year: 1980,
		rating: 9.1,
		director: "Irvin Kershner",
		duration: 136,
		genres: ["Action", "Adventure", "Sci-Fi"],
		actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Carrie Fisher"],
	},
	{
		title: "Schindler's List",
		synopsis:
			"In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the",
		year: 1993,
		rating: 9.1,
		director: "Steven Spielberg",
		duration: 148,
		genres: ["Biography", "Drama", "History"],
		actors: ["Liv Ullmann", "Liv Ullmann", "Liv Ullmann", "Liv Ullmann"],
	},
] as Movie[];

export { movies };
