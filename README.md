# eGov React App

## Screens

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

## API Verbs

https://www.themoviedb.org/

- [ ] Now Playing (Movie)
- [ ] Upcoming (Movie)
- [ ] Top Rated (TV, Movie)
- [ ] Popular (TV)
- [ ] Airing Today (TV)
- [ ] TV Show Detail
- [ ] Movie Detail
- [ ] Search (Movie, TV)

## 작업

React App 생성

``` 
npx create-react-app egov-react
```

또는

``` 
yarn create react-app egov-react
```


src/Components 폴더 생성

jsconfig.json 파일 생성
```javascript 
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
``` 

타입 체크 
``` 
yarn add prop-types
``` 

라우터 처리
```         
yarn add react-router-dom
``` 

(리액트 문법) 부트스트랩 추가

``` 
yarn add react-bootstrap bootstrap
``` 

스타일 컴포넌트 추가 (CSS)

``` 
yarn add styled-components
yarn add styled-reset
``` 


네트워크 처리 : HTTP request (API 호출)

``` 
yarn add axios
``` 

웹 페이지별 Title 관리
``` 
react-helmet
``` 

앱 빌드
``` 
yarn build
``` 

앱 실행 
``` 
yarn start
``` 

테스트
``` 
yarn add --dev react-test-renderer
``` 

Proxy
``` 
yarn add http-proxy-middleware
``` 

setupProxy.js 파일 생성
``` 
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:8080/' }));
};
``` 