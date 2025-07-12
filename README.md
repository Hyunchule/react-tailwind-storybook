# 리액트 + 타입스크립트 + 테일윈드 + 스토리북 템플릿

이 프로젝트는 최신 React(19), TypeScript, Tailwind CSS, Storybook 환경을 빠르게 구축할 수 있는 템플릿입니다.

## 주요 특징
- Tailwind CSS 완벽 적용
- Storybook에서 Tailwind 유틸리티 클래스 사용 가능
- 모든 컴포넌트에 한글 주석, 명확한 변수명, 에러 처리, 함수 분리 등 전문가 기준 코드
- index.tsx에서 Page 컴포넌트가 메인으로 렌더링됨

## 설치 및 실행 방법
1. 의존성 설치
   ```bash
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm start
   # http://localhost:3000
   ```
3. Storybook 실행
   ```bash
   npm run storybook
   # http://localhost:6006
   ```
4. 배포용 빌드
   ```bash
   npm run build
   # build 폴더 생성
   ```

## 폴더 구조
- `/src` : 리액트 소스 코드
  - `/stories` : Storybook 컴포넌트 및 스토리
    - `Button.tsx`, `Header.tsx`, `Page.tsx` : 주요 UI 컴포넌트 (Tailwind 적용)
    - `*.stories.ts` : 각 컴포넌트의 Storybook 스토리
  - `index.tsx` : 앱 진입점, Page 컴포넌트 렌더링
  - `index.css` : Tailwind CSS 및 글로벌 스타일
- `/.storybook` : Storybook 설정 파일
  - `main.ts` : 빌더/애드온/스토리 경로 등 설정
  - `preview.ts` : 글로벌 스타일 적용, 파라미터 설정 등
- `/public` : 정적 파일
- `tailwind.config.js`, `postcss.config.js` : Tailwind/PostCSS 설정

## 깃허브 저장소 배포 방법
1. 저장소 생성 후 원격 연결
   ```bash
   git remote add origin https://github.com/Hyunchule/react-tailwind-storybook.git
   git branch -M main
   git push -u origin main
   ```
2. 배포용 빌드 후 커밋/푸시
   ```bash
   npm run build
   git add build
   git commit -m "배포용 build 폴더 추가"
   git push origin main
   ```

---

문의 및 피드백은 이슈로 남겨주세요.
