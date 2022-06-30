# 공공데이터포털에서 제공하는 sample code
# import requests
#
# url = 'http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList'
# params ={'serviceKey' : '	Dkpg0lVsQ7kpCYVji4JqDIBTXji/IG5Sk2WV+ApkA+oVzW+gV493S3WjBB+5WLHUvLsf/x6hk83h4KqTUKEpbw==', 'pageNo' : '1', 'numOfRows' : '10', 'addr' : '전라남도 나주시 전력로 55' }
#
# response = requests.get(url, params=params)
# print(response.content)

# 위 코드랑 근본적으로 다르지 않은 코드 (파라미터를 urlencode을 사용해 직관적으로 바꿈)
import requests, bs4
from urllib.parse import urlencode, quote_plus, unquote


# Service URL
xmlUrl = 'http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList'

My_API_Key = unquote('Dkpg0lVsQ7kpCYVji4JqDIBTXji%2FIG5Sk2WV%2BApkA%2BoVzW%2BgV493S3WjBB%2B5WLHUvLsf%2Fx6hk83h4KqTUKEpbw%3D%3D')
print(My_API_Key)

queryParams = '?' + urlencode(    # get 방식으로 쿼리를 분리하기 위해 '?'를 넣은 것
    {
        quote_plus('ServiceKey') : My_API_Key,      # 필수 항목 1 : 서비스키 (본인의 서비스키)
        quote_plus('pageNo') : 1,       # 필수 항목 2 : 페이지
        quote_plus('numOfRows') : 3,        # 필수 항목 3 : 페이지당 정보 수
        quote_plus('addr') : "전라남도 나주시 전력로 55",     # 필수 항목 4 : 주소
     }
)

# xmlUrl + queryParams 호출 주소와 Parameters를 합쳐 호출 후 response에 응답
response = requests.get(xmlUrl + queryParams)
# utf-8로 인코딩
response = response.text.encode('utf-8')

#Obj로 슬라이싱
xmlObj = bs4.BeautifulSoup(response, 'lxml-xml')
print(xmlObj)

rows = xmlObj.findAll('item')
print(rows)