# sisi-l04

## SiSI - laboratorium 4. Node.js jako narzędzie do budowy API RESTful

Do wykonania ćwiczeń z laboratorium potrzebujesz zainstalowanych aplikacji: VirtualBox i Vagrant. Obie aplikacje istnieją w wersjach dla systemów Linux, Windows, Mac.

Po pobraniu repozytorium uruchom maszynę wirtuakną, połącz się z nią, przedź do folderu z przykładowymi aplikacjami i uruchom pierwszy program w JavaScript:
```
vagrant up
vagrant ssh
[vagrant@localhost]$ cd /vagrant
[vagrant@localhost vagrant]$ node start.js
```
Aby zatrzymać serwer node naciśnij Ctrl-C.

Aby wyjść z Vagranta naciśnij Ctrl-D.

Aby zatrzymać maszynę wirtualną (po wyjściu z Vagranta) wpisz `vagrant halt`

### Uruchomienie prostego serwera HTTP

Uruchom najprostszy serwer HTTP, używający modułu *http*:
```
$ node simplewebserver.js
```
Przetestuj jego działanie korzystając z przeglądarki oraz programu `curl` (program `curl` uruchom w innym oknie niż serwer): 
```
> curl http://localhost:8081/
> curl http://localhost:8081/index.html
> curl http://localhost:8081/app/data
``` 
W systemach Linux i Mac program `curl` uruchomisz w oknie Terminal, w systemie Windows najlepiej użyć okna Git BASH.

Uruchom serwer HTTP wykorzystujący framework *express*:
```
node expresswebserver.js
```
Przetestuj go tak samo jak poprzedni. Czy wyniki są takie same?

### Uruchamianie elementow interfejsu REST

Zapoznaj się z przykładami server1.js-server5.js implementującymi polecenia GET, PUT i DELETE. Sprawdź ich działanie przy pomocy programu `curl`. Przykłady wywołań znajdziesz w slajdach do wykładu.

## Zadanie

Przygotuj własną aplikację implementującą interfejs API REST dotyczącą interesującej cię tematyki. Minimalna aplikacja powinna zapewnić:
- zwrócenie listy wszystkich pamiętanych obiektów
- zwrócenie jednego z pamiętanych obiektów (np. po numerze lub nazwie)
- dodanie obiektu do listy
- usunięcie obiektu z listy (np. po numerze lub nazwie)

### Wskazówki i sugestie

- Zacznik od programu server1.js i przenieś odczyt pliku z danymi poza metodę GET / (tak żeby odczyt pliku był wykonywany raz przy uruchamianiu serwera, a nie przy każdym zapytaniu)
- Dodaj funkcję odczytu obiektu o zadanym numerze (z server3.js)
- Dodaj funkcję usunięcia obiektu o wybranym numerze (z server4.js)
- Dodaj funkcję dodawania nowego obiektu (z server2.js i server5.js)
