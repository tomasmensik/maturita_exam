# Organizátor maturitních projektů

### Maturitní projekt 2022 SŠPU-Opava

##### Jan Slivka, Tomáš Menšík

## Popis práce

Vytvoření webové aplikace, která bude sloužit studentům z 4. ročníků v oboru IT na SŠPU v Opavě ke správě, organizaci a celkově managementu svých projektů. Ať už na něm pracují ve skupinách či samostatně. Projekt se zaměřuje na lepší plánování, příjemnost a úsporu času.

## Cíl práce

Naprogramovat funkční webovou aplikací, která je schopna být publikovaná na naší škole. Aplikace by měla být přehledná, srozumitelná a hlavně užitečná. Naučit se nové technologie (většinou nové frameworky a knihovny), ve kterých budeme programovat závěrečný projekt.

## Pro koho je projekt určen?

**1.** Pro studenty z 4. ročníků v oboru IT na SŠPU v Opavě, které čeká závěrečný projekt a potřebují pomoc v organizaci.

**2.** Pro učitelé, kteří mohou kontrolovat stav závěrečných projektů svých studentů v reálném čase (aktivita, stav, výsledky).

**3.** Pro veřejnost (not yet).

## Rozdělení práce

- Tomáš Menšík

  > Zaměření na frontend (Vzhled aplikace).

- Jan Slivka
  > Zaměření na backend (Databáze, funkčnost)

## Backend - Jan Slivka

#### Použité technologie:

- [Python] - počítačový programovací jazyk, který se často používá k vytváření webových stránek a softwaru.
- [Django]- open source webový aplikační framework napsaný v Pythonu, který se volně drží architektury Model-Pohled-Šablona (Model-View-Template).
- [ GraphQL] - GraphQL je dotazovací jazyk pro API a běhové prostředí pro plnění těchto dotazů.
- [Github] - platforma pro správu verzí a spolupráci v týmu.

#### Zdroje a tutoriály:

