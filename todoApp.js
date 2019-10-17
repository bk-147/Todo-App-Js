let todo = {
    day:'Monday',
    homework:0,
    homeworkDone:0,
    addhomework:function(x){
         this.homework = this.homework + x
    } ,
    finishhomework:function(x){
        this.homeworkDone = this.homeworkDone + x
    },
    summary:function(){
        console.log(`You have ${this.homework-this.homeworkDone} homework(s) remaining today:${this.day}`)
           
    },
    reset:function(){
        this.homework = 0
        this.homeworkDone = 0
    },
    dayChange(x){
        this.day =x
    }
}


todo.addhomework(6)
todo.finishhomework(4)
todo.dayChange('Saturday')
todo.summary()

