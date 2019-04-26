# eGov React App 프론트엔드

## 적용 기술

### 자바스크립트 라이브러리 : React

- React https://reactjs.org : UI(유저 인터페이스)를 위한 자바스크립트 라이브러리

### 자바스크립트 패키지 관리자 (패키지 의존성 관리) : npx 및 Yarn

- npm https://www.npmjs.com/ 
  - npx
- Yarn https://yarnpkg.com/

### 단일 페이지 웹앱(single-page application) : Create React App

 - Create React App https://facebook.github.io/create-react-app/

### 컴포넌트 라이브러리 : React Bootstrap 및 styled-components

- 부트스트랩 http://getbootstrap.com : 반응형 웹 및 모바일 우선 웹사이트 개발을 위한 라이브러리
  - React Bootstrap https://react-bootstrap.github.io/ : React를 위해 재작성된 부트스트랩
- styled-components https://www.styled-components.com/

### 적용된 자바스크립트 패키지별 사용 목적

- prop-types : 타입 체크
- bootstrap : 부트스트랩
  - react-bootstrap : 리액트 지원 부트스트랩
- styled-components : 스타일 컴포넌트 
  - styled-reset :(styled-components를 위한) CSS 리셋 
- react-router-dom : 라우터 처리
  - react-helmet : 웹 페이지별 Title 관리
- axios : HTTP 클라이언트
  - http-proxy-middleware : 개발 중 Proxying API 요청

## Screens

- [x] Home
- [x] TV Shows
- [x] Search
- [x] Detail

## API Verbs

https://www.themoviedb.org/

- [x] Top Rated (Movie, TV)
- [x] Search (Movie, TV)
- [x] Now Playing (Movie)
- [x] Upcoming (Movie)
- [x] Popular (TV)
- [x] Airing Today (TV)
- [x] TV Show Detail
- [x] Movie Detail

## 소스 프로그램 분류

### 개발 대상 프로그램
- /
  - package.json
  - README.md
- public/
  - index.html
  - favicon.ico
  - manifest.json
  - (옵션) icons/
- src/
  - *.js
  - Routes/
  - Components/
  - assets/
    - images/

### 빌드 시 서버에 관리하는 프로그램
- node_modules/

### 배포 대상 프로그램 
- build/
  - index.html
  - service-workier.js
  - static/
  - manifest.json
  - favicon.ico
  - *-manifest.json
  - *.js
  - (옵션) icons/


## 실행 방법 요약

### 패키지 다운로드 

egov-react 폴더에서 
``` 
yarn
```
확인 방법 : node_modules 폴더에 관련 패키지 다운로드 되어 있음

### 개발 서버 실행

egov-react 폴더에서 

```
yarn start
```

확인 방법 : 크롬 브라우저의 주소창에 http://localhost:3000 실행

## 개발 방법 및 순서

### React App 생성 

``` 
npx create-react-app egov-react
```

또는,

``` 
yarn create react-app egov-react
```

### React App 환경 설정

jsconfig.json 파일 생성

```javascript 
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
``` 

src/Components 폴더 생성

### 자바스크립트 패키지 추가

**타입 체크**

``` 
yarn add prop-types
``` 
 
웹 페이지별 Title 관리
``` 
yarn add react-helmet
``` 

**부트스트랩 추가**

``` 
yarn add react-bootstrap bootstrap
``` 

참고 : https://facebook.github.io/create-react-app/docs/adding-bootstrap

스타일 컴포넌트 추가 (CSS)

``` 
yarn add styled-components
yarn add styled-reset
``` 

### 개발서버 앱 실행 : http://localhost:3000 접속하여 확인 가능

``` 
yarn start
``` 

### 라우터 처리

```         
yarn add react-router-dom
``` 

참고 : https://facebook.github.io/create-react-app/docs/adding-a-router

### Progressive Web App (PWA) 만들기

src/index.js 수정

```javascript
serviceWorker.register()
```

src/serviceWorker.js 수정

참고 : https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 배포용 빌드 (Production Build)

``` 
yarn build
``` 

참고 : https://facebook.github.io/create-react-app/docs/production-build

### 백엔드 통합

#### 프록시 처리

``` 
yarn add http-proxy-middleware
``` 

setupProxy.js 파일 생성 : 프록시 처리 (서버단 프로그램 연동)
``` 
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:8080/' }));
};
``` 

참고 : https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development


#### **데이터 Fetching ** with AJAX Requests

``` 
yarn add axios
``` 

참고 : https://facebook.github.io/create-react-app/docs/fetching-data-with-ajax-requests#docsNav


#### Integrating with an **API Backend**

참고 : https://facebook.github.io/create-react-app/docs/integrating-with-an-api-backend

####  **Title 및 Meta Tag 수정**

public 폴더 내 HTML 파일 수정

```html
<html lang="ko">
```

```html
<meta name="description" content="대한민국 전자정부서비스를 제공합니다." />
    <meta
      name="keyword"
      content="전자정부, 전자정부서비스, 금융서비스, 표준프레임워크, React"
    />
    <meta name="author" content="coolitea" />
```

```html
<title>전자정부서비스</title>
```

```html
<noscript> 이 사이트의 기능을 모두 활용하기 위해서는 자바스크립트를 활성화 시킬 필요가 있습니다. 
<a href="http://www.enable-javascript.com/ko/" target="_blank"> 
브라우저에서 자바스크립트를 활성화하는 방법 
</a> 을 참고 하세요.
</noscript>
```

참고 : https://facebook.github.io/create-react-app/docs/title-and-meta-tags

### 배포 : 클라이언트 사이드 라우팅 (Client-Side Routing)

public/manifest.json 수정

```
"start_url": "/egov-react/index.html",
```

package.json 파일 내 

```javascript
"homepage": "http://coolitea.github.io/egov-react"
``` 

#### HashRouter 사용 

또는, 

#### BrowserRouter를 사용한다면

```javascript
<BrowserRouter basename="/egov-react"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

참고 : https://facebook.github.io/create-react-app/docs/deployment

### 테스트

``` 
yarn add --dev react-test-renderer
``` 

참고 : https://facebook.github.io/create-react-app/docs/running-tests
