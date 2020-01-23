import React from 'react';
import ReactDOM from 'react-dom';

const ArticleRow = ({ article }) => <div>
    <h2>{ article.title }</h2>
</div>

class ArticleList extends React.Component {
    state = {
        articles: [
            { title: "PHP is deprecated", read: true },
            { title: "JS is worse than PHP", read: false },
            { title: "But TS makes JS better than PHP", read: false }
        ],
        filter: (articles) => articles
    }

    filteredArticleList = (filter, articles) => filter(articles).map(article => <ArticleRow article={article} />)

    handleShowAll = () => {
        this.setState({
            filter: articles => articles
        })
    }

    handleShowUnread = () => {
        this.setState({
            filter: articles => articles.filter(article => !article.read)
        })
    }

    handleShowRead = () => {
        this.setState({
            filter: articles => articles.filter(article => article.read)
        })
    }

    render() {
        return <div>
            <button onClick={this.handleShowAll}>Show All</button>
            <button onClick={this.handleShowUnread}>Show Unread</button>
            <button onClick={this.handleShowRead}>Show Read</button>
            <hr/>
            { 
                this.filteredArticleList(this.state.filter, this.state.articles) 
            }
        </div>
    }
}

class App extends React.Component {
    render() {
        return <>
            <h1>asd</h1>
            <ArticleList />
        </>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))