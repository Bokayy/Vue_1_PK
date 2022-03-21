Vue.component("mycmp",{
    template:
    '<p> test component pageNo: {{page}} (<button @click="increment">Change</button>)</p>',
    props:['page'],
    methods:{
        increment: function() {
            this.page++;
        }
    }

});

new Vue({
    data: {
        page:0,
        showPagination: false, 
    },
    el: '.container',
    methods: {
        pagination() {
            this.showPagination = !this.showPagination;
            console.log('pagination');
        }
    },
    computed:{
        output: function(){
            return this.page;
        }
    },
    template:
    '<mycmp class="mycmp" :page=output></mycmp>'
});
