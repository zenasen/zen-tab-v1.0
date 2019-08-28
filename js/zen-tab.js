(function($) {

  $.fn.zen_tab = function() {
    this.addClass("zen-tab-fn");
    var this_zen_tab = $(this);
    var header_texts = this_zen_tab.find(".header-text");
    this_zen_tab.find(".tab-header .header-text").on("click", function(){
      var header_text = $(this);
      if(header_text.hasClass("aktif")){
        return;
      }
      header_texts.removeClass("aktif");
      header_text.addClass("aktif");
      
      var target = header_text.attr("target");
      
      //hide current aktif tab 
      this_zen_tab.find(".tab-content .content").removeClass("tampil");
      
      //resize tab
      setTimeout(function(){ 
        var tab_content_h = this_zen_tab.find(".tab-content").height();
        this_zen_tab.find(".tab-content").height(tab_content_h);
        var target_h = this_zen_tab.find(target + ">.inner").outerHeight();
        this_zen_tab.find(".tab-content").height(target_h);
        
        this_zen_tab.find(".tab-content .content").removeClass("aktif");
      }, 300);
      
      setTimeout(function(){ 
        this_zen_tab.find(target).addClass("aktif");
        this_zen_tab.find(target).addClass("tampil");
        this_zen_tab.find(".tab-content").height("auto");
      }, 600);
      

      
      console.log(target);
    });
    return this;
  }
  
  
  
  
})(jQuery);