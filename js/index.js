window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 750 ||
      document.documentElement.scrollTop > 750
    ) {
      document.getElementById("navbarr").classList.add('bg-dark')
    } else {
      document.getElementById("navbarr").classList.remove('bg-dark')
    }
  }