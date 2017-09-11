#include<stdio.h>
//利用条件运算符的嵌套来完成此题：学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。
int main(){
	for(;;){
		int score;
		char grade;
		printf("请输入分数: ");
		scanf("%d", &score);
		printf("输入的分数为%d\n",score);
		if(score==99999){
			break;
		}
		grade = (score>=90)?'A':((score>=60)?'B':'C');
	
		printf("成绩是:%c\n",grade);
	}
}