#include<stdio.h>
//���������������Ƕ������ɴ��⣺ѧϰ�ɼ�>=90�ֵ�ͬѧ��A��ʾ��60-89��֮�����B��ʾ��60�����µ���C��ʾ��
int main(){
	for(;;){
		int score;
		char grade;
		printf("���������: ");
		scanf("%d", &score);
		printf("����ķ���Ϊ%d\n",score);
		if(score==99999){
			break;
		}
		grade = (score>=90)?'A':((score>=60)?'B':'C');
	
		printf("�ɼ���:%c\n",grade);
	}
}