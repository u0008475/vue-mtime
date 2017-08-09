<template>
	<div id="pictures">
		<ul>
			<li v-for="(data,item) in looplist15" :key="data.id">
				<h4 v-show="data.title">{{data.title}}</h4>
				<p>{{data.content}}</p>
				<img :src="data.image">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				looplist15:[],
			}
		},
		mounted(){
			axios.get(`/api/detailtwo?id=${this.$route.params.id}&pageIndex=1`).then(res=>{
				this.looplist15=res.data.contentList;
			})
		}
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#pictures{
		background:#fff;
		ul{
			width:100%;
			li{
				// width:100%;
				margin:30px 0;
				h4{
					display:inline-block;
					font-size:30px;
					margin:0 0 10px 30px;
					background:#333;
					padding:px2rem(9px);
					color:#fff;
					font-weight:300;
				}
				p{
					font-size:25px;
					margin:10px 30px;
					color:#777;
				}
				img{
					width:100%;
				}
			}
		}
	}
</style>