//��ӡ�����е�"ˮ�ɻ���"����ν"ˮ�ɻ���"��ָһ����λ�������λ���������͵��ڸ��� �������磺153��һ��"ˮ�ɻ���"����Ϊ153=1�����η���5�����η���3�����η���
#include<stdio.h>

int main(){
	int i;
	for(i = 100; i< 1000;i++){
		int total;
		int bit;
		int hundred;
		int ten;
		
		hundred = i/100;
		ten = (i-hundred*100)/10;
		bit = i - hundred*100 - ten*10;
		if(i==(hundred*hundred*hundred+ten*ten*ten+bit*bit*bit)){
			printf("ˮ�ɻ���Ϊ:%d\n",i);
		}
	}
}