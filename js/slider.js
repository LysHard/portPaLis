$(`.slider`).each(function(){              // Dla każdej grupy slajdów.
    var $this   = $(this),                   // Pobranie bieżącej grupy slajdów.
        var $group  = $this.find(`.slide-group`),  // Pobranie elementu o klasie
                                                    // slide-group (kontener).
            var $slides = $this.find(`.slide`), // Obiekt jQuery przechowujący wszystkie slajdy.
                var buttonArray  = [],             // Utworzenie tablicy na przyciski nawigacyjne.
                    var currentIndex = 0,                    // Numer indeksu bieżącego slajdu.  var timeout;
                        // Zmienna do przechowywania licznika czasu.
   // move() - funkcja przeznaczona do przejścia między slajdami
                        // (patrz na kolejnej stronie).
  function advance() {                     // Ustawienie czasu wyświetlania slajdu.
      clearTimeout(timeout);           // Wyzerowanie licznika czasu w zmiennej timeout.
      // Uruchomienie licznika czasu, aby funkcja anonimowa była wywoływana co 4 sekundy.
      timeout = setTimeout(function(){
          if (currentIndex < ($slides.length - 1)) {  // Jeżeli to nie jest ostatni slajd.
              move(currentIndex + 1);           // Przejście do następnego slajdu.
          } else {                            // W przeciwnym razie.
              move(0);                          // Przejście do pierwszego slajdu.
          }    }, 4000);                             // Czas oczekiwania wyrażony w milisekundach.
  }
  $.each($slides, function(index){    // Utworzenie elementu <button> dla przycisku.
      var $button = $(`<button type=”button” class=”slide-btn”>&bull;</button>`);
                      if (index === currentIndex) {    // Jeżeli indeks wskazuje na element bieżący.
          $button.addClass(`active`);    // Dodanie klasy active.    }
                          $button.on(`click`, function(){   // Utworzenie procedury obsługi zdarzeń
                              // dla przycisku.
                              move(index);                   // Wywołanie funkcji move().
                          }).appendTo(’.slide-buttons’);   // Dodanie do elementu zawierającego przyciski.
                          buttonArray.push($button);       // Dodanie przycisków do tablicy.
                      });
  advance();
});
