<template>
	<div>
		<h2>子组件</h2>
		{{data}}
	</div>
</template>

<script>
	export default {
		name: 'child',
		props: ["data"]
	}
</script>

<style>
</style>