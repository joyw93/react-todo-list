# :pushpin: react-todo-list
>리액트로 만든 나만의 Todo-list
>



</br>

## 1. 제작 기간 & 참여 인원
- 2022.04.24 ~ 2022.04.26 (3일)
- 개인 프로젝트

</br>

## 2. 사용 기술

#### `Front-end`
  - React
</br>

## 3. 시연영상
https://user-images.githubusercontent.com/48177285/165306184-5117bcc5-70e7-4227-95e1-b92ec0532c5c.mp4


## 4. 회고

함수 내에서 useState를 사용하여 state가 변경되는 즉시 modal창이 뜨도록 코드를 작성했지만
기능이 뜻대로 수행되지 않았고, 디버깅을 통해 useState가 비동기 방식으로 실행된다는 사실을 알게 됐습니다.

그래서 useEffect를 사용해서 해당 state값이 변경 될 때 함수가 호출되는 방식으로 문제를 해결했습니다.
