<template>
	<div id="denglu">
		<div class="one">
		<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&width=100&height=100&clipType=4">
		<div class="bottom">
			<p>你好，亲爱的主人</p>
			<p>余额：￥0</p>
		</div>
		</div>
		<div class="two">
			<ul>
				<li>
					<div class="div1">
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/i_cate.png" class="you">
					</div>
					<p>购物车</p>
				</li>
				<li>
					<div class="div2">
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/i_movie.png" class="small">
					</div>
					<p>电影票订单</p>
				</li>
				<li>
				<div class="div3">
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/i_shop.png" class="beach">
					</div>
					<p>商品订单</p>
				</li>
			</ul>
		</div>
		<div class="three">
			<ul>
				<li><i class="iconfont icon-favorite"></i>我的商品优惠卷</li>
				<li><i class="iconfont icon-form"></i>我的活动</li>
				<li><i class="iconfont icon-training"></i>我的电影</li>
				<li><i class="iconfont icon-favorites"></i>我的收藏</li>
			</ul>
		</div>
		<div class="four">
			<ul>
				<li>意见反馈<i class="iconfont icon-more"></i></li>
				<li>商城使用帮助<i class="iconfont icon-more"></i></li>
			</ul>
		</div>
		<div class="five">
			<button>退出登录</button>
		</div>
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
	#denglu{
		width:100%;
		.one{
			display:flex;
			background:url("http://static1.mtime.cn/html5/20170731152519/images/2014/set_endlogin.jpg") no-repeat;
			background-size:cover;
			height:px2rem(375px);
			flex-direction:row;
			align-items:center;
			justify-content:center;
			img{
				border-radius:50%;
				zoom:1.5;
			}
			p{
				width:100%;
				color:#fff;
				padding-left:px2rem(50px);		
			}
			p:nth-child(1){
				font-size:35px;

			}
			p:nth-child(2){
				font-size:28px;
			}
		}
		.two{
			width:100%;
			background:#fff;
			ul {
			    width: 100%;
			    height: px2rem(200px);
			    display: flex;
			    flex-wrap: wrap;
			    justify-content: space-around;
			    li {
			        display: flex;
			        flex:1;
			        border-radius:50%;
			        justify-content: center;
			        align-items: center;
			        flex-direction: column;
			       img {
			            background-size:cover;
			        }
			        div{
			        	width:px2rem(130px);
			        	height:px2rem(130px);
			        	background:lime;
			        	overflow:hidden;
			        	border-radius:50%;
			        	display:flex;
			        	justify-content: center;
			        	align-items:center;
			        }
			        .div1{
			        	background:#ffb059;
				        .you{
				        	background:#ffb059;
				        	zoom:1.5;
				        }			        	
			        }
			        .div2{
				        background:#78bdfd;
				        .small{
				        	background:#78bdfd;
				        	zoom:.6;
				        }			        	
			        }
			        .div3{
				        background:#ff815a;
				        .beach{
				        	background:#ff815a;
				        	zoom:.6;
				        }		        	
			        }

			        p{
			        	font-size:25px;
			        	padding-top:px2rem(10px);
			        	color:#444;
			        }
			    }
			}
		}
		.three{
			background:#fff;
			margin-top:px2rem(30px);
			width:100%;
			ul{
				li{
					border-bottom:1px solid #ccc;
					padding:px2rem(20px);
					font-size:35px;
					i{
						font-size:40px;
						padding-left:px2rem(20px);
						padding-right:px2rem(20px);
					}

				}
			}
		}
		.four{
			background:#fff;
			margin-top:30px;
			width:100%;
			ul{
				li{
					border-bottom:1px solid #ccc;
					padding:px2rem(20px);
					padding-left:px2rem(40px);
					font-size:37px;
					display:flex;
					justify-content:space-between;
					i{
						font-size:35px;
					}
				}
			}
		}
		.five{
			display:flex;
			justify-content:center;
			padding:px2rem(30px);
			button{
				border-radius:px2rem(50px);
				background:#f60;
				width:90%;
				height:px2rem(100px);
				border:0;
				font-size:40px;
				color:#fff;
				font-weight:100;
			}
		}
	}

</style>