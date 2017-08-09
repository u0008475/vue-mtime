<template>
	<div id="tickets">
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
		<div class="xia">
		<div class="header">
			<ul>
				<router-link tag="li" to="/tickets/all" activeClass="active">全部<span>|</span></router-link>
				<router-link tag="li" to="/tickets/money" activeClass="active">价格<span>|</span></router-link>
				<router-link tag="li" to="/tickets/select" activeClass="active"><span><i class="iconfont icon-filter"  @click="openPicker"></i></span>筛选</router-link>
			</ul>
		</div>
		<router-view></router-view>
		<mt-datetime-picker ref="picker" type="date" v-model="pickerValue"></mt-datetime-picker>
	</div>
</div>
</template>

<script>
import { DatetimePicker } from 'mint-ui';
	export default{
		data(){
			return{
				pickerValue:new Date("January 12,2006 22:19:35")
			}
		},
		methods:{
			openPicker() {
			       this.$refs.picker.open();
			     },
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
	#tickets{
		.cs{
			background:red;
			width:px2rem(1000px);
			height:px2rem(1000px);
			display:block;
		}
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
							margin-left:px2rem(60px);
							top:px2rem(60px);
						i{
						  	width:px2rem(30px);
						  	height:px2rem(30px);
						  	font-size: 30px;
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
					border:2px solid #ccc;;
					border-radius: px2rem(15px);
					display:block;
					color: #777;
					font-size: px2rem(28px);
					padding-left:px2rem(50px);
					margin-left:px2rem(50px);
					}
				}
			}	
		 }
		 .xia{
		 	background:#fff;
		 	width:100%;
		.header{
			width:100%;
			height:px2rem(100px);
			ul{
				display:flex;
				justify-content:space-around;
				align-items:center;
				height:px2rem(100px);
				line-height:px2rem(100px);
				font-size: px2rem(33px);
				li{
					position:relative;
					span{
						display:inline-block;
						position:absolute;
						left:px2rem(143px);
						color:#ccc;
					}

				}
				li:last-child{

					span{
						display:inline-block;
						position:absolute;
						left:px2rem(-45px);
						color:#ccc;
						i{
							font-size: 33px;
						}
					}
				}
				.active{
					color:#1e7dd7;
					i{
						color:#1e7dd7;
					}
				}
			}
		}
	}
}
</style>