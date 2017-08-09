<template>
	<div id="shop">
		<div class="sousuo">
			<ul>
			<li>
				<span><i class="iconfont icon-cart"></i></span>
			</li>
			<li>
				<input type="text" placeholder="搜索正版电影周边"/>
	        </li>
			</ul>
		</div>
		<div class="two">
			<swipe class="my-swipe">
			  <swipe-item>
			  <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F26%2F095106.22028192.jpg&width=750&height=500&clipType=4"/>
			  </swipe-item>
			  <swipe-item>
			  <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F31%2F135143.72620818.jpg&width=750&height=500&clipType=4"/>
			  </swipe-item>
			  <swipe-item>
			  <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F08%2F02%2F133358.11482783.jpg&width=750&height=500&clipType=4">
			  </swipe-item>
			</swipe>
			<div class="nav">
				<ul>
					<li v-for="(data,index) in looplist2" :key="data.id">
						<img :src="data.image" >
						<p>{{data.iconTitle}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="three">
			<div class="top">
				<div class="one">
					<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F25%2F111722.11173820.jpg&width=375&height=450&clipType=4">
				</div>
				<div class="two">
					<ul>
						<li v-for="(data,index) in looplist3" :key="data.id">
							<img :src="data.image"/>
						</li>
					</ul>
				</div>
			</div>
			<div class="bottom">
				<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F08%2F04%2F185549.37172577.jpg&width=750&height=223&clipType=4">
			</div>
		</div>
		<div class="four">
					<div class="one">
						<ul>
							<li v-for="(data,index) in looplist4">
								<img :src="data.uncheckImage">
							</li>
						</ul>
						
					</div>
					<div class="one-1">
					<p>Captain America</p>
					<p>美国队长系列</p>
					</div>
					<div class="two">
						<ul>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2016%2F02%2F22%2F153317.13515383_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>HT美队3美国队长</p>
							<p>￥1330</p>
						</li>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2016%2F02%2F22%2F153652.21229643_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>HT美国队长3冬兵[预售]</p>
							<p>￥1480</p>
						</li>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2016%2F04%2F21%2F153535.38122383_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>美国队长3特别款割绒浴巾</p>
							<p>￥99</p>
						</li>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2015%2F05%2F07%2F203336.94674806_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>漫威纯色基础款背包</p>
							<p>￥259</p>
						</li>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2016%2F05%2F04%2F175833.32176226_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>[现货]HT美队cosbaby单装1</p>
							<p>￥90</p>
						</li>
						<li>
							<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn

		%2Fgoods%2F2016%2F05%2F03%2F120225.24073949_600X600X1.jpg&width=196&height=196&clipType=4">
							<p>美国队长石英表</p>
							<p>￥399</p>
						</li>
						</ul>
					</div>
					<button>更多商品</button>
				</div>
				<div class="five" v-for="(item,index) in looplist9" :key="item.id">
					<div class="top-1">
						
						<h3><i></i>{{item.name}}</h3>
						<p>更多<i class="iconfont icon-more"></i></p>
					</div>
					<div class="top">
						<img :src="item.image">
					</div>
					<div class="bottom">
						<ul>
							<li v-for="(data,num) in item.subList" :key="data.id">

								<img :src="data.image"/>
								<p>{{data.title}}</p>
								<span @click="suiyi2">点击我查看价格</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="six">
					<h3>——▪你可能感兴趣的▪——</h3>
					<ul v-infinite-scroll="loadMore"
  						infinite-scroll-disabled="loading"
  						infinite-scroll-immediate-check="false"
  						infinite-scroll-distance="0">
						<li v-for="(data,index) in looplist10" :key="data.id" @click="suiyi(data.goodsId)">
							<img :src="data.image">
							<p>{{data.name}}</p>
							<span>￥{{data.marketPrice.toString().slice(0,3)}}</span>
						</li>
					</ul>
					<p>{{msg}}</p>
				</div>
	</div>
</template>

<script>

 import router from "../router";
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
 import Vue from "vue";
 import "vue-swipe/dist/vue-swipe.css";
 import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				looplist2:[],
				looplist3:[],
				looplist4:[],
				looplist9:[],
				looplist10:[],
				loading:false,
				pageIndex:1,
				total:0,
				msg:"loading..."
			}
		},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			axios.get("/api/shopone").then(res=>{
				this.looplist2=res.data.navigatorIcon;
				this.looplist3=res.data.cellC.list;
				this.looplist4=res.data.topic.slice(0,4);
				this.looplist9=res.data.category;
				Indicator.close();
			}),
			axios.get(`/api/shoptwo?&goodsIds=103464&pageIndex=${this.pageIndex}`).then(res=>{
				this.looplist10=res.data.goodsList;
				this.total=res.data.count
			})
			this.scrollfunc=function(){
				console.log(1);
			}
		},
		methods:{
			suiyi(goodsId){
				router.push(`/detail/${goodsId}`)
			},
			suiyi2(){
				router.push("/myder");
			},
			loadMore(){
				this.pageIndex++;
				if(this.pageIndex>128){
					this.msg="已加载完全部数据";
					return;
				}
				axios.get(`/api/shoptwo?goodsIds=101391%2C100949%2C100853&pageIndex=${this.pageIndex}`).then(res=>{
					this.looplist10=[...this.looplist10,...res.data.goodsList]
				})
			}
		}
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
#shop{
	.sousuo{
			width: 100%;
			height:px2rem(100px);
			
			ul{
				width:px2rem(375px);
				height:px2rem(61px);
				padding:50px 35px;
				border-bottom: 1px solid #d8d8d8;
				display: flex;
				justify-content: space-between;
				align-items: center;
				li{
					width:40%;
					height:px2rem(60px);
					line-height:px2rem(60px);
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
						margin-left:px2rem(60px);
					i{
					  	width:px2rem(30px);
					  	height:px2rem(30px);
					  	font-size: 50px;
					  	font-weight: bold;
					  	color:#1e7dd7;
					  	position:absolute;
					  	left:px2rem(-47px);
						top: px2rem(0px);
					 }
				}
			}
			li:nth-child(2){
				width:60%;
				height:px2rem(30px);
				input{
					width:px2rem(557px);
					height:px2rem(57px);
					border-radius: px2rem(7px);
					position:absolute;
					left:px2rem(-13px);
					top:px2rem(-6px);
					vertical-align: middle;
					color: #777;
					font-size: 25px;
					padding-left:px2rem(5px);
				}
			}
		}	
	 }
	 .two{
	 	background:#fff;
	 	width:100%;
		 .my-swipe {
		  height: px2rem(557px);
		  color: #fff;
		  font-size: 30px;
		  text-align: center;
		  img{
		  	width:100%;
		  }
		}
		.nav{
			width:100%;
			ul {
			    width: 100%;
			    
			    display: flex;
			    flex-wrap: wrap;
			    justify-content: space-around;
			    li {
			        width: 25%;
			        height: 50%;
			        display: flex;
			        justify-content: center;
			        align-items: center;
			        flex-direction: column;
			        padding:19px 0px 19px 0;
			        img{
			        	    display: block;
			        	    width: px2rem(96px);
			        	    height: px2rem(96px);
			        }
			        p {
			            padding-top: px2rem(12px);
			            padding-left: px2rem(12px);
			            font-size:25px;
			            color:#aaa;
			        }
			    }
			}
		}	
	 }
	 .three{
	 	width:100%;
	 	margin-top:px2rem(30px);
	 	.top{
	 		display:flex;
	 		flex-direction:row;
	 		.one{
	 			width:50%;
	 			border-top:1px solid #aaa;
	 			border-left:1px solid #aaa;
	 		}
	 		.two{
	 			width:50%;
	 			
	 			ul{
	 				li{
	 				border-top:1px solid #aaa;
	 				border-left:1px solid #aaa;	
	 				border-right:1px solid #aaa;
	 				}
	 			}
	 		}
	 	}
	 	.bottom{
	 		border:1px solid #aaa;
	 		img{
	 			width:100%;
	 		}
	 	}
	 }
	 .four{
	 	width:100%;
	 	margin-top:px2rem(30px);
	 	background:#fff;
	 	position:relative;
	 	.one{
	 		width:100%;
	 		background:url("http://img31.mtime.cn/mg/2016/04/15/212149.64845449.jpg") no-repeat;
	 		ul{
	 			display:flex;
	 			flex-direction:row;
	 			
	 			li{
	 				width:25%;
	 				justify-content:space-around;
	 				margin:130px 15px 30px 15px;
	 			img{

	 				width:px2rem(160px);
	 				height:px2rem(160px);
	 			}

	 			}
	 			li:last-child{
	 				margin-right:px2rem(0px);
	 				margin-left:px2rem(0px);
	 			}
	 		}

	 	}
	 	.one-1{
	 		position:absolute;
	 		top:px2rem(296px);
	 		left:28%;
	 		font-size:35px;
	 		text-align: center;
	 	}
	 	.two{
	 		
	 		width:100%;
	 		ul {
	 			margin-top:117px;
	 		    width: 100%;
	 		    
	 		    display: flex;
	 		    flex-wrap: wrap;
	 		    justify-content: space-around;
	 		    li {
	 		        width: 33%;
	 		        display: flex;
	 		        justify-content: center;
	 		        align-items: center;
	 		        flex-direction: column;
	 		        img{
	 		        	
	 		        	    display: block;
	 		        	    width: px2rem(202px);
	 		        	    height: px2rem(202px);
	 		        	
	 		        }
	 		        p {
	 		        	width:100%;
	 		            padding-top: px2rem(12px);
	 		            padding-left: px2rem(12px);
	 		            font-size:27px;
	 		            overflow: hidden;
	 		            text-overflow: ellipsis; 
	 		            white-space: nowrap;
	 		            
	 		        }
	 		        p:last-child{
	 		        	color:red;
	 		        	font-weight: bold;
	 		        	text-align:center;
	 		        }
	 		    }
	 		}
	 	}
	 	button{
	 		color:#fff;
	 		font-size:30px;
	 		margin:30px 238px;
	 		background:#f26262;
	 		border-radius:px2rem(30px);
	 		width:px2rem(270px);
	 		height:px2rem(70px);
	 	}
	 }
	 .five{
	 	width:100%;
	 	margin-top:px2rem(30px);
	 	background:#fff;
	 	.top-1{
	 		display:flex;
	 		flex-direction:row;
	 		justify-content:space-between;
	 		border-bottom: 1px solid #ccc;
	 		h3{
	 			font-size:40px;
	 			color:#e16364;
	 			font-weight: 100;
	 			margin:20px 0; 
	 			i{
		 			width: px2rem(15px);
		 			height: px2rem(40px);
		 			display: inline-block;
		 			position: relative;
		 			margin-right: px2rem(15px);
		 			vertical-align: middle;
		 			overflow: hidden;
		 			background: #e16364;
	 		}
	 	  }
	 	  p{
	 	  	margin:30px 0;
	 	  	font-size:30px;
	 		color:#333;
	 		font-weight: 100;
	 		 
 			i{
	 			font-size:30px;
	 			color:#ccc;
	 			display: inline-block;
	 			position: relative;
	 			margin-right: px2rem(15px);
	 			
	 			
 			}
	 	  }
	 	}
	 	.top{
	 		border-bottom:1px solid #ccc;
	 	}
	 	.bottom{
	 		width:100%;
	 		ul{
	 			width: 100%;
	 			display:flex;
	 			flex-direction:row;
	 			justify-content:space-around; 
	 			li {
				    width: 25%;
				    height: 50%;
				    display: flex;
				    justify-content: center;
				    align-items: center;
				    flex-direction: column;
				    img{
				    	width:px2rem(204px);
				    	height:px2rem(204px);
	 				}
	 				p{
	 					font-size:25px;
	 					padding-top: px2rem(12px);
	 					padding-left: px2rem(22px);
	 					width: px2rem(190px);
	 					overflow: hidden;
	 					text-overflow: ellipsis; 
	 					white-space: nowrap; 

	 				}
	 				span{
	 						font-size:23px;
	 						color:#ccc;
	 						padding:5px 0;
	 				}
				}
	 			
	 		}
	 	}
	 }
	 .six{
	 	width:100%;
	 	margin-top:px2rem(30px);
	 	h3{
	 		font-size:30px;
	 		color:#999;
	 		text-align:center;
	 		padding-bottom:px2rem(30px);
	 	}
	 	ul{
	 		display:flex;
	 		width: 100%;
	 		display: flex;
	 		flex-wrap: wrap;
	 		justify-content: space-around;
	 		li{
	 			width:48%;
	 			height: 50%;
	 			display: flex;
	 			justify-content: center;
	 			align-items: flex-start;
	 			flex-direction: column;
	 			background:#fff;
	 			margin:px2rem(5px);
	 			img{
	 				width:px2rem(357px);
	 				height:px2rem(370px);
	 			}
	 			p{
	 				font-size:20px;
	 				color:#333;
	 				font-weight:100;
	 				padding-top: px2rem(12px);
	 				padding-left: px2rem(20px);
	 			}
	 			span{
	 				font-size:20px;
	 				color:#f60;
	 				font-weight:100;
	 				padding: 12px 20px;
	 			}
	 		}
	 	}
	 	p{
	 		font-size:30px;
	 		text-align:center;
	 	}
	 }
}
	

</style>