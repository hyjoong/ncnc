# 프로젝트 소개

이 프로젝트는 기프티콘을 조회할 수 있는 웹 애플리케이션입니다. 2022년 2월에 완성한 후, 최신 웹 기술을 적용하여 지속적으로 업데이트 및 성능 최적화를 진행하고 있습니다. 또한, Flutter를 사용해 모바일 앱 버전으로도 개발했습니다.

- 서비스 주소: https://ncnc.vercel.app
- 모바일 앱 레포지토리: [ncnc_flutter](https://github.com/hyjoong/ncnc_flutter)

# 기술스택

- 프론트엔드: Next.js 13.4, TypeScript, Styled-Components
- 테스팅: Cypress

# 데모 영상

![니콘내콘 데모](https://github.com/hyjoong/ncnc/assets/70426440/0c0dc232-25ea-4373-90d7-76f95e8581df)

# 최근 업데이트

### PWA(Progressive Web Application) 적용

니콘내콘은 PWA로도 제공되며, 사용자들이 웹 애플리케이션을 모바일 장치의 홈 화면에 추가해서 접근할 수 있습니다.

## Next.js 13으로의 업그레이드

니콘내콘 프로젝트에 최신 웹 개발 기술을 도입하여 사용자 경험을 향상시키고 있습니다. Next.js 13으로 업그레이드 하면서, 기존의 페이지 라우터에서 앱 라우터로의 마이그레이션을 통해 **성능 개선**과 **새로운 기능** 적용을 해볼 수 있었습니다.

### 서버 컴포넌트 도입

- 초기 로딩 시간 단축: 서버 컴포넌트의 도입으로 페이지의 초기 로딩 시간이 단축되었습니다. 특히 클라이언트 사이드 라우팅을 사용하여 SSR로 구현된 페이지로 이동할 때 발생했던 지연 시간을 줄이는 데 도움이 됐습니다.

- 테스트 링크: 기존 서비스와 성능 비교는 아래 링크를 통해 할 수 있습니다.
  - 기존 서비스 주소(Pages Router): https://ncnc-aq66lov57-hyjoong.vercel.app

### 이미지 로딩 최적화

- next/image 활용: Next.js의 next/image 컴포넌트를 활용하여 이미지 로딩 속도를 개선하고, CLS를 최소화 했습니다.

### Parallel & Intercepting Routes 적용

- soft navigation: 상품 상세페이지로 이동이 모달 형식으로 구현되어, 사용자가 상품 리스트에서 상품을 클릭할 때 표시

- hard navigation: 사용자가 직접 URL을 통해 상품 상세 페이지에 접근하거나 페이지를 새로고침할 때는 페이지 형식으로 표시

<img width="700" alt="image" src="https://github.com/hyjoong/ncnc/assets/70426440/c07a4d70-58f1-4adc-ad0a-f563187b10ba">

<br/>

# 주요 개선 사항

## 1. 성능 최적화

- TTFB 감소: Next.js App Router와 서버 컴포넌트를 통해 TTFB(Time to First Byte)를 25% 단축시켰습니다.

- 이미지 최적화: next/image를 사용하여 이미지 로딩 시간을 단축하고, CLS(Cumulative Layout Shift)를 방지했습니다.

## 2. 테스트 자동화

- Cypress와 GitHub Actions: Cypress를 사용한 E2E 테스트를 작성하고, GitHub Actions를 통해 자동화하였습니다.

## 3. 데이터 갱신 최적화

- on-demand revalidation 도입: 데이터 변경 시 프로젝트를 다시 빌드하지 않고도 콘텐츠를 갱신할 수 있는 방식을 도입했습니다.

# ETC

## 기술 블로그 및 문서화

- [Next.js 13 마이그레이션 경험](https://velog.io/@hyunjoong/Next.js-13-pages-app-directory-리펙토링)

- [Next/Image를 통한 이미지 성능 개선](https://velog.io/@hyunjoong/NextImage-optimization-chache-skeleton)

- [PWA적용 경험](https://velog.io/@hyunjoong/Next.js-프로젝트-PWA-구축하기)
