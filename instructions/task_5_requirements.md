Itransition training tasks, [28.01.2025 1:05]
@everyone

OK, here is a task #5 for you

_For every group: use your language._

Implement a Web-application that can help to test book store application testing. In general, you need to geerate fake book information. Here is what you need to implement.

The single app page allows to:

1. select language and region (at least 3 different), for example, English (USA), German (Germany), anything you prefer;
1. define seed value and with ability to generate a random seed;
1. specify the average number of likes _per book_ (slider with the range from 0 to 10 with possibly fractional values, e.g., 3.7);
1. specify the average number of reviews _per book_ (number field with possibly fractional values, e.g., 4.7).

Itransition training tasks, [28.01.2025 1:05]
If the user change anything, the table below automatically updates (20 records are -re-generated, updated books are shown from the first).

It's necessary to support infinite scrolling in the table (you show 20 records and if the user scroll down, you add next 10 records below — add new so called "page" = "batch of books"). Infinite scrolling is not paging.

The table show contain the following fields:

1. Index (1, 2, 3, ...);
1. Random ISBN;
1. Random title;
1. Random author or authors;
1. Random publisher.

Language of the title, author, review, etc. should be related to the selected language/region. You need to generate random data that looks somehow realistically in corresponding language.

What is fractional number of review or likes? The end user specify number of likes and review PER SINGLE BOOK. If reviews = 0, there are no reviews at all. If reviews = 0.5, every book contains a single review with probability 0.5 (one review per two books). 10 reviews results in 10 reviews in every record.

All 4 parameters (region, seed, likes, reviews) are independent, when user change one of them, other stay the same, but, of course, books change.

Itransition training tasks, [28.01.2025 1:05]
Each record should be expandable, when user clicks on it, the detailed information is shown, for example, random book cover image (with proper title and author rendered over some random backgroud), review texts and authors, etc.

About seed.

Of course, you do not store RANDOM data on the server. Вut you have to _generate data on the server_, not client. _Single server, no "front" and "back" separation, and no database at all_ (well, you theoretically may use database for lookup tables, but you definitely don't have to, it's not a good approach in this case :)).

When the user change seed, you have to change generated data. It's important that the seed passed to RNG algorithm is combination of the user seed and batch-page number (so, you don't re-generate pages 1..9 when the user requests page 10 with the same settings). How do you combine entered seed and page number? It's not really important, some kind of sum should be enough. IMPORTANT: if I enter the same seed tomorrow I have to get the same data as today _on all pages_.

Note, that changing seed changes the data, but the same seed values should result in the same data.

In case, if you don't use a 3rd-party libary (BUT IT'S HIGHLY RECOMMENDED TO USE SOME) you will need to use large enough lookup tables (much much more than 2 names and 10 titles), let's say hundreds of names, thousands of surnames, ~10000 titles, etc.

And again: data should look like as realistic as possible, but there is no need to make them _sensible_.

Itransition training tasks, [28.01.2025 1:05]
Application should work WITHOUT registration or/and authentication. Please, note that "looking nice and real" titles and covers will be graded higher (let's say that "Lorem ipsum" isn't cool enough)

Optional requirements:

1. Add Export to CSV button (generate the number of pages which is displayed to user currently). You have to use ready CSV-formatter (DO NOT concatenate string by hands — e.g. titles easily can contain comma and semicolon of anything).
1. Add alternative "Gallery View" (not instead of the table, but as an option).

_How to submit the solution_

Send to p.lebedev@itransition.com:

1. Full name.
1. Link to the deployed project (you can use any hosting you find suitable).
1. Link to the code.
1. Recorded video demonstation (generation for different regions, infinite scrolling demo with 5-10 pages, change number of likes from 0 to 0.5, then to 5), change seed, demonstrate that data is changes, then return the seed value back.

Deadline: 29.01.2025

YOU CAN (AND _MUST_) USE 3RD-PARTY LIBRARIES FOR DATA GENERATION (check some Faker ports).

Itransition training tasks, [28.01.2025 1:06]
Here is an example for #5

Let's say user opens the app and the default region is USA and app started with a random seed = 42, so he/she can get something like:
Stranger in NNew York, John Lee Smith, ....
Bang!, Jane Doe, Lee D. Harvey, ...
100 Thing To Do With Cars, Phil G. McDormand, ...
Then user changes region to France:
Marseille et la dame rose, Maribel Shiras, ...
La librairie des livres interdits, Capicine Semeaux, ...
Il suffit parfois d'un été, Jaques Albane Abelard, ...
Then user press 🔀 and seed automatically changed to some random value, e.g. 4984734:
Le Bleu, Lily-Belle de Shiraz, ...
Bisous, Guy de Lavrous, ...
La grand arbre, Jaques Julie Vernes, ...
The user enters back 42 as a seed value and get back exactly to:
Marseille et la dame rose, Maribel Shiras, ...
La librairie des livres interdits, Capicine Semeaux, ...
Il suffit parfois d'un été, Jaques Albane Abelard, ...
