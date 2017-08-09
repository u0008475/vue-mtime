<template>
	<div id="buy" v-html="looplist16">
		
			
	</div>
</template>

<script>
	export default{
		data(){
			return{
				looplist16:""
			}

		},
		mounted(){
			axios.get(`/api/detailone?id=${this.$route.params.id}`).then(res=>{
				this.looplist16=res.data.data.productDetail.goods.note

			}),
			setTimeout(() => {
			    this.$nextTick(()=>{
				   var infotext=document.querySelector('.infotext');
                   infotext.style.fontSize="30px";
                   infotext.style.width="100%";
                   var dt=document.querySelector("dt");
                   var dt2=document.querySelector("dt:nth-of-type(2)");
                   var dt3=document.querySelector("dt:nth-of-type(3)");
                   var dt4=document.querySelector("dt:nth-of-type(4)");
                   dt.style.fontSize="33px";
                   dt.style.padding="10px 0";
                   dt2.style.fontSize="33px";
                   dt2.style.padding="10px 0";
                   dt3.style.fontSize="33px";
                   dt3.style.padding="10px 0";
                   dt4.style.fontSize="33px";
                   dt4.style.padding="10px 0";
                   var dd=document.querySelector("dd");
                   var dd2=document.querySelector("dd:nth-last-child(2)");
                   var dd3=document.querySelector("dd:nth-last-child(1)");
                   var dd4=document.querySelector("dd:nth-child(3)");
                   dd.style.fontSize="30px";
                   dd.style.color="#ccc";
                   dd2.style.fontSize="30px";
                   dd2.style.color="#ccc";
                   dd3.style.fontSize="30px";
                   dd3.style.color="#ccc";
                   dd4.style.fontSize="30px";
                   dd4.style.color="#ccc";
                   var dd6=document.querySelectorAll(".dnum");
                   for(var i=0,j=dd6.length;i<j;i++){
                   	dd6[i].style.fontSize="30px";
                   dd6[i].style.color="#ccc";
                   }

			    })
			}, 2000)
		}
		
	}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
    @return $px/$ui-width*7.5rem;
}
	#buy{
		background:#fff;
		font-size:30px;
		padding:10px 30px;
		.infotext{
			width:100%;
			padding:px2rem(10px);
			dt{
				padding: 8px 0;
				font-size:50px;
			}
			dd{
				color:#ccc;
			}
		}
	}
</style>