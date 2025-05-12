// 2_2_4 Remove unnecessary state
/*
  При нажатии на кнопку этот пример должен запросить имя пользователя, а затем вывести приветствие. Вы попытались использовать state для хранения имени, но по какой-то причине всегда выводится "Hello, !".

  Чтобы исправить этот код, удалите ненужную переменную state (мы обсудим почему это не сработало позже).

  Можете ли вы объяснить, почему эта переменная состояния была ненужной?
*/

export default function FeedbackForm() {
    function handleClick() {
      const name = prompt('What is your name?') ?? "";
      alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}