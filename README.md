# Dæmi úr fyrirlestri 5

App sem sýnir:

* Auðkenningu með passportjs
* Pug template
* Lestur og skrif í gagnagrunn

Keyrt locally

Hægt að deploya á Heroku, byrjað á að búa til app og logga sig inn með heroku CLI:

```bash
> git clone https://github.com/vefforritun/heroku-test.git
Cloning into 'heroku-test'...

> cd heroku-test

> heroku git:remote -a <nafn á appi> # bæta við remote til að geta pushað á heroku
set git remote heroku to https://git.heroku.com/<nafn á appi>.git

> heroku addons:create heroku-postgresql:hobby-dev # setja upp postgres grunn
Creating heroku-postgresql:hobby-dev on ⬢ <nafn á app>... free

> git push heroku master # ýta verkefni á heroku
...
remote:        https://<nafn á appi>.herokuapp.com/ deployed to Heroku

> heroku run node createdb # býr til töflu með því að keyra það sem er í schema.sql
Running node createdb on ⬢ <nafn á appi>... up, run.2259 (Free)
Schema created
```

[Sjá rest af fyrirlestri](https://github.com/vefforritun/vef2-2018/tree/master/fyrirlestrar/05)
