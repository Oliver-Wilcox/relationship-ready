<template>
	<div class="btns">
		<a href="#sectionTwo" class="discoverref">
			<button class="discover" id="discover">
				<h3>DISCOVER HOW</h3>
			</button>
		</a>
		<div class="arrow">
			<img class="arrow-svg" src="arrow.svg" />
			<span class="arrow-circle"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: "FrontButtons"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discover {
	position: relative;
	display: block;
	width: 13vw;
	height: 4.5vw;
	border: 0.2vw solid #d4c09e;
	background: none;
	left: 0;
	margin-top: 4vw;
	cursor: pointer;
}

.discover h3 {
	font-size: 0.9vw;
	color: #544a3f;
	padding: 0.45vw;
}

.arrow {
	position: absolute;
	cursor: pointer;
	height: 4vw;
	width: 3vw;
	left: 40%;
	transform: translateX(-50%);
	margin-top: -2.8vw;
}

.arrow-svg {
	position: absolute;
	bottom: 0.9vw;
	left: 50%;
	width: 1.2vw;
	transform: translateX(-50%);
	z-index: +1;
}

.arrow-circle {
	position: absolute;
	bottom: 0;
	border: 0.3vw solid #e1d6c2;
	height: 2.5vw;
	width: 2.5vw;
	border-radius: 50%;
	left: 50%;
	transform: translateX(-50%);
}

@media screen and (max-aspect-ratio: 200/200) {
	.discover {
		left: 50%;
		transform: translateX(-50%);
		margin-top: 100px;
		width: 42vw;
		height: 15.5vw;
		border: 0.5vw solid #d4c09e;
	}
	.discover h3 {
		font-size: 2.6vw;
	}
	.btns {
		height: 75vw;
	}

	.arrow {
		margin-top: 20vw;
		left: 50%;
	}

	.arrow-svg {
		bottom: 2.2vw;
		width: 3vw;
	}

	.arrow-circle {
		border: 0.8vw solid #e1d6c2;
		height: 6vw;
		width: 6vw;
	}
}

@media screen and (max-aspect-ratio: 200/200) and (min-width: 400px) {
	.discover {
		margin-top: calc(100px + 10vw);
	}
}

@media screen and (max-aspect-ratio: 200/200) and (min-width: 600px) {
	.discover {
		margin-top: calc(100px + 20vw);
	}
}
</style>
