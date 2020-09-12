<template>
	<a :href="link" :aria-label="dimension" class="counter" ref="layout">
		<svg class="counter__wrapper">
			<circle class="counter__circle counter__circle_back" cx="50%" cy="50%" r="37"/>
			<circle class="counter__circle counter__circle_front" cx="50%" cy="50%" r="37" ref="front"/>
			<circle class="counter__circle counter__circle_mask" cx="50%" cy="50%" r="37" ref="mask"/>
		</svg>
		<div class="counter__description" ref="description">
			<span class="counter__additive" v-if="additive != ''">{{ additive }}</span>
			<div class="counter__quantity" ref="quantity">
				<span class="counter__prefix" v-if="prefix >= 0">{{ prefix }}/</span>{{ quantity }}
			</div>
			<span class="counter__dimension">{{ dimension }}</span>
		</div>
	</a>
</template>

<script>
export default {
	name: 'counter',
	props: {
		link: {
			type: String,
			default: "#"
		},
		additive: {
			type: String,
			default: ""
		},
		prefix: {
			type: Number,
			default: -1
		},
		quantity: {
			type: Number,
			default: 0
		},
		limit: {
			type: Number,
			default: 0
		},
		dimension: {
			type: String,
			default: ""
		},
		bgColor: {
			type: String,
			default: "#bbb"
		},
		textColor: {
			type: String,
			default: "#fff"
		}
	},
	methods: {
		counterFn() {
			let circumference = 2 * Math.PI * this.$refs.front.r.baseVal.value;
			let particle = circumference / 30;

			this.$refs.layout.style.backgroundColor = this.$refs.mask.style.stroke = this.bgColor;
			this.$refs.description.style.color = this.$refs.quantity.style.borderColor = this.textColor;
			this.$refs.front.style.strokeDasharray = `${circumference}`;
			this.$refs.mask.style.strokeDasharray = `${particle - (particle / 1.5)} ${(particle / 1.5)}`;
			this.$refs.front.style.strokeDashoffset = circumference - (100 / this.limit * this.quantity) / 100 * circumference;
		}
	},
	watch: {
		quantity() {
			this.counterFn();
		},
		limit() {
			this.counterFn();
		}
	},
	mounted() {
		this.counterFn();
	}
}
</script>

<style lang="scss" scoped>
.counter {
	position: relative;
	display: block;
	width: 92px;
	height: 92px;
	border-radius: 50%;
	transition: .3s;

	&:hover {
		transform: scale(0.98);
	}

	&__wrapper {
		width: inherit;
		height: inherit;
		fill: transparent;
		transform: rotate(-90deg);
	}

	&__circle {
		stroke-width: 10px;

		&_back {
			stroke: rgba(0,0,0,0.2)
		}

		&_front {
			stroke: #fff;
		}

		&_mask {
			stroke-width: 12px;
		}
	}

	&__description {
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 50%;
		height: 50%;
		padding: 4%;
		text-align: center;
		font-size: 7px;
		box-sizing: border-box;
		transform: translate(-50%, -50%);
	}

	&__quantity {
		margin-bottom: 3px;
		font-size: 24px;
		line-height: 1;
		border-bottom: 1px solid transparent;
	}

	&__dimension {
		text-transform: uppercase;
	}
}
</style>
