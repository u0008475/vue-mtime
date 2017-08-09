<template>
	<div id="news">
		<div class="one" >
			<img src="http://img5.mtime.cn/mg/2017/07/19/103505.79149520.jpg">
			<h3>2017年SDCC圣地亚哥国际漫展前瞻</h3>
		</div>
		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check="false"
  infinite-scroll-distance="0">
			<li v-for="(data,index) in looplist13" :key="data.id">
				<img :src="data.image">
				<div class="two">
				<h2>{{data.title}}</h2>
				<p><span><b>简介:</b></span>{{data.title2}}</p>
				</div>
			</li>
		</ul>	
		<p>{{msg}}</p>					
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				looplist13:[],
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
			axios.get(`/api/findnew?pageIndex=${this.pageIndex}`).then(res=>{
				this.total=res.data.totalCount;
				this.looplist13=res.data.newsList;
				Indicator.close();
			})
			
		},
		methods:{
			loadMore(){
				this.pageIndex++;
				if(this.pageIndex>this.total){
					this.msg="没有数据了";
					return
				}
				axios.get(`/api/findnew?pageIndex=${this.pageIndex}`).then(res=>{
					this.looplist13=[...this.looplist13,...res.data.newsList]
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
	#news{
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
			}
		}
		ul{
			background:#fff;
			width:100%;
			li{
				display:flex;
				padding:40px 0;
				border-bottom: 1px solid #ccc;
				img{
					width:px2rem(200px);
					height:px2rem(180px);
					margin:0 30px;
				}
				.two{
					display:flex;
					flex-direction:column;
					h2{
						font-size:35px;
						width:px2rem(450px);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						padding: 30px 0;
						padding-top: px2rem(20px);
					}
					p{
						font-size:25px;
						width:px2rem(430px);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						span{
							display:inline-block;
							font-size:27px;
							margin-right:px2rem(10px);
						}
					}
				}
			}
		}
		p{
			font-size:30px;
			text-align:center;
		}
	}	
</style>