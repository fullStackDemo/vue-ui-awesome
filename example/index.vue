<template>
	<div id="app">
		<div :style="{height: boxHeight + 'px'}" class="box">
			<div class="boxLeft">
				<div class="logo">
					<img alt="Vue logo" src="./assets/logo.png">
				</div>
				<h3>Vue component</h3>
				<div class="navBox">
					<div :class="{'active': currentNavName == item.name}" @click="tabClick(item)" :key="index" class="navItem" v-for="(item, index) in menuData">{{item.name}}</div>
				</div>
			</div>
			<div class="boxRight">
				<div :is="currentComponent"></div>
			</div>
		</div>
	</div>
</template>

<script>
//left menu data
import menuData from '@data/menu.js';
export default {
	name: 'app',
	data() {
		const currentComponent = menuData[0].component;
		const currentNavName = menuData[0].name;
		return {
			boxHeight: 0,
			menuData,
			currentComponent,
			currentNavName,
		};
	},
	mounted() {
		this.calcHeight();
		//window resize
		window.addEventListener('resize', () => {
			this.calcHeight();
		});
	},
	methods: {
		calcHeight() {
			this.boxHeight = window.innerHeight;
    },
    tabClick(item){
      this.currentComponent = item.component;
      this.currentNavName = item.name;
    }
	},
};
</script>

<style lang="less">
@import '~@less/index.less';
</style>
