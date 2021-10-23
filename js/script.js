$('.testimonial__card-boxes').slick({
    dots: true,
    centerMode: true,
    centerPadding: "400",
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
    });