//数据定义 
    var data=[
      {img:1,h1:'科比布莱恩特',h2:'你见过洛杉矶凌晨四点的太阳吗？'},
      {img:2,h1:'二十七八岁',h2:'You Belong With Me'},
      {img:3,h1:'梅西',h2:'史无前例的六冠王'},
      {img:4,h1:'风景',h2:'美丽的日落'},
      {img:5,h1:'周杰伦',h2:'华语乐坛的璀璨明星'},
      {img:6,h1:'莱昂纳多·迪卡普里奥',h2:'奥斯卡影帝'},
      {img:7,h1:'宋仲基',h2:'韩国人气最高明星'},
    ];
    
    var g=function(id){
      if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
      }
      return document.getElementById(id);
    }
    //添加幻灯片的操作
    function addSliders(){
      //获取模板
      var tpl_main=g('template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
      var tpl_ctrl=g('template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
     
      var out_main=[];
      var out_ctrl=[];
      
      for( i in data){
        var _html_main=tpl_main.replace(/{{index}}/g,data[i].img).replace(/{{h2}}/g,data[i].h1).replace(/{{h3}}/g,data[i].h2).replace(/{{css}}/g,['','main-i_right'][i%2]);
        var _html_ctrl=tpl_ctrl.replace(/{{index}}/g,data[i].img);
        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
      }
     
      g('template_main').innerHTML=out_main.join('');
      g('template_ctrl').innerHTML=out_ctrl.join('');
       
      g('template_main').innerHTML+=tpl_main.replace(/{{index}}/g,data[i].img).replace(/{{h2}}/g,data[i].h1).replace(/{{h3}}/g,data[i].h2);
      g('main_'+i).id='main_background';
    }
    
    function switchSlider(n){
      
      var main=g('main_'+n);
      var ctrl=g('ctrl_'+n);
     
      var clear_main=g('.main-i');
      var clear_ctrl=g('.ctrl-i');
      
      for(i=0;i<clear_ctrl.length;i++){
        clear_main[i].className=clear_main[i].className.replace('main-i_active','');
        clear_ctrl[i].className=clear_ctrl[i].className.replace('ctrl-i_active','');
      }
     
      main.className+=' main-i_active';
      ctrl.className+=' ctrl-i_active';
     
      setTimeout(function(){
        g('main_background').innerHTML=main.innerHTML;
      },1000)
    }
  //定义何时处理幻灯片输出
    window.onload=function(){
      addSliders();
      switchSlider(1);
    }
