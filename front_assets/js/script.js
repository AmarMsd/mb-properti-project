$(".-carousel").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: $("#arrowNext"),
    prevArrow: $("#arrowPrev"),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                dots:true,
                slidesToShow: 1,
                arrows: false,
            },
        }
    ]
});

function myFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input=document.getElementById('search-home');
    filter=input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
}

const eventClickContent5 = ()=>{
    $('.wrapper-desc-content5').each((index, value)=>{
        $(value).find('h2').on('click',()=>{
            $(value).find('.deskripsi-content5').toggleClass('d-none')
        })
    })
}


eventClickContent5();

const eventContent5 = (self) => {
    $('.deksripsi-content5').addClass('d-none')
    const getDesc = self.querySelector('.wrapper-desc-content5, deskripsi-content5');
}

$('.card-content6').slick({
    dots:true,
    arrows: true,
    responsive:[
        {
            breakpoint:767,
        settings:{
            dots:true,
            arrows:false,

        }
        },
        
        
    ]
});

////////////////////////////

const eventClickContent9 = ()=>{
    $('.wrapper-desc-content9').each((index, value) =>{
        $(value).find('h1').on('click', ()=>{
            $(value).find('deskripsi-content9').toggleClass('d-none')
        })
    })
}

eventClickContent9();

const eventContent9 = (self) =>{
    $('.deskripsi-content9').addClass('d-none')
    const getDesc = self.querySelector('.wrapper-desc-content9, deskripsi-content9');
}



// Select all links with hashes


$('.card-content8').slick({
    dots:false,
    arrows: false,
    slidesToShow:3,
    responsive:[
        {
        breakpoint:767,
        settings:{
            dots:true,
            arrows:false,

        }
        },
        {
            breakpoint: 998,
            settings: {
                dots:true,
                slidesToShow: 2,
                arrows: false,
            },
        }
        
    ]
});
