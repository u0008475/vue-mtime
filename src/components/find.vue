<template>
	<div id="find">
		<ul>
			<router-link tag="li" to="/find/news" activeClass="active">新闻</router-link>
			<router-link tag="li" to="/find/trailer" activeClass="active">预告片</router-link>
			<router-link tag="li" to="/find/charst" activeClass="active">排行榜</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#find{
		width:100%;
		ul{
			background:#fff;
			width:100%;
			display: flex;
			justify-content:space-around;
			padding:px2rem(10px);
			li{
				font-size:30px;
				padding:px2rem(10px);
			}
			.active{
				color:#1e7dd7;
			}
		}
	}
</style>