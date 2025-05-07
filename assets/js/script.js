document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado'); // Debug 1
    
    const copyrightContent = document.querySelector('.copyright-content');
    if (!copyrightContent) {
      console.error('Elemento .copyright-content não encontrado!'); // Debug 2
      return;
    }
  
    console.log('Observador criado para:', copyrightContent); // Debug 3
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('Entrada observada:', entry); // Debug 4
        if (entry.isIntersecting) {
          console.log('Elemento visível - ativando animação'); // Debug 5
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
  
    observer.observe(copyrightContent);
  });