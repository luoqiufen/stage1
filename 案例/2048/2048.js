var game = {
    data: null, //保存数据
    RN: 4, //总行数
    CN: 4, //总列数
    start() { //启动游戏
        // 创建空数组保存在data中
        this.data = [];
        // 遍历循环行r
        for (var r = 0; r < this.RN; r++) {
            // 创建空数组保存在r中
            this.data[r] = [];
            // 内存循环 列c
            for (var c = 0; c < this.CN; c++) {
                // 在r行c列中值为0
                this.data[r][c] = 0;
            }
        }
        // 遍历结束
        this.randomNum();
        this.randomNum();
        this.updatadiv();
        console.log(this.data.join('\n'));
    },
    randomNum() { // 随机生成2,4放在
        // 反复: 
        while (true) {
            // 随机生成0-3的整数保存在r中
            var r = Math.round(Math.random() * (this.RN - 1));
            // 随机生成0-3的整数保存在c中
            var c = Math.round(Math.random() * (this.CN - 1));
            // 如果数组当前位置是0
            if (this.data[r][c] == 0) {
                // 数组当前位置 = (随机生成小数<0.5)?2:4;
                this.data[r][c] = Math.random() < 0.5 ? 2 : 4;
                // 退出循环
                break;
            }

        }
    },
    updatadiv(){
        for(var r=0; r<this.RN; r++){
            for(var c = 0; c<this.CN;c++){
                var n = this.data[r][c]; 
                var div =document.getElementById("c"+r+c);
                if(n!=0){
                    div.innerHTML =n;
                    div.className ="cell n"+n;
                }else{
                    div.innerHTML = "";
                    div.className = "cell";
                }
            }
        }
    },


    /*  m: model, 数据层
    v: voew, 视图层
    vm: viewmodel 视图操作
    图片懒加载: v-lazy */
}
game.start();


 // 遍历数组里面的元素
        // 外层循环r
        // 内层循环c
        // 当前值保存在n中
        // 得到对应div元素('r'+r+c)
        // 如果n != 0
            // 设置div元素为n
            // 设置div的className = "cell n"+n
        // 否则
            // 设置div元素为空
            // 设置div的classname = "cell"