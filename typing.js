// COVER //
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const typing = entry.target.querySelector('.typewriter');

    if (entry.isIntersecting) {
      typing.classList.add('typing-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    typing.classList.remove('typing-animation');
  });
});

observer.observe(document.querySelector('.hvrbox'));
observer.observe(document.querySelector('.hvrbox-1'));
observer.observe(document.querySelector('.hvrbox-2'));
observer.observe(document.querySelector('.hvrbox-text-papers'));
observer.observe(document.querySelector('.hvrbox-text-blog'));
observer.observe(document.querySelector('.hvrbox-text-visualarts'));
