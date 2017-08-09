<template>
		<div id="trailer">
			<div class="one" >
			<img src="http://img5.mtime.cn/mg/2017/08/04/165120.47668055.jpg">
				<h3>"请以你的名字呼唤我"预告<i class="iconfont icon-iconfontplay2"></i></h3>
			</div>
			<ul>
				<li v-for="(data,index) in looplist13" :key="data.id">
					<div class="one2">
						<img :src="data.coverImg">
						<i class="iconfont icon-iconfontplay2"></i>
					</div>
					<div class="two">
						<h2>{{data.movieName}}</h2>
						<p><span><b>概述:</b></span>{{data.summary}}</p>
					</div>
				</li>
			</ul>	
		</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
		export default{
			data(){
				return{
					looplist13:[]
				}
			},
			mounted(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				axios.get(`/api/findtrailer`).then(res=>{				
					this.looplist13=res.data.trailers;
					Indicator.close();
				})
				
			}
		}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#trailer{
		width:100%;
		.one{
			position:relative;
			img{
				width:100%;

			}
			h3{
				width:100%;
				padding:20px 0;
				color:#fff;
				position:absolute;
				bottom:0;
				font-weight:bold;
				font-size:45px;
				text-align:center;
				// line-height:50px;
				background:rgba(0,0,0,.7);
				i{
					font-size:50px;
					padding-left:px2rem(20px);
				}
			}
		}
		ul{
			background:#fff;
			width:100%;
			li{
				display:flex;
				padding:40px 0;
				border-bottom: 1px solid #ccc;
				.one2{
					position:relative;
					img{
					width:px2rem(300px);
					height:px2rem(180px);
					margin:0 30px;
					}
					i{
						position:absolute;
						font-size:60px;
						bottom:px2rem(10px);
						right:px2rem(45px);
						z-index:3;
						color:#fff;
						font-weight:bold;
					}
				}
				.two{

					display:flex;
					flex-direction:column;
					h2{
						font-size:35px;
						width:px2rem(378px);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						padding: 30px 0;
						padding-top: px2rem(20px);
					}
					p{
						font-size:27px;
						width:px2rem(358px);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-left:px2rem(20px);
						color:#444;
						span{
							display:inline-block;
							font-size:27px;
							margin-right:px2rem(10px);
						}
					}
				}
			}
		}
	}	
</style>