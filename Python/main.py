# 공공데이터포털에서 제공하는 sample code
import requests, json
import datetime as dt
from time import sleep

url = 'http://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList'

serviceApiKey = 'Zxc+L1BY7vTH4mkcjzGShFsue5yUAk2q55yjb3nUf7EeeXcsQTv9nE7qIjVN2oU01PuQMJ+iHQGuo2fa2ZlJlw=='

params ={'page' : '1',
         'perPage' : '999',
         'returnType' : 'JSON',
         'cond[addr::LIKE]' : '서울',
         'serviceKey' : serviceApiKey }

x = dt.datetime.now()

while True:
    response = requests.get(url, params=params)
    responseJson = json.loads(response.text)
    print(x.hour)
    print(responseJson['data'])
    #print(responseJson['data'][0]['addr'])
    sleep(3)
