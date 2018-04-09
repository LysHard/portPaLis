		function odliczanie()
	{

		var dzisiaj = new Date();





		var godzina = dzisiaj.getHours();
		if (godzina <10) godzina = "0"+godzina;

		var minuty = dzisiaj.getMinutes();
		if(minuty <10) minuty= "0"+minuty;

		var sekundy = dzisiaj.getSeconds();
		if(sekundy <10) sekundy= "0"+ sekundy;


		document.getElementById("time").innerHTML =godzina + ":"+ minuty +":" + sekundy;

		setTimeout ("odliczanie()",1000);
	}
