import React from 'react';
import ReactDOM from 'react-dom';
import FilteredList from './utils/FilteredList'
import AsyncResource from './utils/AsyncResource'
import Loader from './utils/Loader'

const ArticleRow = ({ article }) => <h2>{article.title}</h2>
const ArticleList = () => {
    const [filter, setFilter] = React.useState(() => articles => articles)
    const [articles, setArticles] = React.useState({
        data: [],
        loading: true
    })

    setTimeout(() => {
        // load from request
        setArticles({
            data: [
                { title: "PHP is deprecated", read: true },
                { title: "JS is worse than PHP", read: false },
                { title: "But TS makes JS better than PHP", read: false }
            ],
            loading: false
        })
    }, 1500)

    const handleShowAll = () => setFilter(() => articles => articles)
    const handleShowUnread = () => setFilter(() => articles => articles.filter(article => !article.read))
    const handleShowRead = () => setFilter(() => articles => articles.filter(article => article.read))

    return <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowUnread}>Show Unread</button>
        <button onClick={handleShowRead}>Show Read</button>
        <hr />

        <AsyncResource
            resource={articles}
            loading={<Loader />}
            empty={"There is not any articles"}
            loaded={<FilteredList
                filter={filter}
                list={articles.data}
                render={article => <ArticleRow article={article} />}
            />}
        />

    </div>
}

const App = () => <>
    <h1>Articles</h1>
    <ArticleList />
</>

ReactDOM.render(<App />, document.getElementById('app'))