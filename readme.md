# HLOG 서버

![image](https://miro.medium.com/max/600/1*LYtHnL6Qq55diP79CKlkhA.png)

# API서버 주소

[링크](https://hlog-server.herokuapp.com/api/v1)

# 기술 스택

![image](https://img.shields.io/badge/-Express-lightgrey)
![image](https://img.shields.io/badge/-MongoDB-green)
![image](https://img.shields.io/badge/-typescript-blue)

# 느낀 점

## + 2021-02-18 (서버 배포에 성공했다!!)

해결은 정말 간단했다... 고민한 내가 너무 바보같을 정도로...
![image](https://user-images.githubusercontent.com/48292190/108333113-ecef8f80-7213-11eb-86c1-a3865174a8bd.png)

DB_URL이라는 config var을 추가해주고 , 그 value에
몽고db에서 클러스터를 만들때 제공해 줬던 url의 값을 연결해주면 되는 문제였다!! 이제 프론트를 빠르게 개발해보도록 하겠다.

~~ 흑역사...

noSQL로 개발을 해보았는데 돈이 없는 관계로 heroku에 배포해서 무료로 만들려고 했다... 그런데 mongoDB 지원이 끊겼다고 한다.
![image](https://user-images.githubusercontent.com/48292190/108331065-b9ac0100-7211-11eb-9825-93a5fb511a50.png)
![image](https://user-images.githubusercontent.com/48292190/108331412-15768a00-7212-11eb-9e9e-042715d6fb8b.png)
...정말 너무 황당했다. 배포할 생각으로 만든 HLOG서버가
물거품이 되었다.

기능은 다 구현했는데 이런 소식이 들리니 너무 슬펐다.
물론 돈을 추가하고 다른 호스팅 서버를 파는 방법이 있지만,
그 방법은 나중에 고민하도록 하고, 지금은 HLOG의 프론트와 연결해서
localhost로만 돌아가도록 구현할려고 한다...
