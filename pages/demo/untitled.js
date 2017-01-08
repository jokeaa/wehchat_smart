#coding:utf-8
import requests

from scrapy.selector import Selector
def get_movie_list(url):
    content = requests.get(url)
    url_list =  Selector(text=content.text).xpath('//*[@id="content"]/div/div[1]/ol/li/div/div[2]/div[1]/a/@href').extract()
    id = Selector(text=content.text).xpath('//*[@id="content"]/div/div[1]/ol/li/div/div[1]/em/text()').extract()

def get_movie(url,id):
    content = requests.get(url)
    movie_name = Selector(text=content.text).xpath('//*[@id="content"]/h1/span[1]/text()').extract()[0]
    director = Selector(text=content.text).xpath('//*[@id="info"]/span[1]/span[2]/a/text()').extract()[0]
    scriptwriter = Selector(text=content.text).xpath('//*[@id="info"]/span[2]/span[2]/a/text()').extract()
    actor = Selector(text=content.text).xpath('//a[@rel="v:starring"]/text()').extract()
    type = Selector(text=content.text).xpath('//span[@property="v:genre"]').extract()
    country = Selector(text=content.text).xpath('//span[@class="pl"]/text()/following::text()[1]').extract()[4]
    language = Selector(text=content.text).xpath('//span[@class="pl"]/text()/following::text()[1]').extract()[5]
    show_time = Selector(text=content.text).xpath('//span[@property="v:initialReleaseDate"]/text()').extract()
    length = Selector(text=content.text).xpath('//span[@property="v:runtime"]/text()').extract()[0]
    point = Selector(text=content.text).xpath('//strong[@property="v:average"]/text()').extract()[0]

get_movie('https://movie.douban.com/subject/1292052/',1)
for i in range(0,226)[::25]:
    url = 'https://movie.douban.com/top250?start={}&filter='.format(i)

    # get_movie(url)