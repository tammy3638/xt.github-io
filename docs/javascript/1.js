<script>
    var link=document.getElementById("link");//获取a对象
    breadcrumb.onclick=function(){//a 标签点击时调用的函数
        this.parentNode.style.backgroundColor="#f00";//a标签的父级元素即div改变背景颜色
        return false;//取消a标签的默认跳转方式
    }
</script>