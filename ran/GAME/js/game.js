/**
 * .
 */
(function(){
    $('#postrlt').on('click',postmsg);
    function postmsg(){
        var myname = $.trim($('#txtName').val());
        var myid = parseInt(Math.random()*4);
        var contant = $('#warper').html();
        if(myname == "" || myname == "Please enter your name"){return false;}
        var json = {data:[
            {id:'1',name:'Ran',tag:'No-Face ',url:'images/1.jpg'},
            {id:'2',name:'Ran',tag:'Batman',url:'images/2.jpg'},
            {id:'3',name:'Ran',tag:'Super Mario',url:'images/3.jpg'},
            {id:'3',name:'Ran',tag:'superman',url:'images/4.jpg'},
            {id:'3',name:'Ran',tag:'Snow White',url:'images/5.jpg'}
        ]};
        var reqhtml = '<p class="fff ft16"><span class="ft24">Test Results：</span><br><span class="fc636363">'+myname+'</span> : YOU WILL BECOME【'+json.data[myid].tag+'】LOL</p><p class="tc mtb20"><img src="'+json.data[myid].url+'" width="100%" alt=""></p><p class="mtb20"><a class="goback" href="javascript:window.location.reload();">PLAY AGAIN!</a></p>';
        $('#warper').html(reqhtml);
       
    }
})();



// 获取url参数
function urlPara(v){
    var url = window.location.search;
    if (url.indexOf(v) != -1){
        var start = url.indexOf(v)+v.length;
        var end = url.indexOf('&',start) == -1 ? url.length : url.indexOf('&',start);
        return url.substring(start,end);
    } else { return '';}
}