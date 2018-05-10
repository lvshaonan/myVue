
function MyVue(options){
  this.$el = options.el;
  this.$data = options.data;
  if(this.$el){
    // 进行编译
    new Compile(this.$el, this);
  }
}