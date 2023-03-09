let CalculateGrade = function(StudentScore, MaxScore=100){
    let percentage = (StudentScore/MaxScore)*100;
    let Grade;
    if(percentage>=90 && percentage<=100){
        Grade = 'A';
    }else if(percentage>=80 && percentage<=89){
        Grade = 'B';
    }else if(percentage>=70 && percentage<=79){
        Grade = 'C';
    }else if(percentage>=60 && percentage<=69){
        Grade = 'D';
    }else if(percentage>60){
        Grade = 'F';
    }
    return `You got a ${Grade}(${percentage}%)!`
}

console.log(CalculateGrade(15,20))