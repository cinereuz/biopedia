// Navigate to pedia or sorry page
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.toLowerCase();

    if (searchText === 'sel') {
      window.location.href = '../pedia/sel.html';
    } else if (searchText === 'kucing') {
      window.location.href = '../pedia/kucing.html';
    } else if (searchText === 'dna') {
      window.location.href = '../pedia/dna.html';
    } else if (searchText === 'mangga') {
      window.location.href = '../pedia/mangga.html';
    } else if (searchText === 'katalase') {
      window.location.href = '../pedia/katalase.html';
    } else if (searchText === 'enzim katalase') {
      window.location.href = '../pedia/katalase.html';
    } else if (searchText === 'adaptasi') {
      window.location.href = '../pedia/adaptasi.html';
    } else {
      window.location.href = `../pedia/sorry.html?q=${searchText}`;
    }
  });
});

// transparent navbar pedia
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('with-background');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('with-background');
    navbar.classList.add('transparent');
  }
});
