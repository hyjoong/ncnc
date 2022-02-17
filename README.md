# 니콘내콘 과제

## [배포링크](https://ncnc.vercel.app/)

## ✨ 구현 사항

- [x] Header

  - [x] 홈인 경우 햄버거 버튼, 홈이 아닐 경우 왼쪽 상단에 뒤로가기 버튼
  - [x] 카테고리, 브랜드 페이지에서 선택한 메뉴를 중앙에 출력

- [x] 홈

  - [x] 브랜드 메뉴 출력 (API)
  - [x] 땡처리 리스트 출력 (API)

- [x] 브랜드 페이지 /brand

  - [x] 카테고리 내에서 브랜드 리스트 출력
  - [x] 땡처리콘, 카페 등 각 카테고리 페이지 생성
  - [x] 브랜드 클릭 or 터치 시 해당 브랜드 상세로 이동

- [x] 상품 리스트 /itemlist

  - [x] 상품 리스트 출력 (API)
  - [x] 상품 개수 좌측 상단에 출력
  - [x] 이미지, 상품명, 할인율, 할인가, ~~정가~~

- [x] 상품 상세 /items

  - [x] 옵션 미선택 시 옵션 선택하기 버튼 렌더링
  - [x] 옵션 선택 버튼 클릭 시 옵션 선택 창 노출
  - [x] 옵션 선택 시 옵션 창 닫히고 선택 옵션과 구매하기 버튼 렌더링
  - [x] 옵션 선택 창 백그라운드 클릭 시 창 닫힘
  - [x] 선택한 옵션 클릭 시 옵션 선택 창 노출

## 🛠 기술스택

- Next JS
- TypeScript
- Styled-Component

## E2E Test

- Cypress
- [Code](https://github.com/hyjoong/ncnc/blob/master/cypress/integration/app_spec.js)
