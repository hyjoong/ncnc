## 프로젝트 개요

이 프로젝트는 중고 기프티콘을 검색하고 조회할 수 있는 웹 애플리케이션입니다.

## 주요 기능

- 메인 페이지에는 카테고리 리스트가 표시된다.
- 사용자가 특정 카테고리를 클릭하면 해당 카테고리의 브랜드 페이지로 이동한다.
- 브랜드 페이지에서 사용자는 여러 브랜드 중 하나를 선택할 수 있다.
- 선택한 브랜드에서 판매하는 기프티콘 상품들이 표시되는 페이지로 이동한다.
  사용자는 특정 상품을 클릭하여 해당 상품의 상세 정보, 가격 및 남은 유효 기간을 확인할 수 있다.

## 업데이트

이 프로젝트는 2022년 2월에 시작되었으며, 최근에 Next.js 13 버전으로 업그레이드되었으며, 리팩토링을 통해 웹 성능 및 SEO 최적화가 진행되었습니다,

## [배포링크](https://ncnc.vercel.app/)

## 주요 개선 내용

### 1. Next.js 13 버전 업그레이드와 서버 컴포넌트 도입

- 기존 SSR 방식을 서버 컴포넌트로 리팩토링하여 TTFB(Time to First Byte)를 감소시키는 데 성공했습니다.

- [블로그 글](https://velog.io/@hyunjoong/Next.js-13-pages-app-directory-리펙토링)

### 2. next/image 적용과 이미지 로딩 최적화

- next/image를 도입하여 이미지 로딩 속도를 개선하고, CLS(Cumulative Layout Shift)를 방지했습니다.

- [블로그 글](https://velog.io/@hyunjoong/NextImage-optimization-chache-skeleton)

### 3. 메타 태그 설정 및 SEO 최적화

- 메타 태그를 설정하여 SEO 최적화를 수행하여 검색 엔진 최적화를 강화했습니다.
<details>
<summary>카카오톡</summary>
<div markdown="1">

![image](https://github.com/hyjoong/ncnc/assets/70426440/c33f94eb-990e-4bb0-a252-b76ea7ce43b8)

   </div>
   </details>

   <details>

   <summary>트위터</summary>
   <div markdown="1">

![image](https://github.com/hyjoong/ncnc/assets/70426440/326809c8-d2ed-4a1c-a196-d2d17988aa12)

   </div>
   </details>

### 4. Cypress 테스트 자동화

- 기존에 작성한 Cypress 코드를 GitHub Actions를 통해 자동화하여 테스트를 자동으로 실행하도록 구축했습니다.

### 5. on-demand-revalidation 도입

- fetch API() 통신에 revalidate 값을 설정하여 캐싱을 적용한 데이터를 on-demand-revalidation 방식으로 갱신하도록 하여 프로젝트를 다시 빌드하지 않고도 데이터 갱신이 가능하게 했습니다.

## 🛠 기술스택

- Next JS 13.4
- TypeScript
- Styled-Components
- Cypress
