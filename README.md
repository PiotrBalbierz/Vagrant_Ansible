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

### Uruchomienie prostego serwera HTTP

Uruchom najprostszy serwer HTTP, używający modułu *http*:
```
$ node simplewebserver.js
```
Przetestuj jego działanie korzystając z przeglądarki oraz programu `curl`: 
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
