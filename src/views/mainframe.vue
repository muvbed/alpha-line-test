<template>
	<div class="mainframe">
		<header class="header wrapper">
			<div class="header__wrapper">
				<Search></Search>
				<a href="#" aria-label="youplaydo" class="header__link">
					<img src="../svg/youplaydo.svg" alt="youplaydo" class="header__icon">
				</a>
				<a href="#" aria-label="link" class="header__link">
					<img src="../svg/link.svg" alt="link" class="header__icon">
				</a>
				<router-link class="header__exit" aria-label="Выйти" to="/">Выйти</router-link>
			</div>
			<div class="header__wrapper">
				<Message :count="93" :text="'рейтинг тренера'"></Message>
				<Message :count="12" :text="'сообщения'"></Message>
				<Message :count="54" :text="'отзывы'" :newMessage="true"></Message>
			</div>
		</header>
		<main class="main">
			<section class="preview wrapper">
				<div class="preview__picture">
					<img src="../svg/logo.svg" alt="logo" class="preview__image">
				</div>
				<h1 class="preview__caption">Сергей Сергеевич Никитин</h1>
				<div class="preview__coach">Тренер</div>
			</section>
			<div class="progress">
				<div class="progress__wrapper wrapper">
					<div class="progress__inner">
						<Counter :additive="'групп / детей'" :prefix="6" :quantity="14" :limit="15" :dimension="'Количество'" :bgColor="'#009640'"></Counter>
						<div class="progress__name">Ваши группы</div>
					</div>
					<div class="progress__inner">
						<Counter :quantity="4" :limit="5" :dimension="'Человек'" :bgColor="'#FFDB00'" :textColor="'#000'"></Counter>
						<div class="progress__name">Оплаты</div>
					</div>
					<div class="progress__inner">
						<Counter :quantity="3" :limit="15" :dimension="'Количество'" :bgColor="'#C90033'"></Counter>
						<div class="progress__name">Задачи</div>
					</div>
				</div>
			</div>
			<div class="ability wrapper">
				<a href="#" aria-label="Обучение" class="ability__item">
					<img src="../svg/study.svg" alt="Обучение" class="ability__image">
					<div class="ability__name">Обучение</div>
					<div class="ability__inner">
						<div class="ability__total">123</div>
						<div class="ability__available" :class="{ ability__available_new: newCourse }">
							<div class="new" v-if="newCourse">new</div>7
						</div>
					</div>
				</a>
				<a href="#" aria-label="Финансовый отчет" class="ability__item">
					<img src="../svg/money.svg" alt="Финансовый отчет" class="ability__image">
					<div class="ability__name">Финансовый<br> отчет</div>
				</a>
				<a href="#" aria-label="Сдача отчета" class="ability__item">
					<img src="../svg/report.svg" alt="Сдача отчета" class="ability__image">
					<div class="ability__name">Сдача<br> отчета</div>
				</a>
			</div>
			<div class="adding wrapper">
				<button class="button">Новые игроки от другого тренера</button>
				<a href="#" aria-label="Добавление" class="adding__button">
					<img src="../svg/add.svg" alt="Добавление" class="adding__image">
				</a>
			</div>
			<section class="report wrapper">
				<h2 class="report__caption">Отчет селекции</h2>
				<Level :name="'Выполнил план'" :percent="true" :quantity="25+17+4" :limit="35+20+5" :lineColor="'#C90033'"></Level>
				<Level :name="'Прозвонил'" :quantity="25" :limit="35" :lineColor="'#6CC4CB'"></Level>
				<Level :name="'Пригласил'" :quantity="17" :limit="20" :lineColor="'#FFDB00'"></Level>
				<Level :name="'Пришли'" :quantity="4" :limit="5" :lineColor="'#009640'"></Level>
			</section>
		</main>
	</div>
</template>

<script>
import Search from '../components/search'
import Message from '../components/message'
import Counter from '../components/counter'
import Level from '../components/level'

export default {
	name: 'mainframe',
	components: {
		Search,
		Message,
		Counter,
		Level
	},
	data() {
		return {
			newCourse: true
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/new.scss';
@import '../styles/button.scss';

.header {
	padding-top: 4px;
	padding-bottom: 4px;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px 0;
	}

	&__icon {
		width: 20px;
		height: 20px;
		vertical-align: bottom;
		transition: .25s;

		&:hover {
			transform: scale(1.05);
		}
	}

	&__exit {
		padding: 5px 0;
		text-decoration: none;
		font-size: 12px;
		color: #000;
		transition: .25s;

		&:hover {
			color: blue;
		}
	}
}

.main {
	background-color: rgb(237,237,237);
}

.preview {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-top: 13px;
	padding-bottom: 16px;

	&__image {
		width: 48px;
		height: 48px;
		vertical-align: bottom;
	}

	&__caption {
		margin: 0 0 0 14px;
		font-size: 22px;
	}

	&__coach {
		padding: 2px 6px 0;
		text-transform: uppercase;
		font-size: 12px;
		color: #C6C6C6;
		border: 1px solid #C6C6C6;
		border-radius: 8px;
		box-sizing: border-box;
	}
}

.progress {
	background-color: #fff;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 11px 7px 14px;
	}

	&__name {
		margin-top: 10px;
		text-align: center;
		text-transform: uppercase;
		font-size: 12px;
	}
}

.ability {
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	padding-bottom: 20px;

	&__item {
		width: 88px;
		padding-top: 10px;
		text-decoration: none;
		text-transform: uppercase;
		text-align: center;
		font-size: 12px;
		color: #000;
		border: 1px solid #C6C6C6;
		border-radius: 5px;
		box-sizing: border-box;
		overflow: hidden;
		transition: .3s;

		&:hover {
			border-color: blue;
		}
	}

	&__image {
		display: block;
		margin: 0 auto;
		height: 18px;
	}

	&__name {
		margin: 8px 0;
	}

	&__inner {
		display: flex;
		justify-content: space-between;
	}

	&__total, &__available {
		width: 50%;
		border-top: 1px solid #C6C6C6;
		box-sizing: border-box;
	}

	&__available {
		border-left: 1px solid #C6C6C6;

		.new {
			top: 0;
			right: 5%;
			transform: translateY(-50%);
		}

		&_new {
			position: relative;
			background-color: rgb(212,212,212);
		}
	}
}

.adding {
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__button {
		transition: .2s;

		&:hover {
			transform: scale(1.05);
		}
	}

	&__image {
		width: 50px;
		height: 50px;
		vertical-align: bottom;
	}
}

.report {
	padding-top: 20px;
	padding-bottom: 20px;

	.level {
		margin-top: 10px;
	}

	&__caption {
		margin: 0 0 10px;
		text-align: center;
		text-transform: uppercase;
		font-size: 12px;
	}
}
</style>
