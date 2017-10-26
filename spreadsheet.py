import gspread
from oauth2client.service_account import ServiceAccountCredentials
from twilio.rest import Client
import time

scope = ['https://spreadsheets.google.com/feeds']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)

sheet = client.open("testcall").sheet1

pnumber = sheet.col_values(1)

# http://twilio.com/user/account
account_sid = 'AC20543e1cfeb923abb4f072d52ce611b6'
auth_token = "c36dc1426a3271dab48e28435da34c87"
client = Client(account_sid, auth_token)

# Make the call
for number in pnumber:
	number = "+"+ number
	call = client.api.account.calls\
	      .create(to=number, 
	              from_="+12403033843", 
	              url="http://twimlets.com/holdmusic?Bucket=com.twilio.music.ambient")
	time.sleep(20)

