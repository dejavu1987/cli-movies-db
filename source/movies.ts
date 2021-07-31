export type Movie = {
	title: string;
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
		year: 1994,
		rating: 9.2,
		director: "Frank Darabont",
		duration: 142,
		genres: ["Crime", "Drama"],
		actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
	},
	{
		title: "The Godfather",
		year: 1972,
		rating: 9.2,
		director: "Francis Ford Coppola",
		duration: 175,
		genres: ["Crime", "Drama"],
		actors: ["Marlon Brando", "Al Pacino", "James Caan", "James Caan"],
	},
	{
		title: "The Godfather: Part II",
		year: 1974,
		rating: 9.2,
		director: "Francis Ford Coppola",
		duration: 152,
		genres: ["Crime", "Drama"],
		actors: ["Marlon Brando", "Al Pacino", "James Caan", "James Caan"],
	},
	{
		title: "The Dark Knight",
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
		year: 1994,
		rating: 9.2,
		director: "Quentin Tarantino",
		duration: 154,
		genres: ["Crime", "Drama"],
		actors: ["John Travolta", "Uma Thurman", "Juriel Lomax", "Uma Thurman"],
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		year: 2003,
		rating: 9.2,
		director: "Peter Jackson",
		duration: 178,
		genres: ["Action", "Adventure", "Fantasy"],
		actors: ["Elijah Wood", "Elijah Wood", "Elijah Wood", "Elijah Wood"],
	},
	{
		title: "Inception",
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
] as Movie[];

export { movies };
