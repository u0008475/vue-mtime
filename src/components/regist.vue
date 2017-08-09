<template>
	<div id="regist">
		<ul>
			<li>
				手机号：<input type="text" placeholder="请输入手机号"  class="username" v-model="username" v-on:blur="suiyi4">
				<span>获取验证码</span>
				<p class="ts1">请填写用户名</p>
			</li>
			<li>
				验证码：<input type="text" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" onafterpaste="this.value=this.value.replace(/[^0-9]/g," placeholder="验证码">
				<span class="checkNum"><i class="iii1"></i><i class="iii2"></i>9372</span>
			</li>
			<li>
				密&nbsp&nbsp&nbsp码：<input type="password" placeholder="6-20字母，数字，符号组成" class="psw" v-model="psw" v-on:blur="suiyi5">
				<p class="ts2">请填写密码</p>
			</li>
			<li>
				<div></div>
			</li>
			<li @click="showToggle">
				<img class="img4-1" v-show="isShow"  src="http://static1.mtime.cn/html5/20170731152519/images/2014/i_suss.png">
 				<img class="img4-2"   src="http://static3.mtime.cn/html5/20170731152519/images/2014/i_check.png">

				<span class="span4-1" >我已阅读并同意</span><span class="span4-2">《豆豆网服务条款》</span>
			</li>
			<li>
				<button @click="suiyi6">注册</button>
			</li>
			<li>
				<router-link tag="a" to="/myder" activeClass="active">如已有账户，请登录</router-link>
			</li>
		</ul>
							
	</div>
</template>

<script>
import router from "../router";
	export default{
		data(){
			return{
				username:"",
				psw:"",
				isShow:true
			}
		},
		methods:{
			suiyi4(el){           
        		 var zj=/^1[34578]\d{9}$/;
        		
        		 if(this.username==""||zj.test(this.username)==false){
				 	   document.querySelector(".ts1").style.display='block';
				 	}else{
				 	    document.querySelector(".ts1").style.display='block';
				 	    document.querySelector(".ts1").innerHTML='未注册可使用';
	 	    			document.querySelector(".ts1").style.background="lightgreen";
				 	}
        	},
        	suiyi5(el){               
        		 var mm=/^[a-zA-Z0-9]{6,}$/;
        		 
        		 if(this.psw==""||mm.test(this.psw)==false){
	 	    			document.querySelector(".ts2").style.display='block';
	 				}else{
	 	    			document.querySelector(".ts2").style.display='block';
	 	    			document.querySelector(".ts2").innerHTML='输入正确'
	 	    			document.querySelector(".ts2").style.background="lightgreen";
	 				}
        	},
        	suiyi6(el){
        		var zj=/^1[34578]\d{9}$/;
        		var mm=/^[a-zA-Z0-9]{6,}$/;
        		var username=document.querySelector(".username").value;
        		var psw=document.querySelector(".psw").value;
        		if(username===""||zj.test(username)==false){
        			document.querySelector(".ts1").style.display='block';
        			return;
        		}
        		if(psw===""||mm.test(psw)==false){
        			document.querySelector(".ts2").style.display='block';
        			return;
        		}
        		if(username!==''&&psw!==''){
					axios.post('/users/regist4ajax',{
						username:username,
						psw:psw
					}).then((res)=>{
					 	if(res.data.code==1){
							router.push('/myder');
							return;
							}
						else{
							alert(res.data.msg);
						}
					})
				}
        	},
        	showToggle:function(){  
                this.isShow = !this.isShow;
            }  
		}
	}
</script>

<style scoped lang="scss">
@keyframes mymove
{
from {left:-100px;}
to {left:0px;}
}
	$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#regist{
		ul{
			width:100%;
			display:flex;
			flex-direction:column;
			li{
				padding:0px 40px;
				font-size:33px;
				height:px2rem(120px);
				width:100%;
				display:flex;
				flex-direction:row;
				align-items:center;
				input{
					background:none;  
					outline:none;  
					border:0;  
					width:20%;
					padding:px2rem(5px);
					 text-decoration:none;
					background:transparent;
					height:50%;
					font-size:35px;
					margin-left:px2rem(25px);
					height:px2rem(90px);
					width:70%;
				}
			}
			li:nth-child(1){
				border-bottom:1px solid #bbb;
				background:#fff;
				position:relative;
				span{
					position:absolute;
					right:px2rem(40px);
					border:3px solid #1E7DD7;
					padding:12px 35px;
					font-size:30px;
					border-radius:px2rem(60px);
					color:#1E7DD7;
				}
				.ts1{
					display:none;
					animation:mymove .2s;
					display:none;
					position:absolute;
					color:red;
					font-size:25px;
					left:px2rem(10px);
					bottom:0;
					color:#000;
					border:1px solid pink;
					background:pink;
					padding:1px 30px;
					border-radius:px2rem(60px);
				}
			}
			li:nth-child(2){
				border-bottom:1px solid #bbb;
				background:#fff;
				width:100%;
				position:relative;
				.checkNum{
					width:px2rem(160px);
					padding-left:px2rem(15px);
					height:px2rem(70px);
					display:block;
					border:1px solid #ccc;
					position:absolute;
					right:px2rem(70px);
				background: linear-gradient(#eee,#222); 
				color:#fff;
				font-size:40px;
				text-align:center;
				line-height:px2rem(70px);
				letter-spacing:px2rem(13px);
				position:absolute;
				.iii1{
					width:px2rem(100px);
					height:px2rem(2px);
					border:2px solid #eee;
					position:absolute;
					top:px2rem(20px);
					left:px2rem(10px);
					transform:rotateZ(7deg);
				}
				.iii2{
					width:px2rem(100px);
					height:px2rem(2px);
					border:2px solid #eee;
					position:absolute;
					top:px2rem(30px);
					right:0;
					transform:rotateZ(-27deg);
				}
				}
			}
			li:nth-child(3){
				position:relative;
				border-bottom:1px solid #bbb;
				background:#fff;
				.ts2{
					display:none;
					animation:mymove .2s;
					display:none;
					position:absolute;
					color:red;
					font-size:25px;
					left:px2rem(10px);
					bottom:0;
					color:#000;
					border:1px solid pink;
					background:pink;
					padding:1px 30px;
					border-radius:px2rem(60px);
				}	
			}
			li:nth-child(4){
				padding:0;
				width:100%;
				height:px2rem(5px);
				div{
				background: linear-gradient(#fff,#ccc); 
				height:px2rem(10px);
				width:100%;
					}
			}
			li:nth-child(5){
				display:flex;
				flex-direction:row;
				justify-content:center;
				font-size:30px;
				color:#333;
				text-align: center;
				img{
					margin-right:px2rem(20px);
					width:px2rem(40px);
					height:px2rem(40px);
					display:block;
				}
				.img4-1{
					position:absolute;
					left:px2rem(50px);
					z-index: 111;
				}
				.img4-2{
					position:absolute;
					left:px2rem(50px);
				}
				span{
					font-size:33px;
				}
				.span4-1{

				}
				.span4-2{
					color:#1E7DD7;
				}
			}
			li:nth-child(6){
				padding:0 40px;
				button{
					background:#1e7dd7;
					border:1px solid #1e7dd7;
					color:#fff;
					width:100%;
					height:px2rem(90px);
					border-radius:px2rem(60px);
					font-size: 40px;
				}
			}
			li:nth-child(7){
				height:px2rem(40px);
				font-size:30px;
				color:#333;
				text-decoration:underline;
				a{
					color:#1e7dd7;
					font-weight:400;
				}
			}
			.active{
				color:#333;
			}
		}
	}
	$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
</style>