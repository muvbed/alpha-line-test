<template>
	<div class="level">
		<div class="level__wrapper">
			<span class="level__name">{{ name }}</span>
			<span class="level__quantity" ref="quantity">{{ quantity }}</span>
		</div>
		<div class="level__line" ref="external">
			<div class="level__line level__line_inside" ref="inside"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'level',
	props: {
		percent: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ""
		},
		quantity: {
			type: Number,
			default: 0
		},
		limit: {
			type: Number,
			default: 0
		},
		lineColor: {
			type: String,
			default: "#000"
		}
	},
	methods: {
		levelFn() {
			this.$refs.inside.style.backgroundColor = this.lineColor;
			this.$refs.inside.style.width = (100 / this.limit * this.quantity) + '%';
			this.percent ? this.$refs.quantity.innerHTML = (100 / this.limit * this.quantity).toFixed() + '%' : '';
		}
	},
	watch: {
		quantity() {
			this.levelFn();
		},
		limit() {
			this.levelFn();
		}
	},
	mounted() {
		this.levelFn();
	}
}
</script>

<style lang="scss" scoped>
.level {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}

	&__line {
		height: 7px;
		margin-top: 4px;
		background-color: #DADADA;

		&_inside {
			border-radius: 0 20px 20px 0;
		}
	}
}
</style>
