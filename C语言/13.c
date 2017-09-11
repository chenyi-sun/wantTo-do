//打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数 本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
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
			printf("水仙花数为:%d\n",i);
		}
	}
}