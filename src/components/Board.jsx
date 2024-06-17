import React, { useState, useEffect , useContext} from "react";
import Snake from "./Snake";
import Food from "./Food";
import Button from "./Button";
import Menu from "./Menu";
import { MyContext } from "../Context/MyContext";
import "./Board.css";

const getRandomFood = () => {
	let min = 2;
	let max = 98;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [x, y];
};

const initialState = {
	food: getRandomFood(),
	direction: "RIGHT",
	speed: 100,
	route: "menu",
	snakeDots: [
		[0, 0],
		[0, 2],
	],
};

const Board = () => {
	const [state, setState] = useState(initialState);

	const { myState, setMyState } = useContext(MyContext);
	useEffect(() => {
		const interval = setInterval(moveSnake, state.speed);
		document.onkeydown = onKeyDown;
		return () => clearInterval(interval);
	}, [state.speed, state.route, state.direction, state.snakeDots]);

	useEffect(() => {
		onSnakeOutOfBounds();
		onSnakeCollapsed();
		onSnakeEats();
	}, [state.snakeDots]);

	const onKeyDown = (e) => {
		e.preventDefault();
		switch (e.keyCode) {
			case 37 :
				setState(prevState => ({ ...prevState, direction: "LEFT" }));
				break;
			case 38:
				setState(prevState => ({ ...prevState, direction: "UP" }));
				break;
			case 39:
				setState(prevState => ({ ...prevState, direction: "RIGHT" }));
				break;
			case 40:
				setState(prevState => ({ ...prevState, direction: "DOWN" }));
				break;
		}
	};

	const moveSnake = () => {
		let dots = [...state.snakeDots];
		let head = dots[dots.length - 1];
		if (state.route === "game") {
			switch (state.direction) {
				case "RIGHT":
					head = [head[0] + 2, head[1]];
					break;
				case "LEFT":
					head = [head[0] - 2, head[1]];
					break;
				case "DOWN":
					head = [head[0], head[1] + 2];
					break;
				case "UP":
					head = [head[0], head[1] - 2];
					break;
			}
			dots.push(head);
			dots.shift();
			setState(prevState => ({ ...prevState, snakeDots: dots }));
		}
	};

	const onSnakeOutOfBounds = () => {
		let head = state.snakeDots[state.snakeDots.length - 1];
		if (state.route === "game") {
			if (
				head[0] > 100 ||
				head[1] > 100 ||
				head[0] < 0
				|| head[1] < 0
			) {
				gameOver();
			}
		}
	};
	const onSnakeCollapsed = () => {
		let snake = [...state.snakeDots];
		let head = snake[snake.length - 1];
		snake.pop();
		snake.forEach((dot) => {
			if (head[0] === dot[0] && head[1] === dot[1]) {
				gameOver();
			}
		});
	};

	const onSnakeEats = () => {
		let head = state.snakeDots[state.snakeDots.length - 1];
		let food = state.food;
		if ((head[0] === food[0] && head[1] === food[1])
		||  (head[0] === food[0] +1 && head[1] == food[1]+1)
		||  (head[0]+1 === food[0]  && head[1]+1 == food[1])

		) {
			setState(prevState => ({
				...prevState,
				food: getRandomFood()
			}));
			increaseSnake();
			increaseSpeed();
		setMyState(myState+1)

		}
	};

	const increaseSnake = () => {
		let newSnake = [...state.snakeDots];
		newSnake.unshift([]);
		setState(prevState => ({
			...prevState,
			snakeDots: newSnake
		}));
	};

	const increaseSpeed = () => {
		if (state.speed > 10) {
			setState(prevState => ({
				...prevState,
				speed: prevState.speed - 20
			}));
		}
	};

	const onRouteChange = () => {
		setState(prevState => ({
			...prevState,
			route: "game"
		}));
	};

	const gameOver = () => {
		alert(`GAME OVER, your score is ${state.snakeDots.length - 2}`);
		setState(initialState);
	};

	const onDown = () => {
		setState(prevState => ({ ...prevState, direction: "DOWN" }));

	};

	const onUp = () => {
		
		setState(prevState => ({ ...prevState, direction: "UP" }));

	};

	const onRight = () => {
	
		setState(prevState => ({ ...prevState, direction: "RIGHT" }));

	};

	const onLeft = () => {
		
		setState(prevState => ({ ...prevState, direction: "LEFT" }));

	};

	const { route, snakeDots, food } = state;
	return (
		<div>
			{route === "menu" ? (
				<div>
					<Menu onRouteChange={onRouteChange} />
				</div>
			) : (
				<div>
					<div className="game-area">
						<Snake snakeDots={snakeDots} />
						<Food dot={food} />
					</div>
					<Button
						onDown={onDown}
						onLeft={onLeft}
						onRight={onRight}
						onUp={onUp}
					/>
				</div>
			)}
		</div>
	);
};

export default Board;
