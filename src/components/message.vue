<template>
	<a :href="link" :aria-label="text" class="message">
		<div class="message__count" :class="{ message__count_new: newMessage }">
			<div class="new" v-if="newMessage">new</div> {{ count }}
		</div> {{ text }}
	</a>
</template>

<script>
export default {
	name: 'message',
	props: {
		link: {
			type: String,
			default: "#"
		},
		count: {
			type: Number,
			default: 0
		},
		text: {
			type: String,
			default: ""
		},
		newMessage: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/new.scss';

.message {
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 12px;
	color: #000;
	transition: .25s;

	&:hover {
		color: blue;
	}

	&__count {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 21px;
		height: 21px;
		margin-right: 6px;
		color: #fff;
		background-color: #7FA5BC;
		border-radius: 50%;

		.new {
			top: 100%;
			left: 90%;
			transform: translate(-50%, -50%);
		}

		&_new {
			position: relative;
			background-color: #003A5C;
		}
	}
}
</style>
