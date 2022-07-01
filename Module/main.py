# 공공데이터포털에서 제공하는 sample code
import requests, json

url = 'http://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList'

serviceApiKey = 'Zxc+L1BY7vTH4mkcjzGShFsue5yUAk2q55yjb3nUf7EeeXcsQTv9nE7qIjVN2oU01PuQMJ+iHQGuo2fa2ZlJlw=='

params ={'page' : '1',
         'perPage' : '10',
         'returnType' : 'JSON',
         'cond[addr::LIKE]' : '전라남도 나주시 전력로 55',
         'serviceKey' : serviceApiKey }

response = requests.get(url, params=params)
responseJson = json.loads(response.text)
print(responseJson['data'][0]['addr'])
