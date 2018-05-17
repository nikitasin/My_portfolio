let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
};







let next = document.getElementById('next');
let prew = document.getElementById('prew');

let slidees = document.getElementsByClassName('slidee');
for(let i=0; i<slides.length; i++){
    slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    let activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-500%";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    let activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
};



window.onload = function () {
	let imgArr = document.getElementsByClassName('my__img');

	let modalWindow = document.getElementById('my__modal');
	let modalImg = document.getElementById('img01');
	let caption =document.getElementById('caption');
	let span = document.getElementById('close');
	let modalBlock = document.getElementById('modal__block');

	for(i=0;i<imgArr.length;i++){
		let picture = imgArr[i];
		picture.onclick = function(){
			openImg(this);
		}
	}
	function openImg(pic){
		modalWindow.style.display='block';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;
		modalImg.alt = pic.alt;
	  caption.innerHTML = modalImg.alt;
	}

	function close(){
		modalWindow.style.display ='none';
	}
	span.onclick = function(){
		modalBlock.style.transform = 'translateY(-100%)';
       
		setTimeout(	close, 500);
	}
    modalBlock.onclick = function(){
		modalBlock.style.transform = 'translateY(-100%)';
       
		setTimeout(	close, 500);
	}
};

document.getElementsByClassName("modal__block").onclick = function()
{
        document.getElementsByClassName("modal__block").style.display = "none";
        
    }
