<template>
	<div id="myder">
		<ul>
			<li class="lis">
				<i class="iconfont icon-account"></i>
				<input type="text" placeholder="登陆邮箱/手机号码" v-model="username" v-on:blur="suiyi" class="username">
				<p class="ts1">请填写用户名</p>
			</li>
			<li>
				<i class="confont icon-box"></i>
				<input type="password" placeholder="密码" v-model="psw" v-on:blur="suiyi2" class="psw" id = "inputPsw">
				<span id="showPsw" @click="showToggle">显示密码</span>
				<p class="ts2">请填写密码</p>
			</li>
			<li>
				<div></div>
			</li>
			<li>
				<button @click="suiyi3">登录</button>
			</li>
			<li>
				<router-link tag="a" to="/regist" activeClass="active" class="myreg">免费注册</router-link>
				<span class="mypas">找回密码</span>
			</li>
			<li>
				<span>使用第三方登录</span>
			</li>
			<li>
					<img  src="http://static1.mtime.cn/html5/20170731152519/images/2014/o_sina.png">
					<img  src="http://static1.mtime.cn/html5/20170731152519/images/2014/o_qq.png">
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
				psw:""
			}
		},
		methods:{
        	suiyi(el){           
        		 var zj=/^1[34578]\d{9}$/;
        		
        		 if(this.username==""||zj.test(this.username)==false){
				 	   document.querySelector(".ts1").style.display='block';
				 	}else{
				 	    document.querySelector(".ts1").style.display='block';
				 	    document.querySelector(".ts1").innerHTML='输入正确';
	 	    			document.querySelector(".ts1").style.background="lightgreen";
				 	}
        	},
        	suiyi2(el){               
        		 var mm=/^[a-zA-Z0-9]{6,}$/;
        		 
        		 if(this.psw==""||mm.test(this.psw)==false){
	 	    			document.querySelector(".ts2").style.display='block';
	 				}else{
	 	    			document.querySelector(".ts2").style.display='block';
	 	    			document.querySelector(".ts2").innerHTML='输入正确'
	 	    			document.querySelector(".ts2").style.background="lightgreen";
	 				}
        	},
        	suiyi3(el){
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
					axios.post('/users/login4ajax',{
						username:username,
						psw:psw
					}).then((res)=>{
					 	if(res.data.code==1){
							router.push('/denglu');
							return;
							}
						if(res.data.code==0){
							console.log(111);
						}
					}).catch((err)=>{
					})
				}
        	},
        	showToggle:function(){  
	            if(inputPsw.type==='password'){
	            	inputPsw.type="text";
	            }else{
	            	inputPsw.type="password";
	            }
	        }  
        },
        watch:{  
            }
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
@keyframes mymove
{
from {left:-100px;}
to {left:0px;}
}
	#myder{
		ul{
			width:100%;
			background:transparent;
			display:flex;
			flex-direction:column;
			justify-content: center;
			align-items:center;
			.lis{
				border-bottom:1px solid #ccc;
			}
			li:nth-child(1){
				position:relative;
				background:#fff;
				.ts1{
					animation:mymove .2s;
					display:none;
					position:absolute;
					color:red;
					font-size:px2rem(25px);
					left:px2rem(10px);
					bottom:0;
					color:#000;
					border:1px solid pink;
					background:pink;
					padding:1px 30px;
					border-radius:60px;
				}
			}
			li:nth-child(2){
				background:#fff;
				position:relative;
				i{
					margin-right:px2rem(28px);
				}
				#showPsw{
					display:block;
					width:px2rem(200px);
					height:px2rem(60px);
					line-height:px2rem(60px);
					text-align:center;
					color:#1e7dd7;
					font-size:30px;
				}
				.ts2{
					animation:mymove .2s;
					display:none;
					position:absolute;
					color:red;
					font-size:25px;
					left:px2rem(10px);
					bottom:px2rem(0px);
					color:#000;
					border:1px solid pink;
					background:pink;
					padding:1px 30px;
					border-radius:60px;				}
			}
			li:nth-child(3){
				padding:0;
				div{
background: linear-gradient(#fff,#ddd); 
					height:px2rem(10px);
					width:100%;
				}
			}
			li{
				width:100%;
				display:flex;
				flex-direction:row;
				align-items:center;
				padding:30px 30px 30px 30px;
				i{
					width:20%;
					font-size:50px;
					padding-left:px2rem(30px);
				}
				input{
					background:none;  
					outline:none;  
					border:px2rem(0px);  
					width:80%;
					padding:px2rem(5px);
					 text-decoration:none;
					background:transparent;
					height:50%;
					font-size:40px;
					margin-left:px2rem(25px);

				}
				button{
					width:100%;
					background:#1e7dd7;
					border:1px solid #1e7dd7;
					color:#fff;
					height:px2rem(110px);
					border-radius:px2rem(60px);
					font-size: 50px;
					text-align:center;
				}
				span{
					background:transparent;
				}
				.myreg{
					color:#1e7dd7
				}
				.mypas{

				}
			}
			li:nth-child(4){
				background:transparent;
			}
			li:nth-child(5){
				background:#efefef;
				display:flex;
				justify-content:space-between;
				font-size:30px;
			}
			li:nth-child(6){
				border-top:2px solid #ccc;
				width:80%;
				position:relative;
				text-align:center;
				span{
					width:px2rem(230px);
					height:px2rem(40px);
					position:absolute;
					top:px2rem(-20px);
					left:px2rem(180px);
					background:#efefef;
					font-size:28px;
					color:#999;
				}
			}
			li:nth-child(7){
				display:flex;
				flex-direction:row;
				justify-content:space-around;
				width:70%;

				img{
					display:block;
				}
			}
		}
	}
</style>