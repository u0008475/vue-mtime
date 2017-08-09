<template>
	<div id="charst">
		<div class="one" >
			<img src="http://img5.mtime.cn/mg/2017/03/01/173620.86296561.jpg">
			<h3>那些荣获奥斯卡的LGBT电影</h3>
		</div>
		<div class="three">
			<ul>
				<li>
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/top01.png">
					<p>时光Top100</p>
				</li>
				<li>
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/top02.png">
					<p>华语Top100</p>
				</li>
				<li>
					<img src="http://static1.mtime.cn/html5/20170731152519/images/2014/top03.png">
					<p>全球票房榜</p>
				</li>
			</ul>
		</div>
		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check="false"
  infinite-scroll-distance="0">
			<li v-for="(data,index) in looplist13" :key="data.id">
				
				<div class="two">
				<h2>{{data.topListNameCn}}</h2>
				<p>{{data.summary}}</p>
				<i class="iconfont icon-more"></i>
				</div>
			</li>
		</ul>
		<p class="loading">{{msg}}</p>					
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				looplist13:[],
				msg:"loading...",
				loading:false,
				pageIndex:1,
				total:0
			}
		},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			axios.get(`/api/findcharst?pageIndex=${this.pageIndex}`).then(res=>{
				this.looplist13=res.data.topLists;
				this.total=res.data.totalCount;
				Indicator.close();
			})
		},
		methods:{
			loadMore(){
				this.pageIndex++;
				if(this.pageIndex>this.total){
					this.msg="以没有数据了";
					return;
				}
				axios.get(`/api/findcharst?pageIndex=${this.pageIndex}`).then(res=>{
					this.looplist13=[...this.looplist13,...res.data.topLists]
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
	#charst{
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
				background:rgba(0,0,0,.7);
			}
		}
		.three{
			width:100%;
			background:#fff;
			ul{
				display:flex;
				flex-wrap: wrap;
				justify-content: space-around;
				border-bottom:1px solid #ccc;
				li{
					width:30%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					border:0;
					img{
						width:px2rem(100px);
						height:px2rem(100px);
					}
					p{
						padding:10px 0;
						font-size:30px;
					}
				}
				li:nth-child(1){
					p{
						color:#1498c9;
					}
				}
				li:nth-child(2){
					p{
						color:#3bc7c2;
					}
				}
				li:nth-last-child(1){
					p{
						color:#ffc12d;
					}
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
				
				.two{
					width:100%;
					display:flex;
					flex-direction:column;
					margin-left:px2rem(30px);
					position:relative;
					h2{
						font-size:35px;
						width:100%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						padding: 20px 0;
						padding-top: px2rem(20px);
						color:#333;
					}
					p{
						font-size:30px;
						width:px2rem(573px);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						color:#666;
					}
					i{
						font-size:40px;
						position:absolute;
						right:px2rem(30px);
						top:40%;
					}
				}
			}
		}
		.loading{
			font-size:30px;
			text-align:center;
		}
	}	
</style>