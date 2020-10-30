import React from 'react'
import styled from 'styled-components'

const ListBox = ({
  comments,
  title,
  user,
  number,
  created_at
}) => (
  <List>
    <div>
      <h3>
        <span>{`###${number} `}</span>
        <span>{title}</span>
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
