import requests
import bs4

h = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
}

def getHtml(url):
    response = requests.get(url, headers=h)
    if response.status_code == 200:
        response.encoding = "utf-8"
        return response.text
    else:
        print("爬取失败")
        return ""

def getTag(html, tag):
    soup = bs4.BeautifulSoup(html, "html.parser")
    tagList = soup.select(tag)
    return tagList

url = "https://show.ybccode.com/wish/j"

html = getHtml(url)
nameList = getTag(html, "span.name")
for name in nameList:
    print(name.text)