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
    img = models.CharField(null=True, max_length=100)


FUTURE FEATURES



General Assembly Project Requirements

User Story:


Notes to self:
    Set DateField to accept today and future dates

