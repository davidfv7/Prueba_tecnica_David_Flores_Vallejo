window.$ = require('jquery');
window.Vue = require('vue');
//var d3 = require("d3");
import Knob from 'jquery-knob/dist/jquery.knob.min.js';
import graph from './graphs.vue';
import dataStore from "./init.js";
window.Vue.component("graph", graph);


const app = new Vue({
    //mixins: [mixin],
    el: "#app-container",
    data: function() {
        return {
           vueStore:{entries:[]}
        }
    },
    mounted(){
        this.vueStore.entries=dataStore();
        console.log(this.vueStore)
        $('.knob-graph').knob({
            'displayPrevious': 'true',
        });
       
       
    },
    updated: function() {
        var app = this;

        $('.knob-graph').knob({
            'displayPrevious': 'true',
        });
        
    },
});