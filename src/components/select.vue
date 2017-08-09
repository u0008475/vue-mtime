<template>
	<div id="select">
		<div class="yy">
			<ul>
				<li v-for="(data,index) in looplist8" :key="data.id">
					<p>{{data.cinameName}}<span><span>￥</span>{{data.minPrice.toString().slice(0,2)}}起</span></p>
					<p>{{data.address}}</p>
					<span class="tt"></span>
					<span class="tt2"></span>
					<span class="tt3"></span>
					<span class="tt4"></span>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				looplist8:[]
			}
		},
		mounted(){
			axios.get("/api/all").then(res=>{
				this.looplist8=res.data;
			})
		},
		methods:{
			onValuesChange(picker, values) {
			     if (values[0] > values[1]) {
			       picker.setSlotValue(1, values[0]);
			     }
			   }
		}
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#select{
		.cs{
			background:red;
			width:px2rem(1000px);
			height:px2rem(1000px);
			display:block;
		}
		.ttt{
			width:px2rem(100px);
			height:px2rem(100px);
			background:red;
		}
		width:100%;
		.yy{
			width:100%;
			ul{
				li{
					width:100%;
					border-bottom: 1px solid #d8d8d8;
					padding: 48px 48px 20px 40px;
					position:relative;
					p:first-child{
						font-size:30px;
						font-weight: bold;
						position:relative;
						span{
							display:inline-block;
							position:absolute;
							right:px2rem(27px);
							top:px2rem(-7px);
							color:#f60;
							font-weight: 100;
							font-size:33px;
							span{
								display:inline-block;
								position:absolute;
								right:px2rem(70px);
								top:px2rem(7px);
								font-size:25px;
							}
						}
					}
					p:nth-child(2){
						padding-top:px2rem(5px);
						font-size:25px;
						color:#ccc;
						white-space: wrap;
						width:70%;
					}
					span.tt{
						background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/i_cine_01.png") no-repeat;
						width:px2rem(57.6px);
						height:px2rem(57.6px);
						display:inline-block;
						margin-top:px2rem(10px);

					}
					span.tt2{
						background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/is_cine_04.png") no-repeat;
						background-size: px2rem(57.6px);
						width:px2rem(57.6px);
						height:px2rem(57.6px);
						display:inline-block;
						margin-top:px2rem(10px);

					}
					span.tt3{
						background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/is_cine_02.png") no-repeat;
						background-size: px2rem(57.6px);
						width:px2rem(57.6px);
						height:px2rem(57.6px);
						display:inline-block;
						margin-top:px2rem(10px);

					}
					span.tt4{
						background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/i_cine_03.png") no-repeat;
						width:px2rem(57.6px);
						height:px2rem(57.6px);
						display:inline-block;
						margin-top:px2rem(10px);

					}
				}
			}
		}
	}
</style>