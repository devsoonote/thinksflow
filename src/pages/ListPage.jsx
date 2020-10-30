import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onGetList } from '../reducers/list'

const ListPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetList())
  }, [dispatch])

  return (
    <section>
      <article>
        <div>
          <h3>###111 issue title</h3>
          <p>
            <span>작성자: name</span>
            <span>작성자: 2019월 12월 31일</span>
          </p>
        </div>
        <div>
          <span>코멘트: 67</span>
        </div>
      </article>
    </section>
  )
}

export default ListPage
