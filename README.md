<p align="middle" >
  <img src="https://user-images.githubusercontent.com/24728385/152621011-4fb46312-7bc3-4816-ad8d-4aff377e0636.png"/>
</p>
<br/>
<h1 align="middle">React / Typescript Tutorial - Build a Quiz App</h1>

## 🔗 배포
https://61ffb7e7e12ddee0933262cf--lucid-goldwasser-f5b160.netlify.app

<br>

## 🏹 필수 구현사항

1. API에서 받은 배열을 랜덤으로 섞어서 저장한다
```javascript
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

```

<br/>

2. 클릭 전에는 파랑, 정답이면 초록 배경, 오답이면 빨강 배경
```javascript
background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
```

<br/>

3. 상태 변경에 따른 컴포넌트 노출 변경
```javascript
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
```

<br>

## 💻 실행 결과

<img src="https://user-images.githubusercontent.com/24728385/152680020-4ca9c0d3-161c-474e-a33d-1a5d37430fcc.gif"/>

<br>

## ✅ Git - Commit Message Convention [🔗](https://doublesprogramming.tistory.com/256)

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- chore : 빌드 업무 수정, 패키지 매니저 수정

<br>

## 🌐 출처
https://www.youtube.com/watch?v=F2JCjVSZlG0
