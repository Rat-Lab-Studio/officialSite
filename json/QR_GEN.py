import qrcode

uuid = "123e4567"
url = f"https://manelvector.github.io/battery-passport/?id=BPASSVEBESS00001250919AVT01"

img = qrcode.make(url)
img.save(f"qr_{uuid}.png")