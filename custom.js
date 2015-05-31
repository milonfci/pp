  
    var per_page = 2;
    var current_page = 
    $(document).ready(function(){
       var total_portfolio = $('.img').length;
       
       for(var i=0;i<=total_portfolio;i++){
           if(i>per_page){
               $('.img').eq(i-1).hide();
           }
       }
       
       var paging = Math.round(total_portfolio/per_page); 
       var paging_link = '<ul>';
       for(var j=1;j<=paging;j++){
           paging_link += '<li><span class="paging_lnk">'+j+'</span></a></li>';
       }
       paging_link += '</ul>';
       
       $('.paging').html(paging_link);
       
       $('.paging_lnk:first').addClass('active');
       
       // on click
       $('.paging_lnk').on('click',function(){
           
           $('.img').hide();
           $('.paging_lnk').removeClass('active');
           $(this).addClass('active');
           var index_num = $(this).parent('li').index();
           var start = index_num*per_page;
           var end = start+per_page;
//           alert(start);
           for(var k=start;k<end;k++){
               $('.img').eq(k).show();
           }
       });
       
       // next- previous
       $('.next').on('click',function(){
           var c_page = $('ul .active').parent('li').index();
           $('.paging_lnk').removeClass('active');
           $('.paging_lnk').eq(c_page+1).addClass('active');
           $('.paging_lnk').eq(c_page+1).trigger('click','.paging_lnk'+(c_page+1));
//           alert(paging);
           var next_page = c_page+2;
           if(next_page>paging){
               $('.paging_lnk').eq(0).addClass('active');
           $('.paging_lnk').eq(0).trigger('click','.paging_lnk0');
           }
       });
       
       // next- previous
       $('.previous').on('click',function(){
           var c_page = $('ul .active').parent('li').index();
           $('.paging_lnk').removeClass('active');
           $('.paging_lnk').eq(c_page-1).addClass('active');
           $('.paging_lnk').eq(c_page-1).trigger('click','.paging_lnk'+(c_page-1));
//           alert(paging);
           var prev_page = c_page-2;
           if(prev_page>paging){
               $('.paging_lnk').eq(0).addClass('active');
           $('.paging_lnk').eq(0).trigger('click','.paging_lnk0');
           }
       });
    });