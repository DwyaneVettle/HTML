from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
# 浏览器最大化
driver.maximize_window()
# 设置隐式等待
driver.implicitly_wait(10)
driver.get("https://www.baidu.com")
# 定位元素并发送文本内容
driver.find_element(By.ID, "kw").send_keys("test")
sleep(2)
# 页面按钮点击交互
driver.find_element(By.ID, "su").click()
sleep(20)
driver.quit()