<template>
	<div id="app">
		<Burger />
		<Cursor />
		<router-view />
	</div>
</template>
<script>
import Burger from "./components/Burger.vue";
import Cursor from "./components/Cursor.vue";

export default {
	components: {
		Burger,
		Cursor
	}
};
</script>
<style>
#app {
	font-family: BonVivant;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #544a3f;
	position: absolute;
	font-weight: normal;

	touch-action: manipulation;
}

button {
	text-decoration: none;
}

a {
	text-decoration: none;
}

router-link {
	text-decoration: none;
}

.title-container:hover > .cursor {
	display: none;
}

body {
	background: #efebe6;
	padding: 0;
	margin: 0;
}

html {
}

.work-together-container {
	position: relative;
	background: none;
	top: 10vw;
}
.jessica-picture-container {
	position: relative;
	width: 38vw;
	height: 38vw;
	top: 5vw;
	left: calc(50% - 19vw);
	overflow: hidden;
}

.jessica-img {
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0.8;
}

.jessica-name {
	position: absolute;
	font-size: 8vw;
	top: 35vw;
	left: 50%;
	transform: translateX(-50%);
}

.lila-name {
	position: absolute;
	font-size: 8vw;
	top: 35vw;
	left: 50%;
	transform: translateX(-50%);
}

.experience-1 {
	position: relative;
	width: 44vw;
	text-align: left;
	font-size: 1.2vw;
	left: 50%;

	transform: translateX(-50%);
	margin-top: 15vw;
	font-family: DM sans;
}

.video {
	position: relative;
	width: 54vw;
	height: 34vw;

	left: 50%;
	transform: translateX(-50%);
	margin-top: 7vw;
	overflow: hidden;
}

.experience-2 {
	position: relative;
	width: 44vw;
	text-align: left;
	font-size: 1.2vw;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 7vw;
	font-family: DM sans;
}

.lila-experience-2 {
	position: relative;
	width: 44vw;
	text-align: left;
	font-size: 1.2vw;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 7vw;
	font-family: DM sans;
	margin-bottom: 10vw;
}

.other-experiences-container {
	position: relative;
	width: 65vw;
	height: 35vw;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 8vw;
	margin-bottom: 15vw;
}

.experience-2-img-container {
	top: 0;
	left: 0;
	position: absolute;
	background: blue;
	height: 30vw;
	width: 30vw;
	overflow: hidden;
}
.experience-3-img-container {
	top: 0;
	right: 0;
	position: absolute;
	background: blue;
	height: 30vw;
	width: 30vw;
	overflow: hidden;
}

.experience-2-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.experience-3-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.name {
}

.exp-name {
	position: absolute;
	bottom: -9vw;
	font-size: 6vw;
	z-index: +10;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
}

.experience-2-container {
	top: 0;
	left: 0;
	position: absolute;

	height: 30vw;
	width: 30vw;
	margin-top: 0vw;
	left: 0;
}

.experience-3-container {
	margin-top: 0vw;
	right: 0vw;

	transform: none;
	position: absolute;
	height: 30vw;
	width: 30vw;
}

.mary-btn {
	position: absolute;
	z-index: +1;
	left: 50%;
	transform: translateX(-50%);
	bottom: -12vw;
	background: none;
	width: 16vw;
	height: 6vw;
	font-size: 1.1vw;
	border: 0.2vw solid #d4c09e;
}

.claudia-btn {
	position: absolute;
	z-index: +1;
	left: 50%;
	transform: translateX(-50%);
	bottom: -12vw;
	background: none;
	width: 16vw;
	height: 6vw;
	font-size: 1.1vw;
	border: 0.2vw solid #d4c09e;
}

@media (max-aspect-ratio: 200/200) {
	.work-together-container {
		margin-top: 50vw;
	}
	.jessica-picture-container {
		position: relative;
		width: 84vw;
		height: 84vw;
		margin-top: 20vw;
		left: calc(50% - 42vw);
		overflow: hidden;
	}

	.jessica-img {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.8;
	}

	.jessica-name {
		position: absolute;
		font-size: 20vw;
		top: 86vw;
		left: 50%;
		transform: translateX(-50%);
	}

	.mary-btn {
		position: absolute;
		z-index: +1;
		left: 50%;
		transform: translateX(-50%);
		bottom: -30vw;
		background: none;
		width: 50vw;
		height: 15vw;
		font-size: 2.5vw;
		border: 0.5vw solid #d4c09e;
	}

	.claudia-btn {
		position: absolute;
		z-index: +1;
		left: 50%;
		transform: translateX(-50%);
		bottom: -30vw;
		background: none;
		width: 50vw;
		height: 15vw;
		font-size: 2.5vw;
		border: 0.5vw solid #d4c09e;
	}

	.experience-1 {
		position: relative;
		width: 84vw;
		text-align: left;
		font-size: 3.5vw;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 26vw;
		font-family: DM sans;
	}

	.video {
		position: relative;
		width: 84vw;
		height: 54vw;
		background: grey;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 15vw;
	}

	.experience-2 {
		position: relative;
		width: 84vw;
		text-align: left;
		font-size: 3.5vw;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 15vw;
		font-family: DM sans;
	}

	.other-experiences-container {
		position: relative;
		width: 95vw;
		height: 240vw;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 8vw;
	}
	.experience-2-container {
		top: 0;
		left: 0;
		position: absolute;
		background: blue;
		height: 84vw;
		width: 84vw;
		margin-top: 8vw;

		left: calc(50% - 42vw);
	}
	.experience-2-img-container {
		left: 0;
		position: absolute;
		height: 84vw;
		width: 84vw;
		overflow: hidden;
		left: calc(50% - 42vw);
	}

	.experience-3-container {
		margin-top: 140vw;
		left: calc(50% - 42vw);
		position: absolute;
		height: 84vw;
		width: 84vw;
	}

	.experience-3-img-container {
		left: calc(50% - 42vw);
		position: absolute;
		height: 84vw;
		width: 84vw;
		overflow: hidden;
	}

	.experience-2-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.experience-3-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.exp-name {
		position: absolute;
		bottom: -20vw;
		font-size: 14vw;
		z-index: +10;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
	}
}
</style>
