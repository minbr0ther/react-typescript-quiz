<p align="middle" >
  <img src="https://user-images.githubusercontent.com/24728385/152621011-4fb46312-7bc3-4816-ad8d-4aff377e0636.png"/>
</p>
<br/>
<h1 align="middle">React / Typescript Tutorial - Build a Quiz App</h1>

## ๐ ๋ฐฐํฌ
https://61ffb7e7e12ddee0933262cf--lucid-goldwasser-f5b160.netlify.app

<br>

## ๐น ํ์ ๊ตฌํ์ฌํญ

1. API์์ ๋ฐ์ ๋ฐฐ์ด์ ๋๋ค์ผ๋ก ์์ด์ ์ ์ฅํ๋ค
```javascript
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

```

<br/>

2. ํด๋ฆญ ์ ์๋ ํ๋, ์ ๋ต์ด๋ฉด ์ด๋ก ๋ฐฐ๊ฒฝ, ์ค๋ต์ด๋ฉด ๋นจ๊ฐ ๋ฐฐ๊ฒฝ
```javascript
background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
```

<br/>

3. ์ํ ๋ณ๊ฒฝ์ ๋ฐ๋ฅธ ์ปดํฌ๋ํธ ๋ธ์ถ ๋ณ๊ฒฝ
```javascript
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
```

<br>

## ๐ป ์คํ ๊ฒฐ๊ณผ

<img src="https://user-images.githubusercontent.com/24728385/152680020-4ca9c0d3-161c-474e-a33d-1a5d37430fcc.gif"/>

<br>

## โ Git - Commit Message Convention [๐](https://doublesprogramming.tistory.com/256)

- feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- fix : ๋ฒ๊ทธ ์์ 
- docs : ๋ฌธ์ ์์ 
- style : ์ฝ๋ ํฌ๋งทํ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ
- refactor : ์ฝ๋ ๋ฆฌํํ ๋ง
- chore : ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์ 

<br>

## ๐ ์ถ์ฒ
https://www.youtube.com/watch?v=F2JCjVSZlG0
