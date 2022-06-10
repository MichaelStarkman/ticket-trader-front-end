Ticket Trader 

Ticket Trader allows users to post available tickets to sel or trade for local sports, music, and comedy events. Ticket Trader is composed of a Django backend and React front end. Users are able to create, read, update, and delete posts. Some challenges I faced was incorporating class based and functional components. I plan on refactoring the entire application to use functional components to improve to overall functionality of the application. 

I also want to add a comments model to allow other users to respond to ticket posts with alternative offers or commmitals. I will also add some react bootstrap modals to improve the appearance of the application as well. 

TO DO: Make flow chart showing how to us application


Hosted App Link
-back end link:
 https://ancient-woodland-14399.herokuapp.com/api/tickets/
-front end link:
 https://ticket-trader.herokuapp.com/

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

To DO:
    Set DateField to accept today and future dates
    Comments or Trade proposal section

