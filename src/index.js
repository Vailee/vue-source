import Vue from "vue";

let vm = new Vue({
  el: "#app",
  data() {
    return {
      title: "学生列表",
      classNum: 1,
      teacher: ["张三", "李四"],
      student: [
        {
          id: 1,
          name: "hong",
        },
        {
          id: 2,
          name: "ming",
        },
      ],
    };
  },
});
console.log(vm.title);
