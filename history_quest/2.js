var Q =[];
Q [0] = "В каком году пришел к власти Сталин?";
Q [1] = "В каком году было нападение на Перл-Харбор?";
Q [2] = "В каком году была Сталинградская битва?";
Q [3] = "Сколько длилась блокада Ленинграда?";
Q [4] = "Кто сконструировал Т-34?";
Q [5] = "Как расшифровать КВ?";
Q [6] = "Масса танка Пантера?";
Q [7] = "Кто такой \"лис пустыни\"?";
Q [8] = "Сколько и в каком концлагере держали Степана Бандеру?";
Q [9] = "Расшишровать SS?";

var A =[];
A [0] = "1928";
A [1] = "1941";
A [2] = "1942";
A [3] = "3";
A [4] = "Кошкин";
A [5] = "Клим Ворошилов";
A [6] = "45.9";
A [7] = "Генерал Ервин Роммель";
A [8] = "3 года в Заксенхаузене";
A [9] = "Schutz staffel";

var score = 0;

for (var i=0; i<10; i++){
		//alert(i);
		var t = prompt(Q[i], 0);
		if(t == A[i]){
				alert ("Yes");
				score++;
		}
		else{
				alert ("No");
				break;
		}
		alert ("Your right score is " + score);
}

alert ("Your final right score is " + score);