| Zdroj                            | Odkaz                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Youtube - Python Tutorial        | [Click here](https://www.youtube.com/watch?v=rfscVS0vtbw)                                                   |
| Youtube - Django Tutorial        | [Click here](https://www.youtube.com/watch?v=F5mRW0jo-U4)                                                   |
| Stackoverflow - většina problémů | [Click here](https://stackoverflow.com/)                                                                    |
| Hygraph - REST API VS GraphQL    | [Click here](https://www.section.io/engineering-education/integrating-graphql-api-in-a-django-application/) |

#### Časový harmonogram:

- Listopad

> Navržení databáze
>
> Volba frameworků
>
> Vytvořit základ

- Prosinec

> Dockerizace
>
> Api a komunikace se serverem
>
> Propojení frontendu s backendem

#### Celkově strávený čas na projektu: Jan Slivka

| Den        | Čas      | Info                                                               |
| ---------- | -------- | ------------------------------------------------------------------ | --- | --- |
| 30.9.2022  | 1 hodina | Seznámování s projektem a problémy v něm                           |
| 3.10 2022  | 2 hodiny | Vymýšlení projektu a hledání informací                             |
| 4.10.2022  | 4 hodiny | Napsání Github repozitáře, rozvržení projektu, hledání technologií |
| 15.10.2022 | 4 hodiny | Vytváření ERA diagrami                                             |
| 16.10.2022 | 1 hodina | -                                                                  |     | -   |
| 18.10.2022 | 2 hodiny | Vytváření kostry djanga a studování                                |
| 29.10.2022 | 3 hodiny | Úprava ER diagramu a studování djanga                              |
| 12.11.2022 | 2 hodiny | Úprava ER diagramu a studování djanga                              |
| 29.10.2022 | 3 hodiny | Úprava ER diagramu a příprava djanga modelu                        |
| 17.11.2022 | 5 hodin  | Nastavování Mysql databáze                                         |
| 19.11.2022 | 1 hodina | Nastavovní djanga s modelem                                        |
| 20.11.2022 | 3 hodiny | Nastavovní djanga s modelem a studování                            |
| 27.11.2022 | 3 hodiny | Upravování modelu a připravování views                             |
| 6.12.2022  | 3 hodiny | Propojování frontendu s backendem                                  |
| 26.12.2022 | 10 hodin | Finální propojování frontendu s backendem a Dockerizace            |
| 26.12.2022 | 5 hodiny | Setup základy api s Graphql                                        |
| 27.12.2022 | 10 hodin | Setup základy api s Graphql                                        |

## Frontend - Tomáš Menšík

#### Použité technologie:

- [HTML/CSS] - jedna ze základních technologií pro tvorbu webových stránek.
- [Javascript] - dynamický programovací jazyk, který se používá pro vývoj webových stránek, webových aplikací nebo her.
- [React] - knihovna pro tvorbu uživatelského rozhraní.
- [MaterialUi] - knihovna, která nám umožňuje importovat a používat různé komponenty pro vytvoření UI v Reactu.
- [Tailwind] - zrychluje psaní a údržbu kódu v aplikaci.
- [Github] - platforma pro správu verzí a spolupráci v týmu.

#### Zdroje a tutoriály:

| Zdroj                                                        | Odkaz                                                                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Stackoverflow - většina problémů                             | [Click here](https://stackoverflow.com/)                                                              |
| Youtube - Python Tutorial                                    | [Click here](https://www.youtube.com/watch?v=rfscVS0vtbw)                                             |
| Youtube - Django Tutorial                                    | [Click here](https://www.youtube.com/watch?v=F5mRW0jo-U4)                                             |
| Youtube - React Tutorial                                     | [Click here](https://www.youtube.com/watch?v=bMknfKXIFA8)                                             |
| Tailwindcss - Gradient barev z jedné barvy (ctrl k + ctrl g) | [Click here](https://tailwindcss.com/docs/customizing-colors)                                         |
| Bobbyhadz - Fix na error duplicitních knihoven v Reactu      | [Click here](https://bobbyhadz.com/blog/react-invalid-hook-call-hooks-can-only-be-called-inside-body) |

#### Časový harmonogram:

- Říjen

> Rozvržení projektu, vytvoření Readme.md
>
> Nakreslení základního layoutu.
>
> Vybrat hlavní theme barev, fontů a frameworků.
>
> Funkční navbar, sidebar a footer

- Listopad

> ...
>
> ...
>
> ...

- Prosinec

> ...
>
> ...
>
> ...

#### Celkově strávený čas na projektu: Tomáš Menšík

| Den        | Čas      | Info                                                               |
| ---------- | -------- | ------------------------------------------------------------------ |
| 12.9.2022  | ~5 hodin | Základy Pythonu a Django frameworku - tutoriál                     |
| 30.9.2022  | 4 hodiny | Seznámování s projektem a problémy v něm                           |
| 4.10.2022  | 1 hodina | Napsání Github repozitáře, rozvržení projektu, hledání technologií |
| 9.10.2022  | 2 hodiny | Navbar v reactu - 1.0                                              |
| 27.10.2022 | 1 hodina | Navbar v reactu (animace) - 1.1                                    |
| 27.10.2022 | 3 hodiny | Navbar v reactu (Fixování bugů - animace otevírání) - 1.2          |
| 29.10.2022 | ~5 hodin | Učení se Tailwindu a pokročilejšího Reactu - tutoriál              |
| 30.10.2022 | ~8 hodin | Navbar v reactu (kompletně nový navbar) - 2.0                      |
| 7.11.2022  | 4 hodiny | Sidebar v reactu - 1.0                                             |
| 7.12.2022  | 3 hodiny | Scenes - Manage Team                                               |
| 19.12.2022 | 1 hodina | Fix - manage students filter                                       |
| 23.12.2022 | 1 hodina | Poznámky programátora                                              |
| 23.12.2022 | 3 hodiny | Scenes - Calendar                                                  |
| 23.12.2022 | 2 hodiny | Scenes - FAQ                                                       |
| 24.12.2022 | 4 hodiny | Scenes - Pie Chart, Bar Chart, Line Chart                          |
| 25.12.2022 | 3 hodiny | Scenes - Dashboard                                                 |
| 25.12.2022 | 2 hodiny | Fix - Pomáhaní propojení backendu s frontendem                     |
| 28.12.2022 | 2 hodiny | Fix - scenes (nedodělané věci)                                     |
| 28.12.2022 | 6 hodin  | Fix - Pomáhaní s queries a vysvětlování struktury frontendu        |
| 29.12.2022 | 1 hodina | Scenes - Login/Register                                            |
| 29.12.2022 | 1 hodina | Fix - doladění forms u Login/Register podle databáze               |
| 29.12.2022 | 5 hodina | Fix - Pomáhaní s API vypisováním z databáze                        |

#### Instalace a spuštění

- cd C:
- cd Users\ [name] \Desktop
- git clone https://github.com/HansS04/maturitaExam.git
- cd maturitaExam
- cd frontend
- npm install
- cd ..
- docker compose up

#### NápovědY pro budoucí vývojáře:

- Frontend develop:
  > -npm run build
  >
  > složka, která se generuje po úpravách v části frontend aplikace
- před commitem smazat složku: /db
- docker exec -it django_backend bash
- python manage.py createsuperuser
