<template>
	<label class="search">
		<img src="../svg/search.svg" alt="search" class="search__icon">
		<input type="search" class="search__input" placeholder="Поиск...">
		<img src="../svg/voice.svg" alt="voice" class="search__voice">
	</label>
</template>

<script>
export default {
	name: 'search'
}
</script>

<style lang="scss" scoped>
.search {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 178px;
	padding: 5px;
	border: 1px solid #C6C6C6;
	border-radius: 12px;
	box-sizing: border-box;

	&__icon {
		width: 13px;
		cursor: pointer;
	}

	&__input {
		width: 80%;
		margin-left: 5px;
		font-size: 12px;
		border: 0;
		outline: 0;

		&::placeholder {
			opacity: 0.5;
		}
	}

	&__voice {
		width: 15px;
		cursor: pointer;
	}
}
</style>
