// slider header


$('.slick-top').slick({
    arrows: false,
    dots: true,
    vertical: true,
});

$('.slick-news').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".news__arrow-prev",
    nextArrow: ".news__arrow-next",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }

        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }

        }
    ]
});

// -----------------------------burger----------------------------------------

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav,.icons').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// --------------------------map-----------------------------------------------
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}


// --------------------------переход между сылками--------------------------


$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});













// map

function initMap() {
    // The location of Uluru
    var uluru = { lat: 40.695078, lng: -73.903453 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uluru });
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({ position: uluru, map: map });

    var image = '/img/pin.png';
    var beachMarker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image,
    });
}




