

		async function get_data(){

			var picture = document.querySelector('#pic');
			picture.removeAttribute('src');

			imgDivCreate();

			var customDate = document.querySelector("#chooseDate").value;
			if (Date.parse(customDate) > Date.parse(Date())) {
			alert("Future Date is not allowed, Please Select Past Date");
			customDate = '';
			}

			var url = "https://api.nasa.gov/planetary/apod?api_key=";
			var api_key = "ghltjbpUXwQmt0dmq0Va2QHOiCxlM6YJt0NzHiqG&date=" + customDate;
			var apiUrl = url + api_key;
			var html = await fetch(apiUrl);
			var result = await html.json(html);

			console.log(result);

			document.querySelector("#title").innerText = result.title;
			document.querySelector("#date").innerText = result.date;
			document.querySelector("#explanation").innerText = result.explanation;
			picture.src = result.url;
			if (picture.getAttribute('src') !== " " && picture.getAttribute('src').match(/jpg.*/)) {
			picture.style.display = "block";
			document.querySelector('.pic-div').classList.remove('dummy');
			}else{
			picture.src = "https://www.theramblehotel.com/wp-content/uploads/2017/11/dummy-800x800.jpg";
			picture.style.display = "block";
			document.querySelector('.pic-div').classList.remove('dummy');
			}
		}

		get_data();

		

		function imgDivCreate(){
			 document.querySelector('#pic').style.display = "none";
			document.querySelector('.pic-div').classList.add('dummy');
		}

	