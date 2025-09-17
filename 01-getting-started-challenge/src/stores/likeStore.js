// TODO: zustand에서 create 함수를 import하세요
import { create } from '???';

// TODO: Zustand 스토어를 생성하세요
// export const useLikeStore = create(??? => ({
// TODO: 초기 상태를 정의하세요 (좋아요 수)
// likes: ???,
// TODO: 좋아요를 1 증가시키는 액션을 만드세요
// addLike: () => set(???),
// TODO: 좋아요를 1 감소시키는 액션을 만드세요 (0 미만으로는 내려가지 않음)
// removeLike: () => set(???),
// TODO: 좋아요를 0으로 초기화하는 액션을 만드세요
// resetLikes: () => set(???),
// }));

// 💡 힌트:
// 1. create 함수는 상태와 액션을 정의하는 함수를 받습니다
// 2. set 함수를 사용해서 상태를 업데이트할 수 있습니다
// 3. 현재 상태에 접근하려면 set((state) => ({ ... })) 패턴을 사용하세요
// 4. removeLike에서는 Math.max(0, state.likes - 1)를 활용해보세요
// 5. 새로운 값으로 덮어쓰려면 set({ ... }) 패턴을 사용하세요

/* 
완성 예시:
export const useLikeStore = create((set) => ({
  likes: 0,
  addLike: () => set((state) => ({ likes: state.likes + 1 })),
  removeLike: () => set((state) => ({ likes: Math.max(0, state.likes - 1) })),
  resetLikes: () => set({ likes: 0 }),
}));
*/
