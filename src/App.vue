<template>
	<div class="all">
		<header>
			<ul>
				<li id="logo">豆豆网</li>
				<router-link to="/home" tag="li" activeClass="active">首页</router-link>
				<router-link to="/tickets" tag="li" activeClass="active">购票</router-link>
				<router-link to="/shop" tag="li" activeClass="active">商城</router-link>
				<router-link to="/find" tag="li" activeClass="active">发现</router-link>
				<router-link to="/myder" tag="li" activeClass="active">
				<i class="iconfont icon-account"></i>
				</router-link>
				
			</ul>
		</header>
		 <router-view></router-view>
	</div>
</template>

<script>
import "./assets/iconfont/iconfont.css";

export default {
 data(){
 	return{

 	}
 }
}
</script>

<style lang="scss">
body, ul, li, ol, dl, dt, dd, h1, h2, h3, h4, h5, h6, a, img, input, figure, figcaption, p {
	padding: 0;
	margin: 0;
}
body,html{height:100%;}
* {
	box-sizing: border-box;
}
ul, ol {
	list-style: none;
}
body {
	font: 12px/1.5 "微软雅黑";
	background: #efefef;
}
a {
	text-decoration: none;
	color: #bbb;
}
a:hover {
	color: #fff;
	text-decoration: none;
}
img {
	border: 0;
	display: block;
}
input {
	outline: none;
}
body, html {
	height: 100%;
}
header, nav, main, section, article, footer, figure, figcaption {
	display: block;
}
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
.all {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
        width: 100%;
        height: px2rem(106px);
        background: #1c2635;
         ul {
            width: 100%;
            height: px2rem(106px);
            line-height: px2rem(106px);
            display: flex;
            justify-content: space-around;
            align-items: center;
            color:#bbb;
            .active{
            	color:#fff;
            	border-bottom:9px solid #fff;
            } 
             #logo{
              font-size:40px;
            }          	
           li{
           	font-size: 30px;
           	font-weight: bold;
       	   i{
   		    font-size: 30px;
   		    font-weight: bold;
       	   }
           }
           li:first-child{
           	color:#fff;

           }
        }
    }
}
</style>
