const my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

function News(props) {
  const data = props.data
  const newsTemplate = data.map(function(item, index){
    return (
      <div key={index}>
        <p className="news__author">{item.author}:</p>
        <p className="news__text">{item.text}</p>      
      </div>
    )
  })
  return (
    <div className="news">
      {newsTemplate}
    </div>
  );
}

function Comments(props) {
  return (
    <div className="comments">
      Нет новостей - комментировать нечего.
    </div>
  );
}

function App(props) {
  return (
    <div className="app">
      Всем привет, я компонент App!
      <News data={my_news} />
      <Comments />      
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);