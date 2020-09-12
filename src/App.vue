<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="scss">
@import 'styles/normalize.css';
@import 'styles/fonts.scss';

body {
	font-family: 'PFDinTextCondPro-Medium', Arial;
	overflow-x: hidden; 
}

.wrapper {
	width: 300px;
	margin: 0 auto;
	padding: 0 10px;
	box-sizing: border-box;
}
</style>
