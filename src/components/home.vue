<template>
	<div id="home">
		<div class="sousuo">
		<ul>
		<li>
			<p>大连</p>
			<span><i class="iconfont icon-moreunfold"></i></span>
		</li>
		<li>
			<input type="text" placeholder="影片/影院/影人 任你搜索"/>
        </li>
		</ul>
		</div>
		<div class="nowplaying">
		<div class="one">
			<h2>正在热映（49）部</h2>
			<i class="iconfont icon-more"></i>
		</div>
			<ul class="two">
				<li v-for="(data,index) in looplist5" :key="data.id">
					<img :src="data.img">
					<p>{{data.t}}</p>
				</li>
				
			</ul>
			<div class="three">
				<h2>即将上映（{{looplist6}}）部</h2>
				<i class="iconfont icon-more"></i>
			</div>
		</div>
		<div class="today">
			<h2>今日热点</h2>
			<ul>
				<li v-for="(data,index) in looplist7" :key="data.id">
					<img :src="data.img"/>
					<span>
						<h4>{{data.title}}</h4>
						<p>{{data.desc}}</p>
						<p>2017-07-11 15:59:28</p>
					</span>
				</li>
				
			</ul>
		</div>
		<div class="zhuyi">
			<ul>
				<li>意见反馈</li>
				<li>关于我们</li>
				<li>帮助中心</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
				looplist:[],
				looplist5:[],
				looplist6:[],
				looplist7:[]
			}
		},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			axios.get("/api/indextop").then(res=>{
				this.looplist6=res.data.totalComingMovie;
				this.looplist=res.data.ms;
				this.looplist5=this.looplist.slice(0,8);
				Indicator.close();
			}),
			axios.get("/api/indexbottom").then(res=>{
				this.looplist7=res.data.hotPoints;
			})
		}
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#home{
		.sousuo{
			width: 100%;
			height:px2rem(100px);
			
			ul{
				width:100%;
				height:px2rem(90px);
				padding:50px 35px;
				border-bottom: 1px solid #d8d8d8;
				display: flex;
				flex-direction:row;
				align-items: center;
				li{
					width:20%;
					height:px2rem(90px);
					line-height:px2rem(90px);
					position:relative;
					p{
					    width:100%;
					    font-size:37px;

					}
					span{
						width:px2rem(30px);
						display:inline-block;
						height:100%;
						position:absolute;
						top:px2rem(60px);
						margin-left:px2rem(60px);
					i{
					  	width:px2rem(30px);
					  	height:px2rem(30px);
					  	font-size: px30px;
					  	font-weight: bold;
					  	color:#000;
					  	position:absolute;
					  	left:px2rem(27px);
						top: px2rem(-55px);
					 }
				}
			}
			li:nth-child(2){
				width:100%;
				height:px2rem(90px);
				display:flex;
				align-items:center;
				input{
					width:90%;
					height:px2rem(70px);
					line-height:px2rem(70px);
					border:2px solid #ccc;
					border-radius: 15px;
					display:block;
					color: #777;
					font-size: px2rem(28px);
					padding-left:px2rem(50px);
					margin-left:px2rem(50px);
				}
			}
		}	
	 }
	 .nowplaying{
	 	padding:px2rem(30px);
	 	background: #fff;
	 	border-bottom: 1px solid #d8d8d8;
	 	.one{
	 		display: flex;
	 		justify-content: space-between;
	 		align-items: center;

	 		h2{
	 			font-size:40px;
	 		}
	 		i{
	 			font-size:30px;
	 		}
	 	}
	 	.two{
	 		width:100%;
	 		display: flex;
	 		flex-wrap: wrap;
	 		justify-content: space-around;
	 		li{
	 			width: 25%;
	 			margin-top:px2rem(21px);
	 			display: flex;
	 			justify-content: center;
	 			align-items: center;
	 			flex-direction: column;
	 			img{
	 				display: block;
	 				width: 90%;
	 				height:90%;
	 			}
	 			p{
	 				padding-top: px2rem(12px);
	 				font-size:20px;
	 				color:#333;
	 			}
	 		}
	 	}
	 	.three{
	 		border-top:1px solid #d8d8d8;
	 		margin-top:px2rem(25px);
	 		display: flex;
	 		justify-content: space-between;
	 		align-items: center;

	 		h2{ 
	 			margin-top:px2rem(17px);
	 			font-size:40px;
	 			height:px2rem(46px);
	 			line-height:px2rem(46px);
	 		}
	 		i{
	 			margin-top:px2rem(17px);
	 			font-size:30px;
	 		}
	 	}
	 }
	 .today{
	 	width:100%;
	 	margin-top:px2rem(20px);
	 	background:#fff;
	 	padding: px2rem(30px);
	 	h2{
	 		font-size:40px;
	 	}
	 	ul{
	 		width: 100%;
	 		li{
	 			display: flex;
	 			flex-direction:row;
	 			border-bottom: 1px solid #d8d8d8;
	 			padding: 41.6px 0 41.6px 0;
	 			img{
	 				width:px2rem(270px);
	 				border:1px solid #ccc;
	 			}
	 			span{
	 				display:inline-block;
	 				padding-left: 12px;
	 				h4{
	 				font-size: 37px;
	 				width:100%;

	 				}
	 				p{
	 				font-size: 30px;
	 				color:#999;
	 				padding-top:px2rem(5px);
	 				}
	 			}
	 			
	 		}
	 		li:last-child{
	 			border:none;
	 		}
	 	}
  	}
  	.zhuyi{
  		width:100%;
  		height:px2rem(40px);
  		line-height:px2rem(40px);
 		ul{
 			display:flex;
 			flex-direction:row;
 			justify-content:space-around;
 			li{
 				font-size:25px;
 				padding:20px 0 20px 0;
 			}
 		}
  	}
}
</style>