<template >
<div :class="'knob-container '+componentClass">
   <div class="title">
    {{title}}
   </div>
   <input type="text" data-width="200" data-displayInput=false data-thickness=".1" :data-fgColor="fgColor" :data-bgColor="bgColor"  :value="smartphone" :data-max="total" readonly id="" class="knob-graph dial">
   <div class="value">
    {{formattedTotal}}
   </div>
   <div class="info">
    <div class="tablet">
      <h3 class="title">Tablet</h3>
     
      <div class="desc">
       <p>{{tabletPercentage}}</p>
       <p>{{formatNumber(tablet)}}</p>
      </div>
      
    </div>
    <div class="smartphone">
      <h3 class="title">Smartphone</h3>
     
      <div class="desc">
       <p>{{smartphonePercentage}}</p>
       <p>{{formatNumber(smartphone)}}</p>
      </div>
      
    </div>
   </div>
   
</div>

</template>

<script>

export default {
 props:  {
        valuetype: {
           type: String,
           required: false
        },
         smartphone: {
           type: Number,
           required: false
        },
         tablet: {
           type: Number,
           required: false
        },
         title: {
           type: String,
           required: false
        },
        color: {
           type: String,
           required: false
        },
 },
data: function() {
        return {
            colors: {"blue":{"fg":"#285166","bg":"#72c6dc"},"yellow":{"fg":"#ba581a","bg":"#e7ce4f"},"green":{"fg":"#36650e","bg":"#8ad041"}}
        }
    },
methods:{
   formatNumber(num){
       if(this.valuetype=="money"){
return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+"€"
       }else{
return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
       }
     
   }
},
computed: {
    tabletPercentage: function(){
      var per = (this.tablet*100)/this.total;
      return per+"%";
    },
    smartphonePercentage: function(){
      var per = (this.smartphone*100)/this.total;
      return per+"%";
    },
    componentClass: function(){
       if(this.color!=""){
           return this.color+"-knob";
       }else{
           return "default-knob";
       }
    },
    fgColor: function(){

     return this.colors[this.color].fg;
       
        
    },
    bgColor: function(){
      return this.colors[this.color].bg;
    },
    total: function(){
        return parseInt(this.tablet)+parseInt(this.smartphone)
    },
    formattedTotal: function(){
      
return this.formatNumber(this.total)
       
           
        
    }
}

}
</script>
