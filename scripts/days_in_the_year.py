from datetime import date, datetime

start_of_the_year = date(2021, 1, 1)
today = date.today()
delta = today - start_of_the_year
days_between = delta.days + 1
print(days_between)