<template>
	<div id="detail">
		<div v-if="looplist11">
			<div class="one">
				<swipe class="my-swipe">
				  <swipe-item v-for="(data,index) in looplist11.goods.imageRects" :key="data.id">
				  <img :src="data">
				  </swipe-item>
				</swipe>
				<h2>{{looplist11.goods.longGoodsName}}</h2>
				<p>￥{{looplist11.goods.marketPrice.toString().slice(0,3)}}<span>登入享受会员价</span></p>
				<p>市场价<span>￥{{looplist11.goods.maxSalePrice.toString().slice(0,3)}}</span></p>
				<p><span></span><span>{{looplist11.goods.postAgeText}}</span></p>
			</div>
			<div class="two">
				<div class="top">
					<p>评价晒单({{looplist11.goods.reviewInfo.totalCount}}人评论)</p>
					<p><span>92%</span>好评<i class="iconfont icon-more"></i></p>
				</div>
				<div class="bottom">
					<ul>
						<li v-for="(data,index) in looplist11.goods.reviewInfo.reviewInfos" :key="data.id">
						<div class="one">
							<img v-show="data.headPic" :src="data.headPic">
							<h5>{{data.nickName}}</h5>
						</div>
						<div class="two2">
							<p>{{data.content}}</p>
							<img :src="data.imageUrls">
						</div>
						</li>
					</ul>

				</div>
			</div>
			<div class="three">
				<ul>
					<router-link tag="li" :to="{name: 'detail1', params: { id: looplist14 }}" activeClass="active">图文详情</router-link>
					<router-link tag="li" :to="{name: 'detail', params: { id: looplist14 }}" activeClass="active">购买须知</router-link>
				</ul>
				<router-view></router-view>
			</div>
			</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import Vue from"vue";
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
import 'vue-swipe/dist/vue-swipe.css';
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				looplist11:null,
				looplist12:[],
				looplist14:""
			}
		},
		mounted(){
			this.looplist14=this.$route.params.id;
			axios.get(`/api/detailone?id=${this.$route.params.id}`).then(res=>{
				this.looplist11=res.data.data.productDetail;
			})
		}
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
#detail{
	.one{
		width:100%;
		background:#fff;
		.my-swipe {
		  height: px2rem(614px);
		  color: #fff;
		  font-size: 30px;
		  text-align: center;
			  img{
			  	width:100%;
			  }
		}
	h2{
		font-size:35px;
		font-weight:bold;
		margin:px2rem(10px);
	}
	p{	
		margin:px2rem(10px);
		font-size:40px;
		color:#f60;
		font-weight: 300;
		span{
			font-size:30px;
			margin-left:px2rem(40px);
		}
	}
	p:nth-last-child(2){
		margin:5px 20px;
		font-size:30px;
		color:#999;
		span{
			text-decoration:line-through;
			margin-left:0px;
		}
		
	}
	p:nth-last-child(1){
		font-size:25px;
		padding:15px 10px;
		padding-top:px2rem(5px);
		span:first-child{
			background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/freeshiping.png") no-repeat;
			width:px2rem(32px);
			height:px2rem(32px);
			display: inline-block;
			margin-left:px2rem(10px);
			margin-top:px2rem(5px);
		}
		span:last-child{
			margin-left:px2rem(5px);
		}
	}
	}
	.two{
		width:100%;
		margin-top:px2rem(30px);
		background:#fff;
		.top{
			display:flex;
			justify-content:space-between;
			padding:px2rem(20px);
			border-bottom:1px solid #ccc;
			p{
				font-size:30px;
			}
			p:nth-last-child(1){
				span{
					color:#f60;
				}
				i{
					font-size:30px;
				}
			}
		}
		.bottom{
			ul{
				li{
					.one{
						padding:30px 20px;
						display:flex;
						justify-content:flex-start;
						img{
							width:px2rem(76px);
							height:px2rem(76px);
							border-radius:50%;
						}
						h5{
							padding-top:px2rem(10px);
							font-size:30px;
							font-weight:100;
							padding-left:px2rem(20px);
						}
					}
					.two2{
						padding:5px 20px;
						p{
							font-size:30px;
						}
						img{
							padding:20px 0;
							width:px2rem(200px);
							height:px2rem(200px);
						}
					}
				}
			}
		}
	}
	.three{
		width:100%;
		margin-top:30px;
		background:#fff;
		ul{
			display: flex;
			width:100%;
			justify-content: space-around;
			li{
				font-size:35px;
				padding:30px 0;
				border-bottom:1px solid #ccc;
				text-align:center;
			}
			.active{
				border-bottom:5px solid #f60;
			}
		}
	}
}
	

</style>