import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListBox = ({
  comments,
  title,
  user,
  number,
  created_at,
  body,
  id
}) => (
  <List>
    <div>
      <h3>
        <Link to={{
          pathname: `/detail/${id}`,
          bodyProps: body
        }}
        >
          <span>{`###${number} `}</span>
          <span>{title}</span>
        </Link>
      </h3>
      <p>
        <span>{`작성자: ${user} `}</span>
        <span>{`작성일: ${created_at} `}</span>
      </p>
    </div>
    <div>
      <span>{`코멘트: ${comments} `}</span>
    </div>
  </List>
)

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: center;
`

export default ListBox
