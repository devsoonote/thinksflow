import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { onGetList } from '../reducers/list'
import ListBox from '../components/molecules/ListBox'

const ListPage = () => {
  const dispatch = useDispatch()
  const { ListState } = useSelector((store) => ({
    ListState: store.list
  }), shallowEqual)

  useEffect(() => {
    dispatch(onGetList())
  }, [dispatch])

  return (
    <Section>
      <ListContainer>
        {ListState && ListState.data && ListState.data.length ? (
          ListState.data.map((item) => {
            const {
              comments,
              id,
              title,
              user,
              url,
              number,
              created_at
            } = item

            return (
              <ListBox
                comments={comments}
                key={id}
                title={title}
                user={user.login}
                url={url}
                number={number}
                created_at={created_at}
              />
            )
          })
        ) : <span>리스트가 없습니다</span>}
        <ListBox />
      </ListContainer>
    </Section>
  )
}

const Section = styled.section`
`

const ListContainer = styled.ul`
  padding-left: 0;
`

export default ListPage
