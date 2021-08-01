import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import { movies, Movie } from "./movies";
import { useInput } from "ink";
import TextInput from "ink-text-input";
import SelectInput from "ink-select-input";

const App: FC<{ name?: string }> = () => {
	const [movie, setMovie] = useState<Movie>(movies[0] as Movie);
	const [query, setQuery] = useState<string>("");
	const [genre, setGenre] = useState<string>("");
	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleSelect = (item: { label: string; value: string }) => {
		setGenre(item.value);
	};

	const genres = [
		{
			label: "All",
			value: "",
		},
		{
			label: "Crime",
			value: "Crime",
		},
		{
			label: "Drama",
			value: "Drama",
		},
		{
			label: "Comedy",
			value: "Comedy",
		},
		{
			label: "Thriller",
			value: "Thriller",
		},
		{
			label: "Fantasy",
			value: "Fantasy",
		},
	];

	useInput((input, key) => {
		if (key.ctrl) {
			if (input === "f") {
				setShowFilter(true);
			}
		}
		if (key.escape && showFilter) {
			setShowFilter(false);
		}

		const movies = getFilteredMovies();

		if (!showFilter) {
			if (key.upArrow) {
				let index = movies.indexOf(movie) - 1;
				if (index < 0) {
					index = movies.length - 1;
				}

				setMovie(movies[index] as Movie);
			}
			if (key.downArrow) {
				let index = movies.indexOf(movie) + 1;

				if (index > movies.length - 1) {
					index = 0;
				}
				setMovie(movies[index] as Movie);
			}
		}
	});
	const getFilteredMovies = () =>
		movies.filter(
			(movie) =>
				movie.title.toLowerCase().indexOf(query.toLowerCase()) > -1 &&
				((genre && movie.genres.indexOf(genre) > -1) || !genre)
		);

	return (
		<Box flexDirection="column" borderStyle="double">
			<Box flexDirection="column" alignSelf="center">
				<Text color="red">{` _____  _     _____  ___  ___              _             ______ ______ `}</Text>
				<Text color="red">{`/  __ \\| |   |_   _| |  \\/  |             (_)            |  _  \\| ___ \\`}</Text>
				<Text color="red">{`| /  \\/| |     | |   | .  . |  ___ __   __ _   ___  ___  | | | || |_/ /`}</Text>
				<Text color="red">{`| |    | |     | |   | |\\/| | / _ \\\\ \\ / /| | / _ \\/ __| | | | || ___ \\`}</Text>
				<Text color="red">{`| \\__/\\| |_____| |_  | |  | || (_) |\\ V / | ||  __/\\__ \\ | |/ / | |_/ /`}</Text>
				<Text color="red">
					{` \\____/\\_____/\\___/  \\_|  |_/ \\___/  \\_/  |_| \\___||___/ |___/  \\____/`}
				</Text>
			</Box>

			<Box borderStyle="bold" borderColor="green" paddingX={1}>
				<Box borderColor="gray" borderStyle="classic" width="67%" paddingX={1}>
					<Box marginRight={1}>
						<Text>Search:</Text>
					</Box>
					{showFilter ? (
						<TextInput value={query} onChange={setQuery} />
					) : (
						<>
							<Text color="green">"{query}"</Text>
							<Text color="cyan"> Press CTRL+F to update Filters</Text>
						</>
					)}
				</Box>
				<Box
					borderColor="gray"
					borderStyle="double"
					minWidth="33%"
					paddingX={1}
				>
					<Box marginRight={3}>
						<Text>Genre:</Text>
					</Box>
					{showFilter ? (
						<SelectInput items={genres} onSelect={handleSelect} />
					) : (
						<Text color="green">{genre}</Text>
					)}
				</Box>
			</Box>
			<Box>
				<Box
					borderStyle="bold"
					borderColor="green"
					padding={1}
					width="30%"
					flexDirection="column"
				>
					{getFilteredMovies().map(({ title, rating, year }) => (
						<Text key={title} inverse={movie && movie.title === title}>
							• {title}, <Text color="green">{year}</Text> ({rating})
						</Text>
					))}
				</Box>
				<Box
					borderStyle="bold"
					borderColor="green"
					padding={1}
					width="70%"
					flexDirection="column"
				>
					{movie && (
						<>
							<Text bold underline>
								{movie.title} <Text>({movie.year})</Text>
							</Text>
							<Text>
								<Text bold>Synopsis:</Text> {movie.synopsis}
							</Text>
							<Text>
								<Text bold>Rating:</Text> {movie.rating}
							</Text>
							<Text>
								<Text bold>Duration:</Text> {convertMinutes(movie.duration)} min
							</Text>
							<Text>
								<Text bold>Director:</Text> {movie.director}
							</Text>
							<Text>
								<Text bold>Actors:</Text> {movie.actors.join(", ")}
							</Text>
							<Text>
								<Text bold>Genre:</Text> {movie.genres.join(", ")}
							</Text>
						</>
					)}
				</Box>
			</Box>
			<Box
				justifyContent="center"
				borderStyle="bold"
				borderColor="green"
				padding={1}
			>
				<Text>
					&copy; Copyright, <Text color="red">CLIMoviesDB</Text>
				</Text>
			</Box>
			<Box>
				<Text>
					Press <Text color="cyan">UP</Text> or <Text color="cyan">DOWN</Text>{" "}
					arrow key to select Movie. Press <Text color="cyan">CTRL + F</Text> to
					show filters.
				</Text>
			</Box>
		</Box>
	);
};

// function that converts minutes to hour and minutes

function convertMinutes(minutes: number): string {
	let hours = Math.floor(minutes / 60);
	let minuten = minutes % 60;

	return `${hours}:${minuten < 10 ? "0" : ""}${minuten}`;
}

module.exports = App;
export default App;
