document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        // document.querySelector('.AssignmentName').style.transform = 'translateY(' + scrollPosition * 0.6 +'px)';
        document.querySelector('.satellite').style.transform = 'translateY(' + scrollPosition * -0.3  + 'px)';
        document.querySelector('.satellite').style.transform = 'translateX(' + scrollPosition * -0.1 + 'px)';
        document.querySelector('.cloud1').style.transform = 'translateX(' + scrollPosition * -0.4 + 'px)';
        document.querySelector('.cloud2').style.transform = 'translateX(' + scrollPosition * 0.2 + 'px)';
        document.querySelector('.cloud3').style.transform = 'translateX(' + scrollPosition * -0.08 + 'px)';
    });
});

function myFunction() {
    window.location.reload();
    window.scrollTo(0,0);
}