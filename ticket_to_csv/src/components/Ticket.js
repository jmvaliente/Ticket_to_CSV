import React from 'react'

export default function Ticket(props) {
    const { ticket, index } = props
    console.log(props)
    return (
        <section>
            <h5>Ticket Nº {index + 1}</h5>
            <pre>{ticket.data.data}</pre>
        </section>
    )
}