import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Card_Facts = ({facts}) => {
    return (
        <StaticQuery
        query={graphql`
          query GetInvolvedItemsQuery {
            dataJson {
                facts{
                    title
                    body
                    img
                    link
                }
            }
          }
        `}
        render={data => (
            getFactsData(data)
        )}
      />
    )
}

const getFactsData = (data) => {
    const dataItemsArray = []
    console.log(data.dataJson)
    data.dataJson.facts.forEach(item => {
        dataItemsArray.push(
            <div class="card fact text-center col-md-6 mb--30">
                <img src={item.img} class="card-img mx-auto d-block" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.body}</p>
                </div>
            </div>
        )
    })
    return dataItemsArray
}

export default Card_Facts