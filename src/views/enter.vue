<template>
	<div class="enter wrapper">
		<div class="enter__lang">
			<a href="#" aria-label="rus" class="enter__swap">
				<img src="../svg/rus.svg" alt="rus" class="enter__icon">
			</a>
		</div>
		<span class="enter__title">Вход</span>
		<h1 class="enter__caption">Fc Impuls</h1>
		<p class="enter__description">Международная футбольная школа "Импульс" Сергея Никитина</p>
		<img src="../svg/main-logo.svg" alt="main logo" class="enter__logo">
		<form class="enter__form" @submit.prevent="signin()">
			<label class="enter__field">
				<TheMask type="text" class="enter__input" placeholder="Номер телефона" :mask="['+7 (###)-###-##-##']" autocomplete="tel" ref="phone"/>
			</label>
			<label class="enter__field">
				<input type="password" class="enter__input" placeholder="Пароль" autocomplete="new-password" ref="password">
			</label>
			<button class="button">Войти</button>
			<a href="#" aria-label="Восстановить пароль" class="enter__forgot">Восстановить пароль</a>
		</form>
	</div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

export default {
	name: 'enter',
	components: {
		TheMask
	},
	methods: {
		signin() {
			this.$router.push('/mainframe');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/button.scss';

.enter {
	position: relative;
	padding-top: 20px;
	padding-bottom: 20px;
	text-align: center;

	&__lang {
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		align-items: center;
	}

	&__icon {
		width: 21px;
		height: 21px;
		vertical-align: bottom;
		transition: .25s;

		&:hover {
			transform: scale(0.95);
		}
	}

	&__title {
		text-transform: uppercase;
	}

	&__caption {
		margin: 10px 0 5px;
		text-transform: uppercase;
		font-size: 36px;
		color: #C90033;
	}

	&__description {
		margin: 0;
		text-transform: uppercase;
		font-size: 12px;
	}

	&__logo {
		width: 175px;
		height: 175px;
		margin: 15px 0;
	}

	&__form {
		.button {
			width: 160px;
			margin: 0 auto 13px;
			text-transform: none;
		}
	}

	&__field {
		display: block;
		margin-bottom: 15px;
		padding: 8px 10px;
		text-align: left;
		border: 1px solid #C6C6C6;
		border-radius: 15px;
		box-sizing: border-box;
	}

	&__input {
		padding: 0 10px 0 10px;
		border: 0;
		border-left: 1px solid #FFDB00;
		box-sizing: border-box;
		outline: 0;
		transition: .2s;

		&::placeholder {
			opacity: 0.5;
		}

		&:focus {
			border-color: #c9c9c9;
		}
	}

	&__forgot {
		padding: 7px 15px;
		text-decoration: none;
		font-size: 12px;
		color: #fff;
		background-color: #C90033;
		border-radius: 25px;
		transition: .25s;

		&:hover {
			background-color: #333;
		}
	}
}
</style>
