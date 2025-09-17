# ❤️ Zustand 좋아요 카운터 챌린지

학생들이 challenge 폴더에서 수행해야 할 미션입니다.

## 🎯 미션

간단한 **좋아요 카운터**를 만들어보세요!

## 📋 요구사항

### 1. 좋아요 스토어 생성: `src/stores/likeStore.js`

- `likes`: 좋아요 수 (초기값: 0)
- `addLike`: 좋아요 +1
- `removeLike`: 좋아요 -1 (단, 0 미만으로는 내려가지 않음)
- `resetLikes`: 좋아요 0으로 초기화

### 2. LikeButton 컴포넌트: 좋아요 버튼과 카운트 표시

- Zustand 스토어에서 상태와 액션들을 가져오기
- 버튼 클릭 시 적절한 액션 호출하기
- 현재 좋아요 수 표시하기

### 3. LikeStatus 컴포넌트: 좋아요 수에 따른 메시지 표시

- 좋아요 수만 선택적으로 구독하기 (성능 최적화)
- 조건부 렌더링으로 상태별 메시지 표시하기

#### 메시지 조건:

- **0개**: "아직 좋아요가 없어요"
- **1-5개**: "좋아요를 받고 있네요!"
- **6-10개**: "인기가 많아요!"
- **11개 이상**: "대박! 너무 인기 있어요!"

## ✅ 확인하기

다음 기능이 정상적으로 작동하는지 확인하세요:

- [ ] 좋아요 버튼을 누르면 카운트가 증가한다
- [ ] 좋아요 취소 버튼을 누르면 카운트가 감소한다 (0 미만으로는 가지 않음)
- [ ] 리셋 버튼을 누르면 카운트가 0이 된다
- [ ] 좋아요 수에 따라 상태 메시지가 올바르게 표시된다
- [ ] 두 컴포넌트가 실시간으로 같은 상태를 공유한다

## 💡 힌트

### 스토어 구현 힌트:

```javascript
// removeLike 액션에서 Math.max(0, state.likes - 1)를 활용해보세요
removeLike: () =>
  set(state => ({
    likes: Math.max(0, state.likes - 1),
  }));
```

### 조건부 렌더링 힌트:

```javascript
// 삼항 연산자나 논리 연산자를 사용해보세요
{
  likes === 0 && '아직 좋아요가 없어요';
}
{
  likes >= 1 && likes <= 5 && '좋아요를 받고 있네요!';
}
```

### 선택적 구독 힌트:

```javascript
// 필요한 상태만 선택적으로 구독할 수 있어요
const likes = useLikeStore(state => state.likes);
```

### Zustand 성능 최적화:

```javascript
// 전체 스토어 대신 필요한 부분만 구독
const likes = useLikeStore(state => state.likes);
const { addLike, removeLike } = useLikeStore(state => ({
  addLike: state.addLike,
  removeLike: state.removeLike,
}));
```

## 🚀 시작하기

1. **개발 서버 실행**:

   ```bash
   npm run dev
   ```

2. **브라우저에서 확인**:
   `http://localhost:5173`

3. **TODO 주석 따라가기**:
   각 파일의 TODO 주석을 순서대로 완성하세요

## 🎓 Zustand 핵심 학습 포인트

### 1. 스토어 생성과 액션 정의

- `create()` 함수로 스토어 생성
- `set()` 함수로 상태 업데이트
- 현재 상태에 접근하는 방법

### 2. 컴포넌트에서 스토어 사용

- 구조분해 할당으로 필요한 값들 가져오기
- 선택적 구독으로 성능 최적화
- 액션 함수 호출하여 상태 변경

### 3. 상태 공유와 리액티브 업데이트

- 여러 컴포넌트가 같은 스토어 구독
- 상태 변경 시 자동 리렌더링
- 실시간 동기화 확인

## 🎉 완성 기준

모든 TODO가 해결되고 위의 확인사항이 모두 통과하면 **Zustand 기본기 완성**입니다!

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
