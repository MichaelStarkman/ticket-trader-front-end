repository for ticket trader react frontend

Ticket Trader app


Hosted App Link
-back end link: https://ancient-woodland-14399.herokuapp.com/api/tickets/
-front end link: https://ticket-trader.herokuapp.com/

Technology Used
    - HTML, CSS, React
    

Frameworks & Libraries
    -Django REST

class Ticket(models.Model):
    name = models.CharField(max_length=32)
    venue = models.CharField(max_length=32) 
    event_date = models.DateField(null=True)
    price = models.IntegerField()


FUTURE FEATURES

    Images
    Comment option on tickets

General Assembly Project Requirements
Django Backend: Serve a JSON API with all CRUD operations available across your models. The Django API must be deployed online via Heroku.
Your API must have at least one model.
React frontend: Serve a React frontend that consumes (a.k.a relies on fetch requests to) your Django API. You should be able to perform all CRUD operations through the React app and have them execute in and persist in the Django database. The React frontend must be deployed online, separately from your API, via Heroku.
Two git repositories hosted on Github, with a link to the relevant live sites, and frequent commits dating back to the very beginning of the project. Commit early, commit often!
At least one Github commit per day.
A README.md file with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
Have links to your hosted and working apps in the README.md files in your GitHub repos.



Notes to self:
    Set DateField to accept today and future dates

